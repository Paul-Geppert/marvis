"""Base abstract class for a node."""
import logging

from random import randint

from ns import core, csma, network, wifi, mobility

logger = logging.getLogger(__name__)

class Node:
    """A node represents a computer in the simulation.

    It has a unique name.

    Parameters
    ----------
    name : str
        A unique name for this node.
    """
    def __init__(self, name):
        # Check the name.
        # The names are restricted to this set of characters because
        # the name is used for generating the log file names.
        for char in name:
            if not (char.isalnum() or char in '-_.'):
                raise ValueError('Please only supply alphanumeric names and "-", "_" and ".".')

        #: The cannels the node is connected to.
        self.channels = list()
        #: The name of the node.
        self.name = name

        #: The ns-3 internal node.
        self.ns3_node = network.Node()
        core.Names.Add(self.name, self.ns3_node)

        #: The position of the node (used by wifi models and visualization)
        # TODO GPA: Find a better solution for positioning problem
        self.position = (randint(1, 10), randint(1, 10), 0)

        # Install mobility model for networks
        mobility_helper = mobility.MobilityHelper()
        mobility_helper.SetMobilityModel("ns3::ConstantPositionMobilityModel")
        position_alloc = mobility.ListPositionAllocator()
        position_alloc.Add(core.Vector(self.position[0], self.position[1], self.position[2]))
        mobility_helper.SetPositionAllocator(position_alloc)
        mobility_helper.Install(self.ns3_node)

        #: The color of the node used in the visualization.
        self.color = None

        #: The interfaces (~network cards) of this node.
        self.interfaces = dict()
        #: The dummy interfaces (~network cards of type dummy) of this node.
        self.dummy_interfaces = dict()
        #: A list of additional routing configurations for this node.
        self.routing_configs = []
        #: The command executor for running (shell) commands.
        self.command_executor = None

    @property
    def interface_names(self):
        return [*self.interfaces.keys(), *self.dummy_interfaces.keys()]

    def set_position(self, x, y, z=0): # pylint: disable=invalid-name
        """Set the position of the node and updates the mobitlity model.

        Parameters
        ----------
        x : float
            The x-position.
        y : float
            The y-position.
        z : float
            The z-position.
        """
        self.position = (x, y, z)
        mobility_model = self.ns3_node.GetObject(mobility.MobilityModel.GetTypeId())
        mobility_model.SetPosition(core.Vector(self.position[0], self.position[1], self.position[2]))

    def add_interface(self, interface, name=None, prefix='eth'):
        """Add an interface to the node.

        *Warning:* Do not call this function manually.
            The functionality is handled by the network and channels.

        Parameters
        ----------
        interface : :class:`.Interface`
            The interface to add.
        name : str
            The name of the interface.
        prefix : str
            If no name is supplied, the function works out
            a name by appending a number to the prefix.
        """
        if name in self.interface_names:
            raise ValueError(f'Interface {name} already added')
        if name is None:
            for i in range(256):
                test = f'ns3-{prefix}{i}'
                if test not in self.interface_names:
                    name = test
                    break
            assert name is not None
        logger.debug('Added interface %s to node %s', name, self.name)
        # Set the name. The name can e.g. be used in a container.
        interface.ifname = name
        self.interfaces[name] = interface

    def add_dummy_interface(self, dummy_interface, name=None, prefix='dummy'):
        """Add a dummy interface to the node.

        *Warning:* Do not call this function manually.
            The functionality is handled by the network and channels.

        Parameters
        ----------
        interface : :class:`.Interface`
            The interface to add.
        name : str
            The name of the interface.
        prefix : str
            If no name is supplied, the function works out
            a name by appending a number to the prefix.
        """
        if name in self.interface_names:
            raise ValueError(f'Dummy interface {name} already added')
        if name is None:
            for i in range(256):
                test = f'ns3-{prefix}{i}'
                if test not in self.interface_names:
                    name = test
                    break
            assert name is not None
        logger.debug('Added dummy interface %s to node %s', name, self.name)
        # Set the name. The name can e.g. be used in a container.
        dummy_interface.ifname = name
        self.dummy_interfaces[name] = dummy_interface

    def add_routing(self, routing_config):
        """Add a routing rule to configure routing inside the Node.
        The rule will be activated will preparing the Node.

        *Warning:* Do not call this function manually.
            The functionality is handled by the network and channels.

        Parameters
        ----------
        rule : :class:`.RoutingRule`
            The routing to be configured on Node prepare.
        """
        self.routing_configs.append(routing_config)

    def prepare(self, simulation):
        """Do all neccesary steps to prepare a node for the simulation.

        Parameters
        ----------
        simulation : :class:`.Simulation`
            The simulation to prepare the node for.
        """
        raise NotImplementedError

    def wants_ip_stack(self):
        """Indicates whether a IP stack shall be installed onto the node.

        Installing is handled by the Channel.

        Returns
        -------
        bool
            :code:`True` indicates that a ns-3 IP stack shall be installed when preparing this node.
        """
        raise NotImplementedError

    def execute_command(self, command, user=None):
        """Execute a command within the node.

        Parameters
        ----------
        command : str or list of str
            The command to execute.
        user : str
            If a user (name) is specified, the command is executed
            as this user. **Warning:** Not all nodes support this feature.
        """
        if self.command_executor is None:
            raise NotImplementedError
        self.command_executor.execute(command, user=user)

    def go_offline(self):
        """Disconnect the node from all channels."""
        n_devices = self.ns3_node.GetNDevices()
        logger.debug('Go offline: %s (%d devices)', self.name, n_devices)
        for device_index in range(0, n_devices):
            device = self.ns3_node.GetDevice(device_index)
            if isinstance(device, csma.CsmaNetDevice):
                device.SetSendEnable(False)
                device.SetReceiveEnable(False)
            elif isinstance(device, wifi.WifiNetDevice):
                phy = device.GetPhy()
                phy.SetRxGain(-10000)
                phy.SetTxGain(-10000)

    def go_online(self):
        """Connect the node back to all channels."""
        n_devices = self.ns3_node.GetNDevices()
        logger.debug('Go online: %s (%d devices)', self.name, n_devices)
        for device_index in range(0, n_devices):
            device = self.ns3_node.GetDevice(device_index)
            if isinstance(device, csma.CsmaNetDevice):
                device.SetSendEnable(True)
                device.SetReceiveEnable(True)
            elif isinstance(device, wifi.WifiNetDevice):
                phy = device.GetPhy()
                phy.SetRxGain(0)
                phy.SetTxGain(0)
