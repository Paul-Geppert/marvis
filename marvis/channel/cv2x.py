"""Cellular V2X channel."""

import ipaddress
import logging

from ns import buildings, config_store, core, internet, lte, mobility, network as ns_net

from .channel import Channel
from ..interface import Interface

logger = logging.getLogger(__name__)

class CV2XChannel(Channel):
    """
    A Cellular V2X Channel is a physical (but of course wireless) connection
    between two or more wireless V2X devices based on cellular technology.

    Parameters
    ----------
    channel : int
        The WiFi channel to use.
        This will be **ignored** if frequency is set.
    frequency : int
        The frequency of the wireless channel in MHz.
    channel_width : int
        The width of the channel in MHz.
        Valid values are :code:`5`, :code:`10`, :code:`20`, :code:`22`, :code:`40`, :code:`80`, :code:`160`.
    antennas : int
        The number of antennas / spatial streams to use.
    tx_power : float
        The sending power in dBm.
    standard : :class:`.WiFiStandard`
        The WiFi standard to use.
    data_rate : :class:`.WiFiDataRate`
        The WiFi data rate to use. Please make sure to pick a valid data rate for your :code:`standard`.
    delay : str
        A time for delay in the channel in seconds (10s) or milliseconds (10ms) at 100m distance.
    """

    def __init__(self, network, channel_name, nodes, frequency=None, channel=1, channel_width=40, antennas=1, tx_power=20.0, delay="0ms"):
        super().__init__(network, channel_name, nodes)

        ueTxPower = 23.0            # Transmission power in dBm
        probResourceKeep = 0.0      # Probability to select the previous resource again [0.0-0.8]
        mcs = 20                    # Modulation and Coding Scheme
        harqEnabled = False         # Retransmission enabled 
        adjacencyPscchPssch = True  # Subchannelization scheme
        partialSensing = False      # Partial sensing enabled (actual only partialSensing is false supported)
        sizeSubchannel = 10         # Number of RBs per subchannel
        numSubchannel = 3           # Number of subchannels per subframe
        startRbSubchannel = 0       # Index of first RB corresponding to subchannelization
        pRsvp = 100                 # Resource reservation interval 
        t1 = 4                      # T1 value of selection window
        t2 = 100                    # T2 value of selection window
        slBandwidth = None          # Sidelink bandwidth
        ulEarfcn = 54990            # Uplink frequency

        print("Starting network configuration...")

        # Set the UEs power in dBm
        core.Config.SetDefault ("ns3::LteUePhy::TxPower", core.DoubleValue (ueTxPower))
        core.Config.SetDefault ("ns3::LteUePhy::RsrpUeMeasThreshold", core.DoubleValue (-10.0))

        # Enable V2X communication on PHY layer
        core.Config.SetDefault ("ns3::LteUePhy::EnableV2x", core.BooleanValue (True))

        # Set power
        core.Config.SetDefault ("ns3::LteUePowerControl::Pcmax", core.DoubleValue (ueTxPower))
        core.Config.SetDefault ("ns3::LteUePowerControl::PsschTxPower", core.DoubleValue (ueTxPower))
        core.Config.SetDefault ("ns3::LteUePowerControl::PscchTxPower", core.DoubleValue (ueTxPower))

        if adjacencyPscchPssch:
            slBandwidth = sizeSubchannel * numSubchannel
        else:
            slBandwidth = (sizeSubchannel+2) * numSubchannel

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
        # core.Config.SetDefault ("ns3::LteUeMac::EnableExcludeSubframe", core.BooleanValue(excludeSubframe)) 

        inputConfig = config_store.ConfigStore()
        inputConfig.ConfigureDefaults()

        print("Creating helpers...")

        # EPC
        self.epcHelper = lte.PointToPointEpcHelper()
        pgw = self.epcHelper.GetPgwNode()

        # LTE Helper
        self.lteHelper = lte.LteHelper()
        self.lteHelper.SetEpcHelper(self.epcHelper)
        self.lteHelper.DisableNewEnbPhy()       # Disable eNBs for out-of-coverage modelling
            
        # V2X 
        self.lteV2xHelper = lte.LteV2xHelper ()
        self.lteV2xHelper.SetLteHelper (self.lteHelper)

        # Configure eNBs' antenna parameters before deploying them.
        self.lteHelper.SetEnbAntennaModelType ("ns3::NistParabolic3dAntennaModel")

        # Set pathloss model
        # FIXME: InstallEnbDevice overrides PathlossModel Frequency with values from Earfcn
        # 
        self.lteHelper.SetAttribute ("UseSameUlDlPropagationCondition", core.BooleanValue(True))
        core.Config.SetDefault ("ns3::LteEnbNetDevice::UlEarfcn", core.StringValue (str(ulEarfcn)))
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
        print ("Installing UE's network devices...")
        self.lteHelper.SetAttribute("UseSidelink", core.BooleanValue (True))
        self.ueRespondersDevs = self.lteHelper.InstallUeDevice (self.ns3_nodes_container)
        self.ueDevs = ns_net.NetDeviceContainer()
        self.ueDevs.Add (self.ueRespondersDevs)

        internet_stack_helper = internet.InternetStackHelper()
        internet_stack_helper.Install (ueAllNodes)

        # Assign IP adress to UEs
        print ("Allocating IP addresses and setting up network route...")
        ueIpIface = self.epcHelper.AssignUeIpv4Address (self.ueDevs)
        ipv4RoutingHelper = internet.Ipv4StaticRoutingHelper()

        for u in range(ueAllNodes.GetN()):
            ueNode = ueAllNodes.Get(u)
            # Set the default gateway for the UE
            ueNode_ipv4 = ueNode.GetObject(internet.Ipv4.GetTypeId())
            ueStaticRouting = ipv4RoutingHelper.GetStaticRouting(ueNode_ipv4)
            ueStaticRouting.SetDefaultRoute (self.epcHelper.GetUeDefaultGatewayAddress(), 1)

        print ("Attaching UE's to LTE network...")
        # Attach each UE to the best available eNB
        self.lteHelper.Attach(self.ueDevs)

        print ("Creating sidelink groups...")
        txGroups = self.lteV2xHelper.AssociateForV2xBroadcast(self.ueRespondersDevs, len(nodes))

        groupL2Addresses = []
        groupL2Address = 0x00
        # TODO GPA: clientRespondersAddress ist glaube ich unwichtig
        internet.Ipv4AddressGenerator.Init(ns_net.Ipv4Address ("225.0.0.0"), ns_net.Ipv4Mask("255.0.0.0"))
        clientRespondersAddress = internet.Ipv4AddressGenerator.NextAddress (ns_net.Ipv4Mask ("255.0.0.0"))

        for group in txGroups:
            # Create Sidelink bearers
            # Use Tx for the group transmitter and Rx for all the receivers
            # Split Tx/Rx
        
            txUe = ns_net.NetDeviceContainer (group.Get(0))    # TODO GPA: wirklich neues Objekt?
            rxUes = self.lteV2xHelper.RemoveNetDevice (group, txUe.Get (0))
            tft = lte.LteSlTft (lte.LteSlTft.TRANSMIT, clientRespondersAddress, groupL2Address)
            self.lteV2xHelper.ActivateSidelinkBearer (core.Seconds(0.0), txUe, tft)
            tft = lte.LteSlTft (lte.LteSlTft.RECEIVE, clientRespondersAddress, groupL2Address)
            self.lteV2xHelper.ActivateSidelinkBearer (core.Seconds(0.0), rxUes, tft)

            # store and increment addresses
            groupL2Addresses.append (groupL2Address)
            groupL2Address += 1
            clientRespondersAddress = internet.Ipv4AddressGenerator.NextAddress (ns_net.Ipv4Mask ("255.0.0.0"))

        for i, connected_node in enumerate(nodes):
            ns3_device = self.ueDevs.Get(i)
            node = connected_node.node

            mac_address = str(ns3_device.GetAddress()).split("-")[2]

            address = None
            interface = None
            if node.wants_ip_stack():
                if node.ns3_node.GetObject(internet.Ipv4.GetTypeId()) is None:
                    logger.info('Installing IP stack on %s', node.name)
                    internet_stack_helper.Install(node.ns3_node)
                address = connected_node.address
                if address is None:
                    address = self.network.get_free_ip_address()

                network_address = ipaddress.ip_network(f'{str(address)}/{network.netmask}', strict=False)
                ns3_network_address = ns_net.Ipv4Address(network_address.network_address)
                ns3_network_prefix = ns_net.Ipv4Mask(network_address.netmask)
                base = ipaddress.ip_address(int(address) - int(network_address.network_address))
                helper = internet.Ipv4AddressHelper(ns3_network_address, ns3_network_prefix,
                                                    base=ns_net.Ipv4Address(str(base)))
                device_container = ns_net.NetDeviceContainer(ns3_device)
                helper.Assign(device_container)

                interface = Interface(node=node, ns3_device=ns3_device, mac_address=mac_address,
                                      address=ipaddress.ip_interface(f'{str(address)}/{network.netmask}'))
            else:
                interface = Interface(node=node, ns3_device=ns3_device, mac_address=mac_address, address=connected_node.address)
            # ns3_device.SetAddress(ns_net.Mac48Address(interface.mac_address))
            node.add_interface(interface, name=connected_node.ifname)
            self.interfaces.append(interface)

        print ("Creating Sidelink Configuration...")
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

        print ("Installing Sidelink Configuration...")
        self.lteHelper.InstallSidelinkV2xConfiguration (self.ueRespondersDevs, self.ueSidelinkConfiguration)

        print ("Enabling LTE traces...")
        self.lteHelper.EnableTraces()

    def prepare(self, simulation):
        pass

    def set_delay(self, delay):
        pass

    def set_data_rate(self, data_rate):
        pass
