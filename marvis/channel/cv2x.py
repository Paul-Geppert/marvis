"""Cellular V2X channel."""

import ipaddress
import logging
import os

from ns import buildings, config_store, core, internet, lte, mobility, network as ns_net

from .channel import Channel
from ..interface import Interface
from ..routing_config import RoutingConfig

logger = logging.getLogger(__name__)

class CV2XChannel(Channel):
    """
    A Cellular V2X Channel is a physical (but of course wireless) connection
    between two or more wireless V2X devices based on cellular technology.

    Parameters
    ----------
    client_base : str
        The network base address for C-V2X Sidelink addresses.
    frequency : int
        The uplink frequency of the wireless channel in MHz.
    tx_power : float
        The transmission power in dBm.
    numSubchannel : int
        The number of subchannels per subframe.
    sizeSubchannel : int
        The number of RBs per subchannel. The possible values depend on the :code:`adjacencyPscchPssch`.
    adjacencyPscchPssch : bool
        The Subchannelization scheme (whether to transmit SCI and data in adjacent RBs).
    probResourceKeep : float
        Probability to select the previous resource again. Must be in [0.0, 0.8].
    mcs : int
        The index of the Modulation and Coding Scheme (MCS). Must be in [0, 28]. Check TS 36.213 14.1.1 and Table 8.6.1-1 for meaning and details.
    pRsvp : int
        Resource reservation interval in ms
    t1 : int
        T1 value of selection window.
    t2 : int
        T2 value of selection window.
    """

    def __init__(self, network, channel_name, nodes,
        sl_ip_base = "225.0.0.0",
        sl_receiving_ip = "35.0.0.1",
        frequency = 54990,
        tx_power = 23.0,
        numSubchannel = 3,
        sizeSubchannel = 10,
        adjacencyPscchPssch = True,
        probResourceKeep = 0.0,
        mcs = 20,
        pRsvp = 100,
        t1 = 4,
        t2 = 100
    ):
        super().__init__(network, channel_name, nodes)

        startRbSubchannel = 0       # Index of first RB corresponding to subchannelization

        # TODO GPA: More Infos? -> Crash before sending the first packet when harqEnabled == True. Error message:
        # assert failed. cond="txIt->subframe.frameNo == frameNo && txIt->subframe.subframeNo == subframeNo", file=../src/lte/model/lte-ue-phy.cc, line=1987 terminate called without an active exception
        harqEnabled = False         # Retransmission enabled (required by ns3 implementation)
        partialSensing = False      # Partial sensing enabled (actual only partialSensing is false supported)
        
        slBandwidth = None          # Sidelink bandwidth (will be computed later)

        logger.debug("Starting network configuration...")

        # Set the UEs power in dBm
        core.Config.SetDefault ("ns3::LteUePhy::TxPower", core.DoubleValue (tx_power))
        core.Config.SetDefault ("ns3::LteUePhy::RsrpUeMeasThreshold", core.DoubleValue (-10.0))

        # Enable V2X communication on PHY layer
        core.Config.SetDefault ("ns3::LteUePhy::EnableV2x", core.BooleanValue (True))

        # Set power
        core.Config.SetDefault ("ns3::LteUePowerControl::Pcmax", core.DoubleValue (tx_power))
        core.Config.SetDefault ("ns3::LteUePowerControl::PsschTxPower", core.DoubleValue (tx_power))
        core.Config.SetDefault ("ns3::LteUePowerControl::PscchTxPower", core.DoubleValue (tx_power))

        if adjacencyPscchPssch:
            slBandwidth = sizeSubchannel * numSubchannel
        else:
            slBandwidth = (sizeSubchannel + 2) * numSubchannel

        # Configure for UE selected
        core.Config.SetDefault ("ns3::LteUeMac::UlBandwidth", core.UintegerValue(slBandwidth))
        core.Config.SetDefault ("ns3::LteUeMac::EnableV2xHarq", core.BooleanValue(harqEnabled))
        core.Config.SetDefault ("ns3::LteUeMac::EnableAdjacencyPscchPssch", core.BooleanValue(adjacencyPscchPssch))
        core.Config.SetDefault ("ns3::LteUeMac::EnablePartialSensing", core.BooleanValue(partialSensing))
        core.Config.SetDefault ("ns3::LteUeMac::SlGrantMcs", core.UintegerValue(mcs))
        core.Config.SetDefault ("ns3::LteUeMac::SlSubchannelSize", core.UintegerValue (sizeSubchannel))
        core.Config.SetDefault ("ns3::LteUeMac::SlSubchannelNum", core.UintegerValue (numSubchannel))
        core.Config.SetDefault ("ns3::LteUeMac::SlStartRbSubchannel", core.UintegerValue (startRbSubchannel))
        core.Config.SetDefault ("ns3::LteUeMac::SlPrsvp", core.UintegerValue(pRsvp))
        core.Config.SetDefault ("ns3::LteUeMac::SlProbResourceKeep", core.DoubleValue(probResourceKeep))
        core.Config.SetDefault ("ns3::LteUeMac::SelectionWindowT1", core.UintegerValue(t1))
        core.Config.SetDefault ("ns3::LteUeMac::SelectionWindowT2", core.UintegerValue(t2))

        inputConfig = config_store.ConfigStore()
        inputConfig.ConfigureDefaults()

        logger.debug("Creating helpers...")

        # EPC
        def get_initialized_ipv4AddressHelper():
            init_address = self.network.get_free_ip_address()
            init_network_address = ipaddress.ip_network(f'{str(init_address)}/{network.netmask}', strict=False)
            init_ns3_network_address = ns_net.Ipv4Address(init_network_address.network_address)
            init_ns3_network_prefix = ns_net.Ipv4Mask(init_network_address.netmask)
            init_base = ipaddress.ip_address(int(init_address) - int(init_network_address.network_address))
            return internet.Ipv4AddressHelper(init_ns3_network_address, init_ns3_network_prefix,
                                            base=ns_net.Ipv4Address(str(init_base)))
        
        self.ipv4_helper = get_initialized_ipv4AddressHelper()
        self.epcHelper = lte.PointToPointEpcHelper(self.ipv4_helper)

        # LTE Helper
        self.lteHelper = lte.LteHelper()
        self.lteHelper.SetEpcHelper(self.epcHelper)

        logger.info("Disabling eNBs for out-of-coverage modelling")
        self.lteHelper.DisableNewEnbPhy()
            
        # V2X 
        self.lteV2xHelper = lte.LteV2xHelper ()
        self.lteV2xHelper.SetLteHelper (self.lteHelper)

        # Configure eNBs' antenna parameters before deploying them.
        self.lteHelper.SetEnbAntennaModelType ("ns3::NistParabolic3dAntennaModel")

        # Set pathloss model
        # FIXME: InstallEnbDevice overrides PathlossModel Frequency with values from Earfcn
        # TODO GPA: Check if this is still an issue
        self.lteHelper.SetAttribute ("UseSameUlDlPropagationCondition", core.BooleanValue(True))
        core.Config.SetDefault ("ns3::LteEnbNetDevice::UlEarfcn", core.StringValue (str(frequency)))
        # core.Config.SetDefault ("ns3::CniUrbanmicrocellPropagationLossModel::Frequency", core.DoubleValue(5800e6));
        self.lteHelper.SetAttribute ("PathlossModel", core.StringValue ("ns3::CniUrbanmicrocellPropagationLossModel"))

        # Create eNB Container
        self.eNodeB = ns_net.NodeContainer()
        self.eNodeB.Create(1)

        # Topology eNodeB
        pos_eNB = mobility.ListPositionAllocator()
        pos_eNB.Add(core.Vector(0, 0, 0))

        # Install mobility eNodeB
        mob_eNB = mobility.MobilityHelper()
        mob_eNB.SetMobilityModel("ns3::ConstantPositionMobilityModel")
        mob_eNB.SetPositionAllocator(pos_eNB)
        mob_eNB.Install(self.eNodeB)

        # Install Service
        enbDevs = self.lteHelper.InstallEnbDevice(self.eNodeB)

        ueAllNodes = ns_net.NodeContainer()
        ueAllNodes.Add(self.ns3_nodes_container)

        # Required to use NIST 3GPP model
        buildings.BuildingsHelper.Install (self.eNodeB)
        buildings.BuildingsHelper.Install (ueAllNodes)
        buildings.BuildingsHelper.MakeMobilityModelConsistent ()

        # Install LTE devices to all UEs 
        logger.debug ("Installing UE's network devices...")
        self.lteHelper.SetAttribute("UseSidelink", core.BooleanValue (True))
        self.ueRespondersDevs = self.lteHelper.InstallUeDevice (self.ns3_nodes_container)
        self.ueDevs = ns_net.NetDeviceContainer()
        self.ueDevs.Add (self.ueRespondersDevs)

        logger.debug ("Creating sidelink groups...")
        txGroups = self.lteV2xHelper.AssociateForV2xBroadcast(self.ueRespondersDevs, len(nodes))

        # Assign IP adress to UEs
        logger.debug ("Allocating IP addresses and setting up network route...")

        cv2x_receiving_ip = ipaddress.ip_interface(f'{sl_receiving_ip}/255.255.255.255')
    
        for i, (connected_node, group) in enumerate(zip(nodes, txGroups)):
            ns3_device = self.ueDevs.Get(i)

            # TODO GPA: What should happen if node.wants_ip_stack() == False?

            if connected_node.node.wants_ip_stack():
                if connected_node.node.ns3_node.GetObject(internet.Ipv4.GetTypeId()) is None:
                    logger.info('Installing IP stack on %s', connected_node.node.name)
                    internet_stack_helper = internet.InternetStackHelper()
                    internet_stack_helper.Install(connected_node.node.ns3_node)
            
            # Get IP address and assign it to the ns3 device
            address = connected_node.address
            if address is None:
                address = self.network.get_free_ip_address()

            network_address = ipaddress.ip_network(f'{str(address)}/{network.netmask}', strict=False)
            ns3_network_address = ns_net.Ipv4Address(network_address.network_address)
            ns3_network_prefix = ns_net.Ipv4Mask(network_address.netmask)
            base = ipaddress.ip_address(int(address) - int(network_address.network_address))
            self.ipv4_helper.SetBase(ns3_network_address, ns3_network_prefix, base=ns_net.Ipv4Address(str(base)))
            device_container = ns_net.NetDeviceContainer(ns3_device)
            self.epcHelper.AssignUeIpv4Address(device_container)

            # Create an interface for Marvis to connect the device with the Node
            interface = Interface(node=connected_node.node, ns3_device=ns3_device,
                                  address=ipaddress.ip_interface(f'{str(address)}/{network.netmask}'))
            interface.add_address(cv2x_receiving_ip)
            self.interfaces.append(interface)
            connected_node.node.add_interface(interface, name=connected_node.ifname)

            # Add a route config to route all SL traffic via the interface connected to ns3
            network_address = ipaddress.ip_network(f'{sl_ip_base}/{network.netmask}', strict=False)
            cv2x_sidelink_address = ipaddress.ip_address(int(network_address.network_address) + int(base))
            connected_node.node.add_routing(RoutingConfig(connected_node.node, dst=f"{str(sl_ip_base)}/{network_address.prefixlen}", gateway=interface))

            ns3_cv2x_sidelink_address = ns_net.Ipv4Address(str(cv2x_sidelink_address))

            # Create Traffic Flow Templates (TFT) to configure Sidelink Bearers
            groupL2Address = i
            txUe = ns_net.NetDeviceContainer (group.Get(0))
            rxUes = self.lteV2xHelper.RemoveNetDevice (group, txUe.Get (0))
            tft = lte.LteSlTft (lte.LteSlTft.TRANSMIT, ns3_cv2x_sidelink_address, groupL2Address)
            self.lteV2xHelper.ActivateSidelinkBearer (core.Seconds(0.0), txUe, tft)
            tft = lte.LteSlTft (lte.LteSlTft.RECEIVE, ns3_cv2x_sidelink_address, groupL2Address)
            self.lteV2xHelper.ActivateSidelinkBearer (core.Seconds(0.0), rxUes, tft)

        ipv4RoutingHelper = internet.Ipv4StaticRoutingHelper()

        for u in range(ueAllNodes.GetN()):
            ueNode = ueAllNodes.Get(u)
            # Set the default gateway for the UE
            ueNode_ipv4 = ueNode.GetObject(internet.Ipv4.GetTypeId())
            ueStaticRouting = ipv4RoutingHelper.GetStaticRouting(ueNode_ipv4)
            ueStaticRouting.SetDefaultRoute (self.epcHelper.GetUeDefaultGatewayAddress(), 1)

        logger.debug ("Attaching UE's to LTE network...")
        self.lteHelper.Attach(self.ueDevs)

        logger.debug ("Creating Sidelink Configuration...")
        self.ueSidelinkConfiguration = lte.LteUeRrcSl ()
        self.ueSidelinkConfiguration.SetSlEnabled(True)
        self.ueSidelinkConfiguration.SetV2xEnabled(True)

        self.preconfiguration = lte.LteRrcSap.SlV2xPreconfiguration()
        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommPreconfigGeneral.carrierFreq = 54890
        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommPreconfigGeneral.slBandwidth = slBandwidth

        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommTxPoolList.nbPools = 1
        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommRxPoolList.nbPools = 1

        pFactory = lte.SlV2xPreconfigPoolFactory()
        pFactory.SetHaveUeSelectedResourceConfig (True)
        # Check the C++ source and ETSI TS 36.213 14.1.1.1 and 14.1.5 for more details
        pFactory.SetSlSubframe (0xFFFFF)
        pFactory.SetAdjacencyPscchPssch (adjacencyPscchPssch)
        pFactory.SetSizeSubchannel (sizeSubchannel)
        pFactory.SetNumSubchannel (numSubchannel)
        pFactory.SetStartRbSubchannel (startRbSubchannel)
        pFactory.SetStartRbPscchPool (0)
        pFactory.SetDataTxP0 (-4)
        pFactory.SetDataTxAlpha (0.9)

        self.v2xCommTxPool = pFactory.CreatePool ()
        self.v2xCommRxPool = pFactory.CreatePool ()

        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommTxPoolList.SetPoolAt(self.v2xCommTxPool, 0)
        self.preconfiguration.v2xPreconfigFreqList.freq[0].v2xCommRxPoolList.SetPoolAt(self.v2xCommRxPool, 0)
        self.ueSidelinkConfiguration.SetSlV2xPreconfiguration (self.preconfiguration) 

        logger.debug ("Installing Sidelink Configuration...")
        self.lteHelper.InstallSidelinkV2xConfiguration (self.ueRespondersDevs, self.ueSidelinkConfiguration)

        logger.debug ("Enabling LTE traces...")
        self.lteHelper.EnableTraces()

    def prepare(self, simulation):
        for interface in self.interfaces:
            pcap_log_path = os.path.join(simulation.log_directory, interface.pcap_file_name)
            self.lteHelper.EnablePcap(pcap_log_path, interface.ns3_device, True, True)
            pcap_log_path = os.path.join(simulation.log_directory, "simple-" + interface.pcap_file_name)
            self.lteHelper.EnablePcap(pcap_log_path, interface.ns3_device, False, True)

    def set_delay(self, delay):
        pass

    def set_data_rate(self, data_rate):
        pass
