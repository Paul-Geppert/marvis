#!/usr/bin/env python3

from marvis import ArgumentParser, Scenario, Network
from marvis.node import SSHNode

def main():
    scenario = Scenario()

    net = Network('10.200.0.0', '255.255.255.0')

    ping = SSHNode('ping')
    pong = SSHNode('pong')
    net.connect(ping, pong, delay='150ms', speed='100Mbps')

    scenario.add_network(net)

    with scenario as sim:
        # To simulate forever, just do not specifiy the simulation_time parameter.
        sim.simulate()

if __name__ == "__main__":
    parser = ArgumentParser()
    parser.run(main)
