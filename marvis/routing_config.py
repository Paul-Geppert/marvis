"""Describes a route config for traffic on the Node."""
import logging
from pyroute2 import IPRoute

from .interface import Interface

logger = logging.getLogger(__name__)

class RoutingConfig:
    """The RoutingConfig describes a routing config on the Node.
    At the moment, only ADD operation is supported.

    Parameters
    ----------
    node : :class:`.Node`
        The node to connect the interface to.
    dst : str
        The destination IP or subnet, e.g. 192.168.0.0/16.
    gateway : :class:`.Interface` | str
        The network interface or the gateway IP address to connect to.
    """

    def __init__(self, node, dst, gateway):
        self.node = node
        self.dst = dst
        self.gateway = gateway

    def setup (self):
        ipr = IPRoute()

        logger.debug('Adding routing rule on %s: %s via gateway %s', self.node.name, self.dst, self.gateway)

        if isinstance(self.gateway, Interface):
            # Set rule via network interface / network device
            gateway_id = ipr.link_lookup(ifname=self.gateway.ifname)[0]
            ipr.route("add", dst=self.dst, oif=gateway_id)
        else:
            # Set rule via IP address
            ipr.route("add", dst=self.dst, gateway=self.gateway)
