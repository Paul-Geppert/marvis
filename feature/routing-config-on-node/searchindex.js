Search.setIndex({docnames:["api","api/marvis.argparse","api/marvis.channel","api/marvis.channel.channel","api/marvis.channel.csma","api/marvis.channel.cv2x","api/marvis.channel.wifi","api/marvis.command_executor","api/marvis.command_executor.base","api/marvis.command_executor.console","api/marvis.command_executor.docker","api/marvis.command_executor.local","api/marvis.command_executor.lxd","api/marvis.command_executor.ssh","api/marvis.command_executor.util","api/marvis.context","api/marvis.events","api/marvis.events.Event","api/marvis.interface","api/marvis.mobility_input","api/marvis.mobility_input.mobility_input","api/marvis.mobility_input.sumo","api/marvis.network","api/marvis.node","api/marvis.node.base","api/marvis.node.docker","api/marvis.node.external","api/marvis.node.interface","api/marvis.node.lxd","api/marvis.node.ssh","api/marvis.node.switch","api/marvis.routing_config","api/marvis.scenario","api/marvis.simulation","api/marvis.util","api/marvis.visualization","api/marvis.visualization.netanimvisualization","api/marvis.visualization.visualization","api/marvis.workflow","getting-started","index","installation","sumo"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/marvis.argparse.rst","api/marvis.channel.rst","api/marvis.channel.channel.rst","api/marvis.channel.csma.rst","api/marvis.channel.cv2x.rst","api/marvis.channel.wifi.rst","api/marvis.command_executor.rst","api/marvis.command_executor.base.rst","api/marvis.command_executor.console.rst","api/marvis.command_executor.docker.rst","api/marvis.command_executor.local.rst","api/marvis.command_executor.lxd.rst","api/marvis.command_executor.ssh.rst","api/marvis.command_executor.util.rst","api/marvis.context.rst","api/marvis.events.rst","api/marvis.events.Event.rst","api/marvis.interface.rst","api/marvis.mobility_input.rst","api/marvis.mobility_input.mobility_input.rst","api/marvis.mobility_input.sumo.rst","api/marvis.network.rst","api/marvis.node.rst","api/marvis.node.base.rst","api/marvis.node.docker.rst","api/marvis.node.external.rst","api/marvis.node.interface.rst","api/marvis.node.lxd.rst","api/marvis.node.ssh.rst","api/marvis.node.switch.rst","api/marvis.routing_config.rst","api/marvis.scenario.rst","api/marvis.simulation.rst","api/marvis.util.rst","api/marvis.visualization.rst","api/marvis.visualization.netanimvisualization.rst","api/marvis.visualization.visualization.rst","api/marvis.workflow.rst","getting-started.rst","index.rst","installation.rst","sumo.rst"],objects:{"":{marvis:[0,0,0,"-"]},"marvis.argparse":{ArgumentParser:[1,1,1,""]},"marvis.argparse.ArgumentParser":{add_argument:[1,2,1,""],add_argument_group:[1,2,1,""],add_mutually_exclusive_group:[1,2,1,""],add_subparsers:[1,2,1,""],convert_arg_line_to_args:[1,2,1,""],error:[1,2,1,""],exit:[1,2,1,""],format_help:[1,2,1,""],format_usage:[1,2,1,""],format_version:[1,2,1,""],get_default:[1,2,1,""],parse_args:[1,2,1,""],parse_known_args:[1,2,1,""],print_help:[1,2,1,""],print_usage:[1,2,1,""],print_version:[1,2,1,""],register:[1,2,1,""],run:[1,2,1,""],set_defaults:[1,2,1,""]},"marvis.channel":{channel:[3,0,0,"-"],csma:[4,0,0,"-"],cv2x:[5,0,0,"-"],wifi:[6,0,0,"-"]},"marvis.channel.channel":{Channel:[3,1,1,""]},"marvis.channel.channel.Channel":{channel_name:[3,3,1,""],interfaces:[3,3,1,""],network:[3,3,1,""],nodes:[3,4,1,""],ns3_nodes_container:[3,3,1,""],prepare:[3,2,1,""]},"marvis.channel.csma":{CSMAChannel:[4,1,1,""]},"marvis.channel.csma.CSMAChannel":{channel_name:[4,3,1,""],csma_channel:[4,3,1,""],csma_helper:[4,3,1,""],data_rate:[4,3,1,""],delay:[4,3,1,""],interfaces:[4,3,1,""],network:[4,3,1,""],nodes:[4,4,1,""],ns3_nodes_container:[4,3,1,""],prepare:[4,2,1,""],set_data_rate:[4,2,1,""],set_delay:[4,2,1,""]},"marvis.channel.cv2x":{CV2XChannel:[5,1,1,""]},"marvis.channel.cv2x.CV2XChannel":{channel_name:[5,3,1,""],interfaces:[5,3,1,""],network:[5,3,1,""],nodes:[5,4,1,""],ns3_nodes_container:[5,3,1,""],prepare:[5,2,1,""],set_data_rate:[5,2,1,""],set_delay:[5,2,1,""]},"marvis.channel.wifi":{WiFiChannel:[6,1,1,""]},"marvis.channel.wifi.WiFiChannel":{WiFiDataRate:[6,1,1,""],WiFiStandard:[6,1,1,""],antennas:[6,3,1,""],channel:[6,3,1,""],channel_name:[6,3,1,""],channel_width:[6,3,1,""],data_rate:[6,3,1,""],delay:[6,3,1,""],devices_container:[6,3,1,""],frequency:[6,3,1,""],interfaces:[6,3,1,""],network:[6,3,1,""],nodes:[6,4,1,""],ns3_nodes_container:[6,3,1,""],prepare:[6,2,1,""],set_data_rate:[6,2,1,""],set_delay:[6,2,1,""],standard:[6,3,1,""],tx_power:[6,3,1,""],wifi:[6,3,1,""],wifi_mac_helper:[6,3,1,""]},"marvis.channel.wifi.WiFiChannel.WiFiDataRate":{DSSS_RATE_11Mbps:[6,3,1,""],DSSS_RATE_1Mbps:[6,3,1,""],DSSS_RATE_2Mbps:[6,3,1,""],DSSS_RATE_5_5Mbps:[6,3,1,""],ERP_OFDM_RATE_12Mbps:[6,3,1,""],ERP_OFDM_RATE_18Mbps:[6,3,1,""],ERP_OFDM_RATE_24Mbps:[6,3,1,""],ERP_OFDM_RATE_36Mbps:[6,3,1,""],ERP_OFDM_RATE_48Mbps:[6,3,1,""],ERP_OFDM_RATE_54Mbps:[6,3,1,""],ERP_OFDM_RATE_6Mbps:[6,3,1,""],ERP_OFDM_RATE_9Mbps:[6,3,1,""],OFDM_RATE_12Mbps:[6,3,1,""],OFDM_RATE_18Mbps:[6,3,1,""],OFDM_RATE_24Mbps:[6,3,1,""],OFDM_RATE_36Mbps:[6,3,1,""],OFDM_RATE_48Mbps:[6,3,1,""],OFDM_RATE_54Mbps:[6,3,1,""],OFDM_RATE_6Mbps:[6,3,1,""],OFDM_RATE_9Mbps:[6,3,1,""],OFDM_RATE_BW_12Mbps:[6,3,1,""],OFDM_RATE_BW_18Mbps:[6,3,1,""],OFDM_RATE_BW_24Mbps:[6,3,1,""],OFDM_RATE_BW_27Mbps:[6,3,1,""],OFDM_RATE_BW_3Mbps:[6,3,1,""],OFDM_RATE_BW_4_5Mbps:[6,3,1,""],OFDM_RATE_BW_6Mbps:[6,3,1,""],OFDM_RATE_BW_9Mbps:[6,3,1,""]},"marvis.channel.wifi.WiFiChannel.WiFiStandard":{WIFI_802_11a:[6,3,1,""],WIFI_802_11ac:[6,3,1,""],WIFI_802_11b:[6,3,1,""],WIFI_802_11g:[6,3,1,""],WIFI_802_11n:[6,3,1,""],WIFI_802_11n_5G:[6,3,1,""],WIFI_802_11p:[6,3,1,""]},"marvis.command_executor":{base:[8,0,0,"-"],console:[9,0,0,"-"],docker:[10,0,0,"-"],local:[11,0,0,"-"],lxd:[12,0,0,"-"],ssh:[13,0,0,"-"],util:[14,0,0,"-"]},"marvis.command_executor.base":{CommandExecutor:[8,1,1,""],ExitCode:[8,5,1,""]},"marvis.command_executor.base.CommandExecutor":{counter:[8,3,1,""],execute:[8,2,1,""],get_logger:[8,2,1,""],name:[8,3,1,""]},"marvis.command_executor.base.ExitCode":{args:[8,3,1,""],with_traceback:[8,2,1,""]},"marvis.command_executor.console":{ConsoleCommandExecutor:[9,1,1,""]},"marvis.command_executor.console.ConsoleCommandExecutor":{counter:[9,3,1,""],execute:[9,2,1,""],get_logger:[9,2,1,""],name:[9,3,1,""]},"marvis.command_executor.docker":{DockerCommandExecutor:[10,1,1,""]},"marvis.command_executor.docker.DockerCommandExecutor":{container:[10,3,1,""],counter:[10,3,1,""],execute:[10,2,1,""],get_logger:[10,2,1,""],name:[10,3,1,""]},"marvis.command_executor.local":{LocalCommandExecutor:[11,1,1,""],log_file:[11,6,1,""]},"marvis.command_executor.local.LocalCommandExecutor":{counter:[11,3,1,""],execute:[11,2,1,""],get_logger:[11,2,1,""],name:[11,3,1,""]},"marvis.command_executor.lxd":{LXDCommandExecutor:[12,1,1,""],create_handler:[12,6,1,""]},"marvis.command_executor.lxd.LXDCommandExecutor":{container:[12,3,1,""],counter:[12,3,1,""],execute:[12,2,1,""],get_logger:[12,2,1,""],name:[12,3,1,""]},"marvis.command_executor.ssh":{SSHCommandExecutor:[13,1,1,""],log_file:[13,6,1,""]},"marvis.command_executor.ssh.SSHCommandExecutor":{client:[13,3,1,""],counter:[13,3,1,""],execute:[13,2,1,""],get_logger:[13,2,1,""],name:[13,3,1,""],sudo:[13,3,1,""]},"marvis.command_executor.util":{LogFile:[14,1,1,""],apply_user_and_shell:[14,6,1,""],split_shell_arguments:[14,6,1,""],stringify_shell_arguments:[14,6,1,""]},"marvis.command_executor.util.LogFile":{log:[14,2,1,""]},"marvis.context":{Context:[15,1,1,""],DeferredItem:[15,1,1,""],NoContext:[15,1,1,""],SimpleContext:[15,1,1,""],ThreadLocalStack:[15,1,1,""],defer:[15,6,1,""]},"marvis.context.Context":{add_error:[15,2,1,""],cancel:[15,2,1,""],cleanup:[15,2,1,""],current:[15,2,1,""],defer:[15,2,1,""],fails:[15,3,1,""]},"marvis.context.DeferredItem":{args:[15,3,1,""],cancel:[15,2,1,""],cleanup:[15,2,1,""],ctx:[15,3,1,""],func:[15,3,1,""],kwargs:[15,3,1,""],name:[15,3,1,""]},"marvis.context.NoContext":{add_error:[15,2,1,""],cancel:[15,2,1,""],cleanup:[15,2,1,""],current:[15,2,1,""],defer:[15,2,1,""],fails:[15,3,1,""]},"marvis.context.SimpleContext":{add_error:[15,2,1,""],cancel:[15,2,1,""],cleanup:[15,2,1,""],current:[15,2,1,""],defer:[15,2,1,""],fails:[15,3,1,""]},"marvis.context.ThreadLocalStack":{pop:[15,2,1,""],push:[15,2,1,""],stack:[15,4,1,""],top:[15,2,1,""]},"marvis.events":{Event:[17,0,0,"-"],e:[16,6,1,""],event:[16,6,1,""],execute_events_on_simulation_end:[16,6,1,""]},"marvis.events.Event":{Event:[17,1,1,""],EventPart:[17,1,1,""],e:[17,6,1,""],event:[17,6,1,""],event_worker:[17,6,1,""],execute_events_on_simulation_end:[17,6,1,""]},"marvis.events.Event.Event":{after:[17,2,1,""],check_if:[17,2,1,""],execute:[17,2,1,""],s:[17,2,1,""],start:[17,2,1,""],start_on_simulation_end:[17,2,1,""],start_on_simulation_start:[17,2,1,""],when:[17,2,1,""]},"marvis.interface":{Interface:[18,1,1,""]},"marvis.interface.Interface":{address:[18,3,1,""],bridge_name:[18,4,1,""],connect_tap_to_bridge:[18,2,1,""],disconnect_tap_from_bridge:[18,2,1,""],ifname:[18,3,1,""],mac_address:[18,3,1,""],node:[18,3,1,""],ns3_device:[18,3,1,""],number:[18,3,1,""],pcap_file_name:[18,4,1,""],remove_bridge:[18,2,1,""],remove_veth_pair:[18,2,1,""],setup_bridge:[18,2,1,""],setup_veth_container_end:[18,2,1,""],setup_veth_pair:[18,2,1,""],tap_name:[18,4,1,""],veth_name:[18,4,1,""]},"marvis.mobility_input":{mobility_input:[20,0,0,"-"],sumo:[21,0,0,"-"]},"marvis.mobility_input.mobility_input":{MobilityInput:[20,1,1,""]},"marvis.mobility_input.mobility_input.MobilityInput":{destroy:[20,2,1,""],name:[20,3,1,""],node_mapping:[20,3,1,""],prepare:[20,2,1,""],start:[20,2,1,""]},"marvis.mobility_input.sumo":{SUMOMobilityInput:[21,1,1,""]},"marvis.mobility_input.sumo.SUMOMobilityInput":{add_node_to_mapping:[21,2,1,""],config_path:[21,3,1,""],destroy:[21,2,1,""],name:[21,3,1,""],node_mapping:[21,3,1,""],prepare:[21,2,1,""],start:[21,2,1,""],step_counter:[21,3,1,""],step_length:[21,3,1,""],steps:[21,3,1,""],sumo_cmd:[21,3,1,""],sumo_host:[21,3,1,""],sumo_port:[21,3,1,""]},"marvis.network":{ChannelPrototype:[22,1,1,""],ConnectedNode:[22,1,1,""],Network:[22,1,1,""]},"marvis.network.ChannelPrototype":{connect:[22,2,1,""],set_delay:[22,2,1,""],set_speed:[22,2,1,""]},"marvis.network.Network":{allocated_ip_addresses:[22,3,1,""],block_ip_address:[22,2,1,""],channels:[22,3,1,""],channels_prototypes:[22,3,1,""],color:[22,3,1,""],create_channel:[22,2,1,""],default_channel_type:[22,3,1,""],get_free_ip_address:[22,2,1,""],netmask:[22,3,1,""],network:[22,3,1,""],next_free_ip:[22,3,1,""],nodes:[22,3,1,""],prepare:[22,2,1,""],random_channel_names:[22,3,1,""],set_delay:[22,2,1,""],set_speed:[22,2,1,""]},"marvis.node":{"interface":[27,0,0,"-"],"switch":[30,0,0,"-"],base:[24,0,0,"-"],docker:[25,0,0,"-"],external:[26,0,0,"-"],lxd:[28,0,0,"-"],ssh:[29,0,0,"-"]},"marvis.node.base":{Node:[24,1,1,""]},"marvis.node.base.Node":{add_interface:[24,2,1,""],add_routing:[24,2,1,""],channels:[24,3,1,""],color:[24,3,1,""],command_executor:[24,3,1,""],execute_command:[24,2,1,""],go_offline:[24,2,1,""],go_online:[24,2,1,""],interfaces:[24,3,1,""],name:[24,3,1,""],ns3_node:[24,3,1,""],prepare:[24,2,1,""],routing_configs:[24,3,1,""],set_position:[24,2,1,""],wants_ip_stack:[24,2,1,""]},"marvis.node.docker":{DockerNode:[25,1,1,""],expand_volume_shorthand:[25,6,1,""],log_to_file:[25,6,1,""]},"marvis.node.docker.DockerNode":{add_interface:[25,2,1,""],add_routing:[25,2,1,""],build_docker_image:[25,2,1,""],channels:[25,3,1,""],color:[25,3,1,""],command:[25,3,1,""],command_executor:[25,3,1,""],container:[25,3,1,""],container_pid:[25,3,1,""],cpus:[25,3,1,""],devices:[25,3,1,""],docker_build_dir:[25,3,1,""],docker_image:[25,3,1,""],docker_image_tag:[25,4,1,""],dockerfile:[25,3,1,""],environment_variables:[25,3,1,""],execute_command:[25,2,1,""],exposed_ports:[25,3,1,""],go_offline:[25,2,1,""],go_online:[25,2,1,""],interfaces:[25,3,1,""],memory:[25,3,1,""],name:[25,3,1,""],ns3_node:[25,3,1,""],prepare:[25,2,1,""],pull:[25,3,1,""],routing_configs:[25,3,1,""],set_position:[25,2,1,""],setup_additional_routing_in_container:[25,2,1,""],setup_host_interfaces:[25,2,1,""],start_docker_container:[25,2,1,""],stop_docker_container:[25,2,1,""],volumes:[25,3,1,""],wants_ip_stack:[25,2,1,""]},"marvis.node.external":{ExternalNode:[26,1,1,""]},"marvis.node.external.ExternalNode":{add_interface:[26,2,1,""],add_routing:[26,2,1,""],bridge:[26,3,1,""],channels:[26,3,1,""],color:[26,3,1,""],command_executor:[26,3,1,""],execute_command:[26,2,1,""],go_offline:[26,2,1,""],go_online:[26,2,1,""],ifname:[26,3,1,""],interfaces:[26,3,1,""],name:[26,3,1,""],ns3_node:[26,3,1,""],prepare:[26,2,1,""],remove_additional_routing:[26,2,1,""],remove_remote_address:[26,2,1,""],routing_configs:[26,3,1,""],set_position:[26,2,1,""],setup_additional_routing:[26,2,1,""],setup_remote_address:[26,2,1,""],wants_ip_stack:[26,2,1,""]},"marvis.node.interface":{InterfaceNode:[27,1,1,""]},"marvis.node.interface.InterfaceNode":{add_interface:[27,2,1,""],add_routing:[27,2,1,""],channels:[27,3,1,""],color:[27,3,1,""],command_executor:[27,3,1,""],execute_command:[27,2,1,""],go_offline:[27,2,1,""],go_online:[27,2,1,""],ifname:[27,3,1,""],interfaces:[27,3,1,""],name:[27,3,1,""],ns3_node:[27,3,1,""],prepare:[27,2,1,""],routing_configs:[27,3,1,""],set_position:[27,2,1,""],wants_ip_stack:[27,2,1,""]},"marvis.node.lxd":{LXDNode:[28,1,1,""],log_to_file:[28,6,1,""]},"marvis.node.lxd.LXDNode":{add_interface:[28,2,1,""],add_routing:[28,2,1,""],channels:[28,3,1,""],color:[28,3,1,""],command_executor:[28,3,1,""],container:[28,3,1,""],create_container:[28,2,1,""],custom_configuration:[28,3,1,""],delete_container:[28,2,1,""],execute_command:[28,2,1,""],go_offline:[28,2,1,""],go_online:[28,2,1,""],image:[28,3,1,""],image_server:[28,3,1,""],interfaces:[28,3,1,""],name:[28,3,1,""],ns3_node:[28,3,1,""],prepare:[28,2,1,""],routing_configs:[28,3,1,""],set_position:[28,2,1,""],setup_additional_routing_in_container:[28,2,1,""],setup_host_interfaces:[28,2,1,""],start_container:[28,2,1,""],wants_ip_stack:[28,2,1,""]},"marvis.node.ssh":{SSHNode:[29,1,1,""],default_ip:[29,6,1,""]},"marvis.node.ssh.SSHNode":{add_interface:[29,2,1,""],add_routing:[29,2,1,""],bridge:[29,3,1,""],channels:[29,3,1,""],color:[29,3,1,""],command_executor:[29,3,1,""],execute_command:[29,2,1,""],go_offline:[29,2,1,""],go_online:[29,2,1,""],ifname:[29,3,1,""],interfaces:[29,3,1,""],name:[29,3,1,""],ns3_node:[29,3,1,""],prepare:[29,2,1,""],remove_additional_routing:[29,2,1,""],remove_remote_address:[29,2,1,""],routing_configs:[29,3,1,""],set_position:[29,2,1,""],setup_additional_routing:[29,2,1,""],setup_remote_address:[29,2,1,""],wants_ip_stack:[29,2,1,""]},"marvis.node.switch":{SwitchNode:[30,1,1,""]},"marvis.node.switch.SwitchNode":{add_interface:[30,2,1,""],add_routing:[30,2,1,""],bridge_device:[30,3,1,""],channels:[30,3,1,""],color:[30,3,1,""],command_executor:[30,3,1,""],execute_command:[30,2,1,""],go_offline:[30,2,1,""],go_online:[30,2,1,""],interfaces:[30,3,1,""],name:[30,3,1,""],ns3_node:[30,3,1,""],prepare:[30,2,1,""],routing_configs:[30,3,1,""],set_position:[30,2,1,""],wants_ip_stack:[30,2,1,""]},"marvis.routing_config":{RoutingConfig:[31,1,1,""]},"marvis.routing_config.RoutingConfig":{setup:[31,2,1,""]},"marvis.scenario":{Scenario:[32,1,1,""]},"marvis.scenario.Scenario":{add_mobility_input:[32,2,1,""],add_network:[32,2,1,""],add_standalone_node:[32,2,1,""],channels:[32,2,1,""],context:[32,3,1,""],networks:[32,3,1,""],nodes:[32,2,1,""],set_visualization:[32,2,1,""],simulation:[32,3,1,""],standalone_nodes:[32,3,1,""],visualization:[32,3,1,""],workflow:[32,2,1,""],workflows:[32,3,1,""]},"marvis.simulation":{Simulation:[33,1,1,""]},"marvis.simulation.Simulation":{docker_client:[33,3,1,""],hosts:[33,3,1,""],log_directory:[33,3,1,""],prepare:[33,2,1,""],scenario:[33,3,1,""],simulate:[33,2,1,""],started:[33,3,1,""],workflows:[33,3,1,""]},"marvis.util":{network_color_for:[34,6,1,""],once:[34,6,1,""],unique:[34,6,1,""],unique_generator:[34,6,1,""]},"marvis.visualization":{netanimvisualization:[36,0,0,"-"],visualization:[37,0,0,"-"]},"marvis.visualization.netanimvisualization":{NetAnimVisualization:[36,1,1,""]},"marvis.visualization.netanimvisualization.NetAnimVisualization":{animation_interface:[36,3,1,""],get_visualization:[36,2,1,""],node_size:[36,3,1,""],output_directory:[36,3,1,""],prepare_node:[36,2,1,""],set_node_position:[36,2,1,""],set_node_size:[36,2,1,""],set_output_directory:[36,2,1,""],set_visualization:[36,2,1,""]},"marvis.visualization.visualization":{NoVisualization:[37,1,1,""],Visualization:[37,1,1,""]},"marvis.visualization.visualization.NoVisualization":{get_visualization:[37,2,1,""],node_size:[37,3,1,""],output_directory:[37,3,1,""],prepare_node:[37,2,1,""],set_node_position:[37,2,1,""],set_node_size:[37,2,1,""],set_output_directory:[37,2,1,""],set_visualization:[37,2,1,""]},"marvis.visualization.visualization.Visualization":{get_visualization:[37,2,1,""],node_size:[37,3,1,""],output_directory:[37,3,1,""],prepare_node:[37,2,1,""],set_node_position:[37,2,1,""],set_node_size:[37,2,1,""],set_output_directory:[37,2,1,""],set_visualization:[37,2,1,""]},"marvis.workflow":{Workflow:[38,1,1,""]},"marvis.workflow.Workflow":{current_waiting_events:[38,3,1,""],sleep:[38,2,1,""],start:[38,2,1,""],stop:[38,2,1,""],stop_event:[38,3,1,""],task:[38,3,1,""],wait_until:[38,2,1,""],wait_until_true:[38,2,1,""]},marvis:{"interface":[18,0,0,"-"],argparse:[1,0,0,"-"],channel:[2,0,0,"-"],command_executor:[7,0,0,"-"],context:[15,0,0,"-"],events:[16,0,0,"-"],mobility_input:[19,0,0,"-"],network:[22,0,0,"-"],node:[23,0,0,"-"],routing_config:[31,0,0,"-"],scenario:[32,0,0,"-"],simulation:[33,0,0,"-"],util:[34,0,0,"-"],visualization:[35,0,0,"-"],workflow:[38,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:property","5":"py:exception","6":"py:function"},terms:{"0":[1,5,6,22,24,25,26,27,28,29,30,31,34,36,37],"04":41,"0m":[4,5,6],"1":[5,6,17,21,25,29,40],"10":[4,5,6,22,41],"100":22,"1000":21,"100m":[5,6],"100mbp":4,"10m":[4,5,6,22],"11":6,"128m":25,"16":31,"160":[5,6],"168":31,"18":41,"192":31,"1999":6,"2":[6,40],"20":[5,6],"2009":6,"2013":6,"22":[5,6],"24":22,"255":34,"3":[0,3,4,5,6,18,24,25,26,27,28,29,30,33,40,41],"33":41,"40":[5,6],"42":22,"4ghz":6,"5":[5,6,36,37,38],"50":22,"54":6,"5ghz":6,"60":[32,33],"64kbp":4,"7":6,"8":6,"80":[5,6],"8813":[21,42],"abstract":[1,3,8,20,24,37],"case":[22,41],"catch":[11,33],"class":[1,3,4,5,6,8,9,10,11,12,13,14,15,17,18,20,21,22,24,25,26,27,28,29,30,31,32,33,36,37,38,42],"default":[1,21,22,25,27,29,36,37],"do":[3,15,18,24,25,26,27,28,29,30,33,38,41],"enum":6,"export":42,"float":[5,6,21,24,25,26,27,28,29,30,33,36,37,38],"function":[1,11,12,13,14,15,17,18,20,22,24,25,26,27,28,29,30,34,38],"import":[22,36,37,42],"int":[5,6,8,21,22,34],"new":[22,32,36,37,41,42],"null":[9,15,37],"return":[1,3,4,5,6,8,15,18,22,24,25,26,27,28,29,30,32,34,36,37],"static":[15,36,37,38],"super":37,"true":[1,24,25,26,27,28,29,30,38],"var":41,A:[1,3,4,5,6,7,8,9,10,11,12,13,15,18,20,22,24,25,26,27,28,29,30,32,33,38],At:31,Be:11,But:41,By:40,For:[3,4,21,42],If:[1,18,21,22,24,25,26,27,28,29,30,33,42],In:[15,21,22,38,41],It:[1,9,15,20,21,22,24,25,27,30,32,33],Not:[24,25,26,27,28,29,30],On:[21,40],That:22,The:[1,3,4,5,6,8,9,10,11,12,13,14,15,18,20,21,22,24,25,26,27,28,29,30,31,32,33,34,36,37,38,41,42],There:[37,41,42],These:[32,38],To:[26,36,37],With:40,_:[25,27],__traceback__:8,abc:[36,37],abort:33,absolut:[25,42],access:[6,41,42],accordingli:42,achievd:42,activ:[24,25,26,27,28,29,30,38],ad:[18,22,41],add:[15,22,24,25,26,27,28,29,30,31,32,41,42],add_argu:1,add_argument_group:1,add_error:15,add_help:1,add_interfac:[18,24,25,26,27,28,29,30],add_mobility_input:[32,42],add_mutually_exclusive_group:1,add_network:32,add_node_to_map:[21,42],add_rout:[24,25,26,27,28,29,30],add_standalone_nod:32,add_subpars:1,addit:[24,25,26,27,28,29,30],address:[18,22,25,26,28,29,31],after:[17,41,42],afterward:1,afunct:15,againt:38,alia:28,all:[3,4,5,6,22,24,25,26,27,28,29,30,32,33,37,38,41,42],alloc:22,allocated_ip_address:22,allow:[25,38,41],alphanumer:[25,27],alread:26,alreadi:[21,22],also:[18,22,26,29,33,42],alwai:25,amount:25,an:[1,8,11,15,18,20,21,22,24,25,26,27,28,29,30,33,35,38],ani:[15,18,20,22],anim:36,animation_interfac:36,anoth:[6,15],anotherfunct:15,antenna:[5,6],api:40,append:[8,9,10,11,12,13,24,25,26,27,28,29,30],apply_user_and_shel:14,apt:42,ar:[1,2,4,5,6,23,25,26,28,32,38,42],area:6,arg:[1,8,15,30],arg_lin:1,argument:[1,15,21,22],argument_default:1,argumentpars:1,arn:38,assign:[15,18,22,25,26,29],assum:42,automat:42,avail:[6,34],avoid:22,awai:[1,8],b:34,back:[24,25,26,27,28,29,30],band:6,base:[1,3,4,5,6,9,10,11,12,13,14,15,17,18,20,21,22,25,26,27,28,29,30,31,32,33,34,36,37,38,41,42],bash:[8,9,10,11,12,13,42],beaver:41,becaus:42,been:41,befor:[22,26,28],behaviour:23,behind:27,being:[28,33,38],belong:[3,4,5,6,15,32],below:41,best:6,between:[5,6,22,30],bind:41,bionic:41,bitrat:6,block:[22,38],block_ip_address:22,blue:34,blueprint:32,boockmey:38,bool:[1,13,24,25,26,27,28,29,30],bridg:[18,25,26,27,28,29],bridge_devic:30,bridge_nam:18,build:[25,41],build_docker_imag:25,buster:41,c:[33,42],cabl:[3,4],calcul:[29,34],call:[1,15,20,22,24,25,26,27,28,29,30,37,38],callabl:[1,15,32,38],can:[6,7,8,15,18,20,21,22,25,32,33,40,41,42],cancel:15,cannel:[24,25,26,27,28,29,30],cannot:42,cap:[41,42],capabl:3,car0:42,car:42,card:[3,4,5,6,18,24,25,26,27,28,29,30],care:33,cellular:5,cfg:[21,42],cgroup_permiss:25,channel:[18,22,24,25,26,27,28,29,30,32],channel_kwarg:22,channel_nam:[3,4,5,6,22],channel_typ:22,channel_width:[5,6],channelprototyp:22,channels_prototyp:22,charact:[25,27],check:[22,28,33],check_if:17,choos:6,cleanup:15,cli:41,client:[13,33],clone:41,co:[20,21,42],code:[8,36],collid:6,collis:[3,4],color:[22,24,25,26,27,28,29,30,34],com:38,combin:7,come:38,command:[7,8,9,10,11,12,13,14,17,21,24,25,26,27,28,29,30,38,42],command_executor:[24,25,26,27,28,29,30],command_param:[26,29],commandexecutor:[7,8,9,10,11,12,13],common:41,commun:32,compar:[22,38],compon:23,comput:[24,25],condit:[17,38],config:[31,42],config_path:[21,42],configur:[21,22,24,25,26,27,28,29,30,32,42],configureloc:18,conflict_handl:1,connect:[2,3,4,5,6,13,18,21,22,24,25,26,27,28,29,30,31,32,40],connect_tap_to_bridg:18,connectednod:22,consid:[6,26],consist:[25,27],consolecommandexecutor:9,constraint:18,contain:[3,4,5,6,8,10,12,15,18,21,22,25,28,36,38,40,41,42],container_pid:25,content:40,context:[25,32],continu:33,control:[18,20],convert_arg_line_to_arg:1,correct:6,correctli:18,could:[6,22],counter:[8,9,10,11,12,13],cours:[5,6,41],cpu:25,creat:[6,26,27,28,29,32,36,38,41],create_channel:22,create_contain:28,create_handl:12,creation:[22,42],creator:[25,28],csma:[3,22],csma_channel:4,csma_help:4,csmachannel:[4,22],ctrl:33,ctx:15,current:[15,32,36,37],current_waiting_ev:38,custom:28,custom_configur:28,cv2xchannel:5,d:42,dasylab:38,data:[4,5,6],data_r:[4,5,6],dbm:[5,6],debian:[41,42],debug:[1,9,20],decor:38,def:38,default_channel_typ:22,default_ip:29,defer:15,deferreditem:15,defin:[1,22,35],delai:[4,5,6,22],delet:[18,28],delete_contain:28,depend:[6,22,41],describ:[19,31,33],descript:[1,15],dest:1,destin:31,destroi:[18,20,21],detail:36,determin:33,dev:41,devcontain:21,develop:41,devic:[5,6,18,25,26,27,29,30,32],devices_contain:6,diagramm:[1,3,4,5,6,8,9,10,11,12,13,14,15,17,18,20,21,22,24,25,26,27,28,29,30,31,32,33,36,37,38],dict:[15,18,22,25,28],dictionari:[25,28],dictonari:25,directli:42,directori:[25,28,33,36,37,41],disconnect:[18,24,25,26,27,28,29,30],disconnect_tap_from_bridg:18,diselab:41,displai:[37,42],distanc:[5,6,22],do_another_th:38,do_someth:38,doc:42,docker:[21,28,33,40],docker_build_dir:25,docker_cli:33,docker_imag:25,docker_image_tag:25,dockercommandexecutor:10,dockerfil:[25,41],dockernod:[18,25],doe:[15,20,21,37],domain:[3,4],don:22,done:38,down:15,dry:9,dsss_rate_11mbp:6,dsss_rate_1mbp:6,dsss_rate_2mbp:6,dsss_rate_5_5mbp:6,dsssrate11mbp:6,dsssrate1mbp:6,dsssrate2mbp:6,dsssrate5_5mbp:6,dst:31,duplic:22,durat:38,dure:[7,25,26,29,38],e:[4,16,17,18,31,32],each:[21,25,36,37],easi:27,easiest:41,effect:[21,22],either:[1,18,42],en:6,enabl:41,enforc:25,ensur:42,enter:42,entri:25,env:42,environ:[6,21,25,42],environment_vari:25,epilog:1,equal:38,equival:[3,4,18],erp_ofdm_rate_12mbp:6,erp_ofdm_rate_18mbp:6,erp_ofdm_rate_24mbp:6,erp_ofdm_rate_36mbp:6,erp_ofdm_rate_48mbp:6,erp_ofdm_rate_54mbp:6,erp_ofdm_rate_6mbp:6,erp_ofdm_rate_9mbp:6,erpofdmrate12mbp:6,erpofdmrate18mbp:6,erpofdmrate24mbp:6,erpofdmrate36mbp:6,erpofdmrate48mbp:6,erpofdmrate54mbp:6,erpofdmrate6mbp:6,erpofdmrate9mbp:6,err:15,error:[1,15],etc:42,eth0:[26,27,29],eth:[24,25,26,27,28,29],ethernet:4,evalu:38,event:38,event_work:17,eventpart:17,everi:[17,21,22,38],exampl:[1,18,22,25,32,33,38,42],except:[1,8,15],execpt:11,execut:[8,9,10,11,12,13,15,17,24,25,26,27,28,29,30,32,33,38,41,42],execute_command:[24,25,26,27,28,29,30],execute_events_on_simulation_end:[16,17],executor:[8,9,10,11,12,13,24,25,26,27,28,29,30],exist:26,exit:[1,8],exitcod:8,expand:25,expand_volume_shorthand:25,expected_result:38,explain:42,expos:25,exposed_port:25,express:[17,38],extens:41,extern:[18,19,20,21,27,29,40],externalnod:[26,29],fail:15,fals:[13,14,25,28],far:[22,41],fault:[38,40],featur:[24,25,26,27,28,29,30],fetch:28,file:[1,8,9,10,11,12,13,18,25,28,33,36,42],find:42,first:6,flag:1,folder:42,follow:[32,36],form:25,format:36,format_help:1,format_usag:1,format_vers:1,formatter_class:1,found:[6,28],free:22,frequenc:[5,6],from:[6,22,24,25,26,27,28,29,30,36,37,41,42],fromfile_prefix_char:1,func:[15,32,34],further:[6,38],furthermor:42,futur:22,g:[4,18,31,32,34],gatewai:31,gener:22,get:[20,22,32,37,40,42],get_default:1,get_free_ip_address:22,get_logg:[8,9,10,11,12,13],get_visu:[36,37],ghcr:41,github:38,give:[36,37],given:[22,29],global:[21,38],global_var:17,global_vari:38,go:20,go_offlin:[24,25,26,27,28,29,30],go_onlin:[24,25,26,27,28,29,30],goe:11,green:34,group:42,gui:42,ha:[21,22,24,25,35,41],half:22,hand:36,handl:[24,25,26,27,28,29,30],hardwar:[26,32,40],have:[18,20,22,41,42],help:14,helper:[4,6],helpformatt:1,here:[6,18],host:[11,13,21,25,26,28,29,33,40,41],hostnam:[25,28,42],how:[19,21,42],http:[6,28,38],hue:34,hybrid:40,id:[20,21,42],identifi:[18,20,21],ieee_802:6,ifnam:[18,22,26,27,29],ifnamsiz:22,ignor:[5,6,37],imag:[25,28,41,42],image_serv:28,implement:[15,25,26,28,29],includ:[26,27],incomplet:6,incorpor:1,index:[22,34,40],indic:[13,24,25,26,27,28,29,30,33,38],influxdb:33,info:[1,38],inform:6,inherit:[1,3,4,5,6,8,9,10,11,12,13,14,15,17,18,20,21,22,24,25,26,27,28,29,30,31,32,33,36,37,38],initi:[33,42],inject:[38,40],input:[20,21],insid:[24,25,26,27,28,29,30],instal:[21,24,25,26,27,28,29,30,40],instanc:[21,22,25,28,34],instanti:[3,18],instead:33,instruct:[21,38],intent:15,interfac:[3,4,5,6,19,20,21,22,24,25,26,28,29,30,31,35,36,41],interfacenod:27,intern:[3,4,5,6,14,18,24,25,26,27,28,29,30,34],io:41,ip:[18,22,24,25,26,27,28,29,30,31,42],ip_addr:22,ipv4:22,ipv6:22,item:[15,25],iter:[33,34],its:40,just:[9,42],kei:[25,28],key_valu:25,keyword:15,kind:[9,26,32],kwarg:[1,15,22,30],label:[25,28],lambda_expr:17,lan:[3,4],later:[15,18],latest:[41,42],layer:6,length:[21,22],level:[1,11,12,13,14],lib:41,librari:[41,42],like:[15,38,42],line:14,link:3,linuxcontain:28,list:[3,4,5,6,15,22,24,25,26,27,28,29,30,32,38],listen:42,load:42,local:[6,21,27,28,38,40],local_var:17,local_vari:38,localcommandexecutor:11,localhost:[21,42],locat:22,log:[1,3,4,5,6,8,9,10,11,12,13,14,15,18,20,25,28,33],log_directori:[25,28,33],log_fil:[11,13],log_path:[25,28],log_to_fil:[25,28],logfil:[11,13,14],logger:[1,8,9,10,11,12,13,14],logger_arg:1,login:29,look:42,lxc:28,lxd:41,lxdcommandexecutor:12,lxdnode:28,mac:[6,18],mac_address:18,machin:[27,42],mai:[18,32],main:[1,23,41],make:[5,6,41,42],mani:22,manipul:40,manual:[22,24,25,26,27,28,29,30,33,38],map:[20,21,25,33,42],marvi:41,mask:22,max:22,maximum:6,mbit:6,mean:25,memori:25,messag:1,meter:22,method:[22,34],mhz:[5,6],millisecond:[4,5,6,22],mobil:21,mobility_input:[32,42],mobilityinput:[19,20,21,32],mobitl:[24,25,26,27,28,29,30],mode:[18,21],model:[10,12,24,25,26,27,28,29,30],modifi:[33,41],modul:40,moment:31,monitor:33,more:[5,6],mount:[41,42],move:[19,22,42],movement:42,multipl:[20,35],must:[22,25,27,42],name:[1,3,4,5,6,8,9,10,11,12,13,15,18,20,21,22,24,25,26,27,28,29,30,42],namespac:[1,18,42],neccesari:[24,30],neccessari:[20,41],need:[15,18,21,22,26,38,41,42],net:[41,42],netanim:[36,41],netmask:22,network:[0,3,4,5,6,18,24,25,26,27,28,29,30,31,32,33,34,40,41,42],network_address:22,network_color_for:34,network_index:22,new_node_s:[36,37],new_output_directori:[36,37],next:22,next_free_ip:22,nic:27,nocontext:[15,37],node:[2,3,4,5,6,8,18,19,20,21,22,31,32,33,36,37,42],node_map:[20,21],node_s:[36,37],none:[1,5,6,8,9,10,11,12,13,14,17,18,21,22,24,25,26,27,28,29,30,33],normal:41,note:[22,42],noth:[15,37],novisu:37,now:42,ns3:26,ns3_devic:18,ns3_node:[24,25,26,27,28,29,30],ns3_nodes_contain:[3,4,5,6],ns:[0,3,4,5,6,18,24,25,26,27,28,29,30,33,40,41],number:[5,6,15,18,21,24,25,26,27,28,29,30,34],number_of_network:34,obj_typ:[21,42],object:[1,3,8,9,14,15,17,18,20,22,24,31,32,33,36,37,38],obtain:41,ofdm_rate_12mbp:6,ofdm_rate_18mbp:6,ofdm_rate_24mbp:6,ofdm_rate_36mbp:6,ofdm_rate_48mbp:6,ofdm_rate_54mbp:6,ofdm_rate_6mbp:6,ofdm_rate_9mbp:6,ofdm_rate_bw_12mbp:6,ofdm_rate_bw_18mbp:6,ofdm_rate_bw_24mbp:6,ofdm_rate_bw_27mbp:6,ofdm_rate_bw_3mbp:6,ofdm_rate_bw_4_5mbp:6,ofdm_rate_bw_6mbp:6,ofdm_rate_bw_9mbp:6,ofdmrate12mbp:6,ofdmrate12mbpsbw10mhz:6,ofdmrate18mbp:6,ofdmrate18mbpsbw10mhz:6,ofdmrate24mbp:6,ofdmrate24mbpsbw10mhz:6,ofdmrate27mbpsbw10mhz:6,ofdmrate36mbp:6,ofdmrate3mbpsbw10mhz:6,ofdmrate48mbp:6,ofdmrate4_5mbpsbw10mhz:6,ofdmrate54mbp:6,ofdmrate6mbp:6,ofdmrate6mbpsbw10mhz:6,ofdmrate9mbp:6,ofdmrate9mbpsbw10mhz:6,off:28,offer:[22,35],onc:34,one:[3,4,22],onli:[21,22,25,27,31,34,41],onto:[24,25,26,27,28,29,30,42],open:[25,28,41],oper:31,oppertun:[36,37],option:[1,18,21,22,25],option_str:1,order:[18,38,41,42],org:[6,28],osmhpi:42,other:[6,20,30,32],otherwis:[22,41],out:[9,24,25,26,27,28,29,30],output:[8,9,10,11,12,13,25,28,36,37],output_directori:[36,37],over:[13,33],overal:[1,34],overrid:[1,25],packag:[26,30],page:40,pair:[18,25,28],paramet:[1,3,4,5,6,8,9,10,11,12,13,15,18,20,21,22,24,25,26,27,28,29,30,31,32,33,34,36,37,38],paramiko:13,parent:1,pars:1,parse_arg:1,parse_known_arg:1,parser:1,particip:42,pass:[1,6,15,28,38,42],passwd:42,password:29,path:[8,9,10,11,12,13,14,21,25,28,42],path_in_contain:25,pcap:18,pcap_file_nam:18,peer:18,per:34,permiss:25,physic:[3,4,5,6,26,29],pi:29,pick:[5,6],pid:[25,41,42],pip:41,plan:38,pleas:[5,6,21,22,26,38,42],pop:15,port:[21,25,42],posit:[15,20,24,25,26,27,28,29,30,36,37],possibl:22,potenti:22,power:[5,6],prebuilt:[21,41],prefix:[24,25,26,27,28,29,30],prefix_char:1,prepar:[3,4,5,6,20,21,22,24,25,26,27,28,29,30,32,33,36,37],prepare_nod:[36,37],prepend:14,prerequesit:42,present:22,prevent:1,print:[1,9],print_help:1,print_usag:1,print_vers:1,privileg:[41,42],probabl:21,proce:42,produc:36,prog:1,project:[15,41],proper:22,properli:[38,42],properti:[3,4,5,6,15,18,25],prototyp:22,provid:[22,38,41,42],pull:[25,28,42],purpos:[8,9,15,20,33,41],push:15,put:[25,28],py:[25,26],pylxd:12,python3:41,python:[1,38,41,42],pythonpath:41,queue:17,r:34,rais:[1,11],random:[18,22],random_channel_nam:22,rang:22,raspberri:29,rate:[4,5,6],raw:6,reach:18,reachabl:29,read:6,real:[26,32],receiv:4,recommend:41,red:34,refer:[21,32,40],regist:1,registri:25,registry_nam:1,rel:25,relat:[36,37],reli:42,remot:[13,21,26,29,41],remov:[26,29],remove_additional_rout:[26,29],remove_bridg:18,remove_remote_address:[26,29],remove_veth_pair:18,repetit:1,repositori:[41,42],repres:[24,25,26,27,28,29,30],request:22,requir:41,resembl:[3,4,9,18],result:[17,37],retriev:[8,9,10,11,12,13,32],return_cod:17,return_valu:17,rm:[41,42],ro:42,root:41,rout:[22,24,25,26,27,28,29,30,31],routing_config:[24,25,26,27,28,29,30],routingconfig:31,routingrul:[24,25,26,27,28,29,30],rule:[24,25,26,27,28,29,30],run:[1,7,8,9,10,11,12,13,15,20,21,24,25,26,27,28,29,30,32,33,34,41],runtim:[25,33],rw:42,s:[3,4,6,17,18,20,22,25,28,38,41],same:[22,42],scenario:[0,1,21,33,36,38,40,41],script:[25,26,27,28,29],search:40,second:[4,5,6,17,21,22,33,38],see:[6,18,25,38,42],self:8,send:[5,6],sequenc:38,server:[21,28,42],set:[1,5,6,8,18,21,22,24,25,26,27,28,29,30,32,33,36,37,42],set_data_r:[4,5,6],set_default:1,set_delai:[4,5,6,22],set_node_posit:[36,37],set_node_s:[36,37],set_output_directori:[36,37],set_posit:[24,25,26,27,28,29,30],set_spe:22,set_visu:[32,36,37],setup:[18,25,26,28,29,31,42],setup_additional_rout:[26,29],setup_additional_routing_in_contain:[25,28],setup_bridg:18,setup_host_interfac:[25,28],setup_log:1,setup_remote_address:[26,29],setup_veth_container_end:18,setup_veth_pair:18,sh:[8,9,10,11,12,13],shadow:42,shall:[24,25,26,27,28,29,30],share:42,shell:[8,9,10,11,12,13,14,24,30],should:[1,22,25,28],show:42,side:18,simpl:[1,15,27],simplecontext:15,simul:[0,1,3,4,5,6,7,11,15,19,20,21,22,23,24,25,26,27,28,29,30,32,37,38,40,41],simulation_tim:[32,33],site:18,size:[36,37],sleep:38,smaller:22,snap:41,so:[22,41],sock:41,socket:41,solut:41,some:[9,38,41,42],someth:[11,25],sourc:[1,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,20,21,22,24,25,26,27,28,29,30,31,32,33,34,36,37,38],space:38,spatial:[5,6],specif:[15,22,34,38],specifi:[8,21,24,25,26,27,28,29,30],spectrum:34,speed:[4,22],split_shell_argu:14,sshclient:13,sshcommandexecutor:13,sshnode:29,stack:[15,24,25,26,27,28,29,30],standalone_nod:32,standard:[5,6,25],start:[17,20,21,22,25,28,32,33,38,40,42],start_contain:28,start_docker_contain:25,start_on_simulation_end:17,start_on_simulation_start:17,startup:25,statu:1,stderr:[1,8,9,10,11,12,13,25,28],stderr_logfil:[8,9,10,11,12,13],stdout:[8,9,10,11,12,13,25,28],stdout_logfil:[8,9,10,11,12,13],step:[21,24,30],step_count:21,step_length:21,steplength:21,stop:[11,20,21,25,38],stop_docker_contain:25,stop_ev:38,store:[8,15],str:[1,3,4,5,6,8,9,10,11,12,13,15,18,20,21,22,24,25,26,27,28,29,30,31,36,37],stream:[5,6,25,28],string:[1,6,25],stringify_shell_argu:14,subclass:[1,22],subnet:[22,29,31],successfulli:34,sudo:[13,14,42],sudoer:42,sumo:40,sumo_cmd:21,sumo_hom:[21,42],sumo_host:[21,42],sumo_port:[21,42],sumo_vehicle_id:21,sumocfg:42,sumomobilityinput:[21,42],suppli:[24,25,26,27,28,29,30],support:[21,22,24,25,26,27,28,29,30,31,38],sure:[5,6,11,41,42],switchnod:[22,30],system:22,t:22,tag:25,take:[29,33],tap:[18,25,28],tap_mod:18,tap_nam:18,task:38,tb:8,tbd:39,tear:15,teardown:[15,20,32],technolog:5,test:41,testb:[0,21,38,42],them:[1,25,28,33,41],therefor:[15,37,41],thereful:7,thi:[1,3,4,5,6,8,9,10,11,12,13,15,18,20,21,22,24,25,26,27,28,29,30,33,38,42],though:[41,42],thread:[21,38],threadlocalstack:15,through:21,time:[4,5,6,22,25],timeout:33,timestamp:14,titl:42,tmp:42,togeth:22,too:[6,41],tool:42,top:15,torn:15,traci:[21,42],traffic:31,transmiss:4,transmit:4,tupl:25,two:[5,6,21,42],tx_power:[5,6],type:[3,4,5,6,8,9,10,11,12,13,18,22,24,25,26,27,28,29,30,32],u:42,ubuntu:41,understand:25,uniqu:[18,20,24,34],unique_gener:34,unix:42,unnam:[8,9],unqiu:18,untest:22,until:[33,38],up:[1,26,33],updat:[24,25,26,27,28,29,30],us:[1,2,3,5,6,7,8,9,10,11,12,13,15,18,20,21,22,24,25,26,27,28,29,30,32,33,36,37,38,40,41],usag:1,useloc:18,user:[8,9,10,11,12,13,14,24,25,26,27,28,29,30,35,42],usern:[41,42],usernam:29,usr:42,v2x:5,v:[41,42],valid:[1,4,5,6],valu:[1,4,5,6,22,25,28,34,38],variabl:[21,25,38,42],variant:40,vcpu:25,vehicl:[21,42],vehicular:6,verbos:1,version:[1,21,42],veth:[18,25,28],veth_nam:18,via:[4,20,21,29,41],virtual:[25,32],visual:[22,24,25,26,27,28,29,30,32],volum:[25,41,42],volumes_and_port:25,vscode:41,w:42,wa:8,wai:[27,32,42],wait:38,wait_until:38,wait_until_tru:38,want:[15,41],wants_ip_stack:[24,25,26,27,28,29,30],warn:[3,11,18,21,22,24,25,26,27,28,29,30,38],wave:6,we:[41,42],well:22,whatev:15,when:[17,21,24,25,26,27,28,29,30,38],where:[21,22],whether:[1,13,24,25,26,27,28,29,30,33],which:[21,22,33,36],width:[5,6],wifi:[5,22],wifi_802_11a:6,wifi_802_11ac:6,wifi_802_11ax:6,wifi_802_11b:6,wifi_802_11g:6,wifi_802_11n:6,wifi_802_11n_5g:6,wifi_802_11p:6,wifi_mac_help:6,wifichannel:[6,22],wifidatar:[5,6],wifistandard:[5,6],wiki:6,wikipedia:6,wireless:[5,6,42],with_traceback:8,within:[18,24,25,26,27,28,29,30,41,42],without:[21,40,42],work:[21,24,25,26,27,28,29,30,38,41],workflow:[7,25,26,27,28,29,32,33],workflow_function_nam:38,workspac:42,would:[3,4],write:[0,25,28,40],wrong:11,x11:42,x:[24,25,26,27,28,29,30,36,37],xml:36,y:[24,25,26,27,28,29,30,36,37],you:[1,6,8,15,18,21,26,38,41,42],your:[5,6,15,18,41,42],yourself:[3,18,33,41],z:[24,25,26,27,28,29,30,36,37]},titles:["API Reference","marvis.argparse","marvis.channel","marvis.channel.channel","marvis.channel.csma","marvis.channel.cv2x","marvis.channel.wifi","marvis.command_executor","marvis.command_executor.base","marvis.command_executor.console","marvis.command_executor.docker","marvis.command_executor.local","marvis.command_executor.lxd","marvis.command_executor.ssh","marvis.command_executor.util","marvis.context","marvis.events","marvis.events.Event","marvis.interface","marvis.mobility_input","marvis.mobility_input.mobility_input","marvis.mobility_input.sumo","marvis.network","marvis.node","marvis.node.base","marvis.node.docker","marvis.node.external","marvis.node.interface","marvis.node.lxd","marvis.node.ssh","marvis.node.switch","marvis.routing_config","marvis.scenario","marvis.simulation","marvis.util","marvis.visualization","marvis.visualization.netanimvisualization","marvis.visualization.visualization","marvis.workflow","Getting Started","marvis - It\u2019s A Testbed! :)","Installation","Using SUMO With marvis"],titleterms:{"1":42,"2":42,"switch":30,A:[40,42],In:42,It:40,On:42,To:42,With:[41,42],api:0,argpars:1,base:[8,24],channel:[2,3,4,5,6],command_executor:[7,8,9,10,11,12,13,14],connect:42,consol:9,context:15,csma:4,cv2x:5,docker:[10,25,41,42],event:[16,17],extern:26,get:39,host:42,indic:40,instal:[41,42],instanc:42,interfac:[18,27],local:[11,41,42],lxd:[12,28],marvi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,42],mobility_input:[19,20,21],mode:42,netanimvisu:36,network:22,node:[23,24,25,26,27,28,29,30],refer:0,remot:42,routing_config:31,run:42,s:40,scenario:[32,42],simul:[33,42],ssh:[13,29],start:39,sumo:[21,42],tabl:40,testb:40,us:42,util:[14,34],variant:42,visual:[35,36,37],wifi:6,without:41,workflow:38,write:42}})