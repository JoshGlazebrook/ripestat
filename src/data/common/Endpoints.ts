/**
 * See: https://stat.ripe.net/docs/data_api
 */

/**
 * All RIPEStat endpoints avaialble for querying.
 */
const ENDPOINTS = {
  ROOT_API: 'https://stat.ripe.net/data',
  ABUSE_CONTACT_FINDER: '/abuse-contact-finder/data.json{?resource}',
  ADDRESS_SPACE_HIERARCHY: '/address-space-hierarchy/data.json{?resource,aggr_levels_below,max_more_specific,rir}',
  ADDRESS_SPACE_USAGE: '/address-space-usage/data.json{?resource}',
  ALLOCATION_HISTORY: '/allocation-history/data.json{?resource,starttime,endtime}',
  ANNOUNCED_PREFIXES: '/announced-prefixes/data.json{?resource,starttime,endtime,min_peers_seeing}',
  AS_OVERVIEW: '/as-overview/data.json{?resource}',
  AS_PATH_LENGTH: '/as-path-length/data.json{?resource,sort_by}',
  AS_ROUTING_CONSISTENCY: '/as-routing-consistency/data.json{?resource}',
  ASN_NEIGHBORS: '/asn-neighbours/data.json{?resource,starttime}',
  ASN_NEIGHBORS_HISTORY: '/asn-neighbours-history/data.json{?resource,starttime,endtime,max_rows}',
  ATLAS_PROBE_DEPLOYMENT: '/atlas-probe-deployment/data.json{?resource,starttime,endtime}',
  ATLAS_PROBES: '/atlas-probes/data.json{?resource}',
  ATLAS_TARGETS: '/atlas-targets/data.json{?resource}',
  BGPLAY: '/bgplay/data.json{?resource,starttime,endtime,rrcs,unix_timestamps}',
  BGP_STATE: '/bgp-state/data.json{?resource,timestamp,rrcs,unix_timestamps}',
  BGP_UPDATES: '/bgp-updates/data.json{?resource,starttime,endtime,rrcs,unix_timestamps}',
  BGP_UPDATE_ACTIVITY:
    '/bgp-update-activity/data.json{?resource,starttime,endtime,max_samples,min_sampling_period,num_hours,hide_empty_samples}',
  BLACKLIST: '/blacklist/data.json{?resource,starttime,endtime}',
  COUNTRY_ASNS: '/country-asns/data.json{?resource,query_time,lod}',
  COUNTRY_RESOURCE_STATS: '/country-resource-stats/data.json{?resource,starttime,endtime,resolution}',
  COUNTRY_RESOURCE_LIST: '/country-resource-list/data.json{?resource,time,v4_format}',
  DNS_CHAIN: '/dns-chain/data.json{?resource}',
  EXAMPLE_RESOURCES: '/example-resources/data.json',
  GEOLOCATION: '/geoloc/data.json{?resource,timestamp}',
  GEOLOCATION_HISTORY: '/geoloc-history/data.json{?resource,starttime,endtime}',
  IANA_REGISTRY_INFO: '/iana-registry-info/data.json{?resource,best_match_only}',
  LOOKING_GLASS: '/looking-glass/data.json{?resource}',
  MLAB_ACTIVITY_COUNT: '/mlab-activity-count/data.json{?resource,starttime,endtime}',
  MLAB_BANDWIDTH: '/mlab-bandwidth/data.json{?resource,starttime,endtime}',
  MLAB_CLIENTS: '/mlab-clients/data.json{?resource,starttime,endtime}',
  NETWORK_INFO: '/network-info/data.json{?resource}',
  PREFIX_COUNT: '/prefix-count/data.json{?resource,starttime,endtime,min_peers_seeing,resolution}',
  PREFIX_OVERVIEW: '/prefix-overview/data.json{?resource,min_peers_seeing,max_related,query_time}',
  PREFIX_ROUTING_CONSISTENCY: '/prefix-routing-consistency/data.json{?resource}',
  PREFIX_SIZE_DISTRIBUTION: '/prefix-size-distribution/data.json{?resource,timestamp,min_peers_seeing}',
  REGISTRY_BROWSER: '/registry-browser/data.json{?resource,use_live_lookups}',
  RIR: '/rir/data.json{?resource,starttime,endtime,lod}',
  RIR_PREFIX_SIZE_DISTRIBUTION: '/rir-prefix-size-distribution/data.json{?resource,query_time}',
  RIR_ASNS: '/rir-asns/data.json{?query_time,list_asns,asn_types}',
  RIS_FIRST_LAST_SEEN: '/rir-first-last-seen/data.json{?resource,include}',
  RIS_PREFIXES: '/rir-prefixes/data.json{?resource,query_time,list_prefixes,types,af,noise}',
  RIS_PEERINGS: '/ris-peerings/data.json{?resource,query_time}',
  RIS_PEER_COUNT: '/ris-peer-count/data.json{?starttime,endtime,v4_full_prefix_threshold,v6_full_prefix_threshold}',
  RELATED_PREFIXES: '/related-prefixes/data.json{?resource}',
  REVERSE_DNS: '/reverse-dns/data.json{?resource}',
  REVERSE_DNS_IP: '/reverse-dns-ip/data.json{?resource}',
  REVERSE_DNS_CONSISTENCY: '/reverse-dns-consistency/data.json{?resource,ipv4,ipv6}',
  ROUTING_HISTORY:
    '/routing-history/data.json{?resource,max_rows,include_first_hop,normalise_visibility,min_peers,starttime,endtime}',
  ROUTING_STATUS: '/routing-status/data.json{?resource,timestamp,min_peers_seeing}',
  SEARCHCOMPLETE: '/searchcomplete/data.json{?resource,limit}',
  SPEEDCHECKER_BANDWIDTH_MEASUREMENTS: '/speedchecker-bandwidth-measurements/data.json{?resource,starttime,endtime}',
  VISIBILITY: '/visibility/data.json{?resource,starttime,endtime,include}',
  WHATS_MY_IP: '/whats-my-ip/data.json',
  WHOIS: '/whois/data.json{?resource}',
  WHOIS_OBJECT_LAST_UPDATED: '/whois-object-last-updated/data.json{?object,type,source,timestamp,compare_with_live}'
};

export default ENDPOINTS;
