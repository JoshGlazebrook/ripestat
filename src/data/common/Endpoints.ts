/**
 * See: https://stat.ripe.net/docs/data_api
 */

/**
 * All RIPEStat endpoints avaialble for querying.
 */
const ENDPOINTS = {
  ROOT_API: 'https://stat.ripe.net/data',
  ABUSE_CONTACT_FINDER: '/abuse-contact-finder/data.json{?resource,meta,callback}',
  ADDRESS_SPACE_HIERARCHY: '/address-space-hierarchy/data.json{?resource,aggr_levels_below,max_more_specific,rir,meta,callback}',
  ADDRESS_SPACE_USAGE: '/address-space-usage/data.json{?resource,meta,callback}',
  ALLOCATION_HISTORY: '/allocation-history/data.json{?resource,starttime,endtime,meta,callback}',
  ANNOUNCED_PREFIXES: '/announced-prefixes/data.json{?resource,starttime,endtime,min_peers_seeing,meta,callback}',
  AS_OVERVIEW: '/as-overview/data.json{?resource,meta,callback}',
  AS_PATH_LENGTH: '/as-path-length/data.json{?resource,sort_by,meta,callback}',
  AS_ROUTING_CONSISTENCY: '/as-routing-consistency/data.json{?resource,meta,callback}',
  ASN_NEIGHBORS: '/asn-neighbours/data.json{?resource,starttime,meta,callback}',
  ASN_NEIGHBORS_HISTORY: '/asn-neighbours-history/data.json{?resource,starttime,endtime,max_rows,meta,callback}',
  ATLAS_PROBE_DEPLOYMENT: '/atlas-probe-deployment/data.json{?resource,starttime,endtime,meta,callback}',
  ATLAS_PROBES: '/atlas-probes/data.json{?resource,meta,callback}',
  ATLAS_TARGETS: '/atlas-targets/data.json{?resource,meta,callback}',
  BGPLAY: '/bgplay/data.json{?resource,starttime,endtime,rrcs,unix_timestamps,meta,callback}',
  BGP_STATE: '/bgp-state/data.json{?resource,timestamp,rrcs,unix_timestamps,meta,callback}',
  BGP_UPDATES: '/bgp-updates/data.json{?resource,starttime,endtime,rrcs,unix_timestamps,meta,callback}',
  BGP_UPDATE_ACTIVITY:
    '/bgp-update-activity/data.json{?resource,starttime,endtime,max_samples,min_sampling_period,num_hours,hide_empty_samples,meta,callback}',
  BLACKLIST: '/blacklist/data.json{?resource,starttime,endtime,meta,callback}',
  COUNTRY_ASNS: '/country-asns/data.json{?resource,query_time,lod,meta,callback}',
  COUNTRY_RESOURCE_STATS: '/country-resource-stats/data.json{?resource,starttime,endtime,resolution,meta,callback}',
  COUNTRY_RESOURCE_LIST: '/country-resource-list/data.json{?resource,time,v4_format,meta,callback}',
  DNS_CHAIN: '/dns-chain/data.json{?resource,meta,callback}',
  EXAMPLE_RESOURCES: '/example-resources/data.json{?meta,callback}',
  GEOLOCATION: '/geoloc/data.json{?resource,timestamp,meta,callback}',
  GEOLOCATION_HISTORY: '/geoloc-history/data.json{?resource,starttime,endtime,meta,callback}',
  IANA_REGISTRY_INFO: '/iana-registry-info/data.json{?resource,best_match_only,meta,callback}',
  LOOKING_GLASS: '/looking-glass/data.json{?resource,meta,callback}',
  MLAB_ACTIVITY_COUNT: '/mlab-activity-count/data.json{?resource,starttime,endtime,meta,callback}',
  MLAB_BANDWIDTH: '/mlab-bandwidth/data.json{?resource,starttime,endtime,meta,callback}',
  MLAB_CLIENTS: '/mlab-clients/data.json{?resource,starttime,endtime,meta,callback}',
  NETWORK_INFO: '/network-info/data.json{?resource,meta,callback}',
  PREFIX_COUNT: '/prefix-count/data.json{?resource,starttime,endtime,min_peers_seeing,resolution,meta,callback}',
  PREFIX_OVERVIEW: '/prefix-overview/data.json{?resource,min_peers_seeing,max_related,query_time,meta,callback}',
  PREFIX_ROUTING_CONSISTENCY: '/prefix-routing-consistency/data.json{?resource,meta,callback}',
  PREFIX_SIZE_DISTRIBUTION: '/prefix-size-distribution/data.json{?resource,timestamp,min_peers_seeing,meta,callback}',
  REGISTRY_BROWSER: '/registry-browser/data.json{?resource,use_live_lookups,meta,callback}',
  RIR: '/rir/data.json{?resource,starttime,endtime,lod,meta,callback}',
  RIR_PREFIX_SIZE_DISTRIBUTION: '/rir-prefix-size-distribution/data.json{?resource,query_time,meta,callback}',
  RIS_ASNS: '/ris-asns/data.json{?query_time,list_asns,asn_types,meta,callback}',
  RIS_FIRST_LAST_SEEN: '/rir-first-last-seen/data.json{?resource,include,meta,callback}',
  RIS_PREFIXES: '/rir-prefixes/data.json{?resource,query_time,list_prefixes,types,af,noise,meta,callback}',
  RIS_PEERINGS: '/ris-peerings/data.json{?resource,query_time,meta,callback}',
  RIS_PEER_COUNT: '/ris-peer-count/data.json{?starttime,endtime,v4_full_prefix_threshold,v6_full_prefix_threshold,meta,callback}',
  RELATED_PREFIXES: '/related-prefixes/data.json{?resource,meta,callback}',
  REVERSE_DNS: '/reverse-dns/data.json{?resource,meta,callback}',
  REVERSE_DNS_IP: '/reverse-dns-ip/data.json{?resource,meta,callback}',
  REVERSE_DNS_CONSISTENCY: '/reverse-dns-consistency/data.json{?resource,ipv4,ipv6,meta,callback}',
  ROUTING_HISTORY: '/routing-history/data.json{?resource,max_rows,include_first_hop,normalise_visibility,min_peers,starttime,endtime,meta,callback}',
  ROUTING_STATUS: '/routing-status/data.json{?resource,timestamp,min_peers_seeing,meta,callback}',
  SEARCHCOMPLETE: '/searchcomplete/data.json{?resource,limit,meta,callback}',
  SPEEDCHECKER_BANDWIDTH_MEASUREMENTS: '/speedchecker-bandwidth-measurements/data.json{?resource,starttime,endtime,meta,callback}',
  VISIBILITY: '/visibility/data.json{?resource,starttime,endtime,include,meta,callback}',
  WHATS_MY_IP: '/whats-my-ip/data.json{?meta,callback}',
  WHOIS: '/whois/data.json{?resource,meta,callback}',
  WHOIS_OBJECT_LAST_UPDATED: '/whois-object-last-updated/data.json{?object,type,source,timestamp,compare_with_live,meta,callback}'
};

export default ENDPOINTS;
