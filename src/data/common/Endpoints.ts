/**
 * See: https://stat.ripe.net/docs/data_api
 */

/**
 * All RIPEStat endpoints avaialble for querying.
 */
const ENDPOINTS = {
  ROOT_API: 'https://stat.ripe.net/data',
  ABUSE_CONTACT_FINDER: '/abuse-contact-finder/data.json{?resource,meta,callback,sourceapp}',
  ADDRESS_SPACE_HIERARCHY: '/address-space-hierarchy/data.json{?resource,aggr_levels_below,max_more_specific,rir,meta,callback,sourceapp}',
  ADDRESS_SPACE_USAGE: '/address-space-usage/data.json{?resource,meta,callback,sourceapp}',
  ALLOCATION_HISTORY: '/allocation-history/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  ANNOUNCED_PREFIXES: '/announced-prefixes/data.json{?resource,starttime,endtime,min_peers_seeing,meta,callback,sourceapp}',
  AS_OVERVIEW: '/as-overview/data.json{?resource,meta,callback,sourceapp}',
  AS_PATH_LENGTH: '/as-path-length/data.json{?resource,sort_by,meta,callback,sourceapp}',
  AS_ROUTING_CONSISTENCY: '/as-routing-consistency/data.json{?resource,meta,callback,sourceapp}',
  ASN_NEIGHBORS: '/asn-neighbours/data.json{?resource,starttime,meta,callback,sourceapp}',
  ASN_NEIGHBORS_HISTORY: '/asn-neighbours-history/data.json{?resource,starttime,endtime,max_rows,meta,callback,sourceapp}',
  ATLAS_PROBE_DEPLOYMENT: '/atlas-probe-deployment/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  ATLAS_PROBES: '/atlas-probes/data.json{?resource,meta,callback,sourceapp}',
  ATLAS_TARGETS: '/atlas-targets/data.json{?resource,meta,callback,sourceapp}',
  BGPLAY: '/bgplay/data.json{?resource,starttime,endtime,rrcs,unix_timestamps,meta,callback,sourceapp}',
  BGP_STATE: '/bgp-state/data.json{?resource,timestamp,rrcs,unix_timestamps,meta,callback,sourceapp}',
  BGP_UPDATES: '/bgp-updates/data.json{?resource,starttime,endtime,rrcs,unix_timestamps,meta,callback,sourceapp}',
  BGP_UPDATE_ACTIVITY: `/bgp-update-activity/data.json{?resource,starttime,endtime,max_samples,min_sampling_period,
      num_hours,hide_empty_samples,meta,callback,sourceapp}`,
  BLACKLIST: '/blacklist/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  COUNTRY_ASNS: '/country-asns/data.json{?resource,query_time,lod,meta,callback,sourceapp}',
  COUNTRY_RESOURCE_STATS: '/country-resource-stats/data.json{?resource,starttime,endtime,resolution,meta,callback,sourceapp}',
  COUNTRY_RESOURCE_LIST: '/country-resource-list/data.json{?resource,time,v4_format,meta,callback,sourceapp}',
  DNS_CHAIN: '/dns-chain/data.json{?resource,meta,callback,sourceapp}',
  EXAMPLE_RESOURCES: '/example-resources/data.json{?meta,callback,sourceapp}',
  GEOLOCATION: '/geoloc/data.json{?resource,timestamp,meta,callback,sourceapp}',
  GEOLOCATION_HISTORY: '/geoloc-history/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  IANA_REGISTRY_INFO: '/iana-registry-info/data.json{?resource,best_match_only,meta,callback,sourceapp}',
  LOOKING_GLASS: '/looking-glass/data.json{?resource,meta,callback,sourceapp}',
  MLAB_ACTIVITY_COUNT: '/mlab-activity-count/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  MLAB_BANDWIDTH: '/mlab-bandwidth/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  MLAB_CLIENTS: '/mlab-clients/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  NETWORK_INFO: '/network-info/data.json{?resource,meta,callback,sourceapp}',
  PREFIX_COUNT: '/prefix-count/data.json{?resource,starttime,endtime,min_peers_seeing,resolution,meta,callback,sourceapp}',
  PREFIX_OVERVIEW: '/prefix-overview/data.json{?resource,min_peers_seeing,max_related,query_time,meta,callback,sourceapp}',
  PREFIX_ROUTING_CONSISTENCY: '/prefix-routing-consistency/data.json{?resource,meta,callback,sourceapp}',
  PREFIX_SIZE_DISTRIBUTION: '/prefix-size-distribution/data.json{?resource,timestamp,min_peers_seeing,meta,callback,sourceapp}',
  REGISTRY_BROWSER: '/registry-browser/data.json{?resource,use_live_lookups,meta,callback,sourceapp}',
  RIR: '/rir/data.json{?resource,starttime,endtime,lod,meta,callback,sourceapp}',
  RIR_PREFIX_SIZE_DISTRIBUTION: '/rir-prefix-size-distribution/data.json{?resource,query_time,meta,callback,sourceapp}',
  RIS_ASNS: '/ris-asns/data.json{?query_time,list_asns,asn_types,meta,callback,sourceapp}',
  RIS_FIRST_LAST_SEEN: '/rir-first-last-seen/data.json{?resource,include,meta,callback,sourceapp}',
  RIS_PREFIXES: '/rir-prefixes/data.json{?resource,query_time,list_prefixes,types,af,noise,meta,callback,sourceapp}',
  RIS_PEERINGS: '/ris-peerings/data.json{?resource,query_time,meta,callback,sourceapp}',
  RIS_PEER_COUNT: '/ris-peer-count/data.json{?starttime,endtime,v4_full_prefix_threshold,v6_full_prefix_threshold,meta,callback,sourceapp}',
  RELATED_PREFIXES: '/related-prefixes/data.json{?resource,meta,callback,sourceapp}',
  REVERSE_DNS: '/reverse-dns/data.json{?resource,meta,callback,sourceapp}',
  REVERSE_DNS_IP: '/reverse-dns-ip/data.json{?resource,meta,callback,sourceapp}',
  REVERSE_DNS_CONSISTENCY: '/reverse-dns-consistency/data.json{?resource,ipv4,ipv6,meta,callback,sourceapp}',
  ROUTING_HISTORY:
    '/routing-history/data.json{?resource,max_rows,include_first_hop,normalise_visibility,min_peers,starttime,endtime,meta,callback,sourceapp}',
  ROUTING_STATUS: '/routing-status/data.json{?resource,timestamp,min_peers_seeing,meta,callback,sourceapp}',
  SEARCHCOMPLETE: '/searchcomplete/data.json{?resource,limit,meta,callback,sourceapp}',
  SPEEDCHECKER_BANDWIDTH_MEASUREMENTS: '/speedchecker-bandwidth-measurements/data.json{?resource,starttime,endtime,meta,callback,sourceapp}',
  VISIBILITY: '/visibility/data.json{?resource,starttime,endtime,include,meta,callback,sourceapp}',
  WHATS_MY_IP: '/whats-my-ip/data.json{?meta,callback,sourceapp}',
  WHOIS: '/whois/data.json{?resource,meta,callback,sourceapp}',
  WHOIS_OBJECT_LAST_UPDATED: '/whois-object-last-updated/data.json{?object,type,source,timestamp,compare_with_live,meta,callback,sourceapp}'
};

export default ENDPOINTS;
