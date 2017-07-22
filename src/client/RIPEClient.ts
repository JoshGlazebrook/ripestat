import * as rest from 'rest';
import * as https from 'https';
import pathPrefix = require('rest/interceptor/pathPrefix');
import mime = require('rest/interceptor/mime');
import errorCode = require('rest/interceptor/errorCode');
import timeout = require('rest/interceptor/timeout');
import template = require('rest/interceptor/template');
import defaultRequest = require('rest/interceptor/defaultRequest');
import jsonp = require('rest/interceptor/jsonp');

import { convertDatesToStrings } from '../util/RIPEClientHelpers';

import ENDPOINTS from '../data/common/Endpoints';
import { RESTResponse } from '../data/common/RESTResponse';
import { RIPEResponse } from '../data/common/RIPEResponse';

import * as data from '../data';

/**
 * Options for creating a RIPEClient.
 */
interface RIPEClientOptions {
  /**
   * If provided, this agent will be used when making https requests.
   */
  agent?: https.Agent;

  /**
   * The length of time (in milliseconds) to wait for a response.
   */
  timeout?: number;

  /**
   * The sourceapp string to pass to all API calls (RIPE Stat asks you to include this if you use more than 1000 queries per day)
   */
  sourceapp?: string;

  /**
   * If true, underlying api calls will wrap themselves using JSONP.
   */
  jsonp?: boolean;
}

const DEFAULT_OPTIONS: RIPEClientOptions = {
  agent: new https.Agent({
    maxSockets: 10
  }),
  timeout: 15000
};

class RIPEClient {
  private client: rest.Client;

  /**
   * Constructs a new RipeClient that can be used for querying the RIPE Stat Api.
   * @param { RIPEClientOptions } options
   */
  constructor(options: RIPEClientOptions = DEFAULT_OPTIONS) {
    this.client = rest
      .wrap<mime.Config>(mime)
      .wrap<pathPrefix.Config>(pathPrefix, {
        prefix: ENDPOINTS.ROOT_API
      })
      .wrap<template.Config>(template)
      .wrap<defaultRequest.Config>(defaultRequest, {
        params: {
          sourceapp: options.sourceapp
        },
        mixin: {
          agent: options.agent
        }
      })
      .wrap<errorCode.Config>(errorCode)
      .wrap<timeout.Config>(timeout, {
        timeout: options.timeout
      });

    // Add jsonp if enabled.
    if (options.jsonp) {
      this.client = this.client.wrap<jsonp.Config>(jsonp);
    }
  }

  /**
 * Performs an API request to the RIPE Stat data api.
 *
 * @param {RIPEClient} client The RIPEClient instance to use.
 * @param {string} path The data endpoint to use.
 * @param {object} options The options (url params values) to use.
 * @param {object} defaultOptions The default options (url params values) to use.
 */
  private static _performAPIRequest<T>(
    client: rest.Client,
    path: string,
    options: object,
    defaultOptions?: object
  ): Promise<RIPEResponse<T>> {
    return client({
      path,
      params: {
        ...convertDatesToStrings(defaultOptions),
        ...convertDatesToStrings(options)
      }
    }).then((response: RESTResponse<T>) => {
      return response.entity;
    });
  }

  /**
   * Looks up abuse contact information for an internet number resource.
   *
   * @param { AbuseContactFinderOptions } options
   */
  abuseContactFinder(options: data.AbuseContactFinderOptions): Promise<RIPEResponse<data.AbuseContactFinderResponse>> {
    return RIPEClient._performAPIRequest<data.AbuseContactFinderResponse>(
      this.client,
      ENDPOINTS.ABUSE_CONTACT_FINDER,
      options
    );
  }

  /**
   * Looks up address space hierarchy for an internet number resource.
   *
   * @param { AddresSpaceHierarchyOptions } options
   */
  addressSpaceHierarchy(
    options: data.AddressSpaceHierarchyOptions
  ): Promise<RIPEResponse<data.AddressSpaceHierarchyResponse>> {
    return RIPEClient._performAPIRequest<data.AddressSpaceHierarchyResponse>(
      this.client,
      ENDPOINTS.ADDRESS_SPACE_HIERARCHY,
      options
    );
  }

  /**
   * Looks up the usage ratio of this prefix or IP range according to the objects currently present in the RIPE Whois database.
   *
   * @param { AddressSpaceUsageOptions } options
   */
  addressSpaceUsage(options: data.AddressSpaceUsageOptions): Promise<RIPEResponse<data.AddressSpaceUsageResponse>> {
    return RIPEClient._performAPIRequest<data.AddressSpaceUsageResponse>(
      this.client,
      ENDPOINTS.ADDRESS_SPACE_USAGE,
      options
    );
  }

  /**
   * Looks up information supplied by IANA and RIRs for allocations and direct assignments of prefixes and AS numbers of time.
   *
   * @param { AllocationHistoryOptions } options
   */
  allocationHistory(options: data.AllocationHistoryOptions): Promise<RIPEResponse<data.AllocationHistoryResponse>> {
    return RIPEClient._performAPIRequest<data.AllocationHistoryResponse>(
      this.client,
      ENDPOINTS.ALLOCATION_HISTORY,
      options
    );
  }

  /**
   * Looks up all announced prefixes for a given ASN. The results can be restricted to a specific time period.
   *
   * @param { AnnouncedPrefixesOptions } options
   */
  announcedPrefixes(options: data.AnnouncedPrefixesOptions): Promise<RIPEResponse<data.AnnouncedPrefixesResponse>> {
    return RIPEClient._performAPIRequest<data.AnnouncedPrefixesResponse>(
      this.client,
      ENDPOINTS.ANNOUNCED_PREFIXES,
      options
    );
  }

  /**
   * Looks up general information about an ASN like its announcement status and the name of its holder according to the WHOIS service.
   *
   * @param { ASOverviewOptions } options
   */
  asOverview(options: data.ASOverviewOptions): Promise<RIPEResponse<data.ASOverviewResponse>> {
    return RIPEClient._performAPIRequest<data.ASOverviewResponse>(this.client, ENDPOINTS.AS_OVERVIEW, options);
  }

  /**
   * Looks up AS-path metrics (e.g. shortest or longest AS-path to other ASNs we are peering with) for the queried ASN.
   *
   * @param { ASPathLengthOptions } options
   */
  asPathLength(options: data.ASPathLengthOptions): Promise<RIPEResponse<data.ASPathLengthResponse>> {
    return RIPEClient._performAPIRequest<data.ASPathLengthResponse>(this.client, ENDPOINTS.AS_PATH_LENGTH, options);
  }

  /**
   * Looks up the difference between routing and registration state of a ASN.
   *
   * @param { ASRoutingConsistencyOptions } options
   */
  asRoutingConsistency(
    options: data.ASRoutingConsistencyOptions
  ): Promise<RIPEResponse<data.ASRoutingConsistencyResponse>> {
    return RIPEClient._performAPIRequest<data.ASRoutingConsistencyResponse>(
      this.client,
      ENDPOINTS.AS_ROUTING_CONSISTENCY,
      options
    );
  }

  /**
   * Looks up all neighbors for the given ASN.
   *
   * @param { ASNNeighborsOptions } options
   */
  asnNeighbors(options: data.ASNNeighborsOptions): Promise<RIPEResponse<data.ASNNeighborsResponse>> {
    return RIPEClient._performAPIRequest<data.ASNNeighborsResponse>(this.client, ENDPOINTS.ASN_NEIGHBORS, options);
  }

  /**
   * Looks up information about neigbouring ASNs of a queried ASN extended with history.
   *
   * @param { ASNNeighborsHistoryOptions } options
   */
  asnNeighborsHistory(
    options: data.ASNNeighborsHistoryOptions
  ): Promise<RIPEResponse<data.ASNNeighborsHistoryResponse>> {
    return RIPEClient._performAPIRequest<data.ASNNeighborsHistoryResponse>(
      this.client,
      ENDPOINTS.ASN_NEIGHBORS_HISTORY,
      options
    );
  }

  /**
   * Provides information on the number of RIPE Atlas probes in a region, a country or network (ASN).
   *
   * It supports history, with a general start in 2014.
   * @param { AtlasProbeDeploymentOptions } options
   */
  atlasProbeDeployment(
    options: data.AtlasProbeDeploymentOptions
  ): Promise<RIPEResponse<data.AtlasProbeDeploymentResponse>> {
    return RIPEClient._performAPIRequest<data.AtlasProbeDeploymentResponse>(
      this.client,
      ENDPOINTS.ATLAS_PROBE_DEPLOYMENT,
      options
    );
  }

  /**
   * Provides information on the RIPE Atlas probes in an network (ASN), a prefix or a country.
   * The information is based on data coming from the RIPE Atlas REST API, https://atlas.ripe.net/docs/api/v2/manual/.
   *
   * @param { AtlasProbesOptions } options
   */
  atlasProbes(options: data.AtlasProbesOptions): Promise<RIPEResponse<data.AtlasProbesResponse>> {
    return RIPEClient._performAPIRequest<data.AtlasProbesResponse>(this.client, ENDPOINTS.ATLAS_PROBES, options);
  }

  /**
   * Provides information on the RIPE Atlas probes in an network (ASN), a prefix or a country.
   * The information is based on data coming from the RIPE Atlas REST API, https://atlas.ripe.net/docs/api/v2/manual/.
   *
   * @param { AtlasTargetsOptions } options
   */
  atlasTargets(options: data.AtlasTargetsOptions): Promise<RIPEResponse<data.AtlasTargetsResponse>> {
    return RIPEClient._performAPIRequest<data.AtlasTargetsResponse>(this.client, ENDPOINTS.ATLAS_TARGETS, options);
  }

  /**
   * represents the scenario of what occurred to the BGP routes of a resource over a period of time.
   * It includes data that defines the initial BGP state at the start time of the query, and all the BGP updates observed from then until the
   * end time, as well as a description of all the AS nodes, and RIS BGP peers involved in the result.
   *
   * @param { BGPlayOptions } options
   */
  bgPlay(options: data.BGPlayOptions): Promise<RIPEResponse<data.AtlasTargetsResponse>> {
    return RIPEClient._performAPIRequest<data.AtlasTargetsResponse>(this.client, ENDPOINTS.BGPLAY, options);
  }

  /**
   * Returns the state of BGP routes for a resource at a certain point in time, as observed by all the RIS collectors.
   * This is derived by applying a computation of state to the RIB dump (granularity=8h) that occurred exactly before that time,
   * using the BGP updates observed between the RIB time and the query time.
   *
   * @param { BGPStateOptions } options
   */
  bgpState(options: data.BGPStateOptions): Promise<RIPEResponse<data.BGPStateResponse>> {
    return RIPEClient._performAPIRequest<data.BGPStateResponse>(this.client, ENDPOINTS.BGP_STATE, options);
  }

  /**
   * Returns the state of BGP routes for a resource at a certain point in time, as observed by all the RIS collectors.
   * This is derived by applying a computation of state to the RIB dump (granularity=8h) that occurred exactly before that time,
   * using the BGP updates observed between the RIB time and the query time.
   *
   * @param { BGPStateOptions } options
   */
  bgpUpdates(options: data.BGPUpdatesOptions): Promise<RIPEResponse<data.BGPUpdatesResponse>> {
    return RIPEClient._performAPIRequest<data.BGPUpdatesResponse>(this.client, ENDPOINTS.BGP_UPDATES, options);
  }

  /**
   * Returns the number of BGP updates seen over time.
   *
   * @param options { BGPUpdateActivityOptions }
   */
  bgpUpdateActivity(options: data.BGPUpdateActivityOptions): Promise<RIPEResponse<data.BGPUpdateActivityResponse>> {
    return RIPEClient._performAPIRequest<data.BGPUpdateActivityResponse>(
      this.client,
      ENDPOINTS.BGP_UPDATE_ACTIVITY,
      options
    );
  }

  /**
   * Returns blacklist related data for a queried resource..
   * @param options { BlacklistOptions }
   */
  blacklist(options: data.BlacklistOptions): Promise<RIPEResponse<data.BlacklistResponse>> {
    return RIPEClient._performAPIRequest<data.BlacklistResponse>(this.client, ENDPOINTS.BLACKLIST, options);
  }

  /**
   * Provides information on a country's registered and routed ASNs. Registered ASNs are based on registration information made public
   * by the Regional Internet Registries. The routing information is based on the data collected with the RIPE NCC's RIS system,
   * https://ris.ripe.net. The data call supports history, with data points being aligned to times dumps are created in
   * RIS (00:00, 08:00 and 16:00 UTC).
   * By default, the data call returns just the number of registered and routed ASNs. This is mainly to prevent returning thousands of ASNs.
   * See parameter settings below to further tailor the output to your needs.
   *
   * @param options { CountryASNSOptions }
   */
  countryASNS(options: data.CountryASNSOptions): Promise<RIPEResponse<data.CountryASNSResponse>> {
    return RIPEClient._performAPIRequest<data.CountryASNSResponse>(this.client, ENDPOINTS.COUNTRY_ASNS, options);
  }

  /**
   * Returns statistics on Internet resources for a country - this includes:
   * number of ASNs seen in routing data and registration data
   * number of prefixes in routing data and registration data (split into IPv4 and IPv6)
   * amount of IPv4 space seen in routing data as well as registration data
   * The results can be restricted to a specific time period as well the granularity is variable but can be set explicitly.
   *
   * @param options { CountryResourceStatsOptions }
   */
  countryResourceStats(
    options: data.CountryResourceStatsOptions
  ): Promise<RIPEResponse<data.CountryResourceStatsResponse>> {
    return RIPEClient._performAPIRequest<data.CountryResourceStatsResponse>(
      this.client,
      ENDPOINTS.COUNTRY_RESOURCE_STATS,
      options
    );
  }

  /**
   * Lists the Internet resources associated with a country, including ASNs, IPv4 ranges and IPv4/6 CIDR prefixes.
   * This data is derived from the RIR Statistics files maintained by the various RIRs.
   *
   * @param options { CountryResourceListOptions }
   */
  countryResourceList(
    options: data.CountryResourceListOptions
  ): Promise<RIPEResponse<data.CountryResourceListResponse>> {
    return RIPEClient._performAPIRequest<data.CountryResourceListResponse>(
      this.client,
      ENDPOINTS.COUNTRY_RESOURCE_LIST,
      options
    );
  }

  /**
   * Returns the recursive chain of DNS forward (A/AAAA/CNAME) and reverse (PTR) records starting form either a hostname or an IP address.
   *
   * @param options { DNSChainOptions }
   */
  dnsChain(options: data.DNSChainOptions): Promise<RIPEResponse<data.DNSChainResponse>> {
    return RIPEClient._performAPIRequest<data.DNSChainResponse>(this.client, ENDPOINTS.DNS_CHAIN, options);
  }

  /**
   * Returns sample resources for ASN, IPv4 and IPv6 resources. All are taken from routing data.
   */
  exampleResources(): Promise<RIPEResponse<data.ExampleResourcesResponse>> {
    return RIPEClient._performAPIRequest<data.ExampleResourcesResponse>(this.client, ENDPOINTS.EXAMPLE_RESOURCES, {});
  }

  /**
   * Returns geolocation information for the given IP space, or for announced IP prefixes in the case of ASNs.
   *
   * @param options { GeolocationOptions }
   */
  geolocation(options: data.GeolocationOptions): Promise<RIPEResponse<data.GeolocationResponse>> {
    return RIPEClient._performAPIRequest<data.GeolocationResponse>(this.client, ENDPOINTS.GEOLOCATION, options);
  }

  /**
   * Returns information on the changes in geolocation for the given IP space, or for announced IP prefixes in the case of ASNs.
   *
   * @param options { GeolocationHistoryOptions }
   */
  gelocationHistory(options: data.GeolocationHistoryOptions): Promise<RIPEResponse<data.GeolocationHistoryResponse>> {
    return RIPEClient._performAPIRequest<data.GeolocationHistoryResponse>(
      this.client,
      ENDPOINTS.GEOLOCATION_HISTORY,
      options
    );
  }

  /**
   * Gives access to various data sources maintained by IANA. These include:
   *
   * IANA 16-bit Autonomous System (AS) Numbers Registry (http://www.iana.org/assignments/as-numbers/as-numbers-1.csv)
   * IANA 32-bit Autonomous System (AS) Numbers Registry (http://www.iana.org/assignments/as-numbers/as-numbers-2.csv)
   * Etc. - the detailed list of data sources included can be seen in the methodology information of the data call.
   *
   * Note: Output format for the methodology information is JSON!
   * The data call supports a "resource" parameter which filters all results down to entries that are topologically related to the given resource.
   * The data is refreshed once a day to guarantee up-to-date information.
   *
   * @param options { IANARegistryInfoOptions }
   */
  ianaRegistryInfo(options: data.IANARegistryInfoOptions): Promise<RIPEResponse<data.IANARegistryInfoResponse>> {
    return RIPEClient._performAPIRequest<data.IANARegistryInfoResponse>(
      this.client,
      ENDPOINTS.IANA_REGISTRY_INFO,
      options
    );
  }

  /**
   * Returns the output of a direct BGP looking glass query for this IP from all the locations where a RIPE NCC Route Collector is present.
   *
   * @param options { LookingGlassOptions }
   */
  lookingGlass(options: data.LookingGlassOptions): Promise<RIPEResponse<data.LookingGlassResponse>> {
    return RIPEClient._performAPIRequest<data.LookingGlassResponse>(this.client, ENDPOINTS.LOOKING_GLASS, options);
  }

  /**
   * Returns a count of all the hosts within a certain resource for which any network tests occurred.
   *
   * @param options { MLabActivityCountOptions }
   */
  mLabActivityCount(options: data.MLabActivityCountOptions): Promise<RIPEResponse<data.MLabActivityCountResponse>> {
    return RIPEClient._performAPIRequest<data.MLabActivityCountResponse>(
      this.client,
      ENDPOINTS.MLAB_ACTIVITY_COUNT,
      options
    );
  }

  /**
   * Returns a set of all the measured network bandwidths for a certain resource.
   *
   * @param options { MLabBandwidthOptions }
   */
  mLabBandwidth(options: data.MLabBandwidthOptions): Promise<RIPEResponse<data.MLabBandwidthResponse>> {
    return RIPEClient._performAPIRequest<data.MLabBandwidthResponse>(this.client, ENDPOINTS.MLAB_BANDWIDTH, options);
  }

  /**
   * Returns a set of all the hosts within a certain resource for which any network tests occurred.
   *
   * @param options { MLabClientsOptions }
   */
  mLabClients(options: data.MLabClientsOptions): Promise<RIPEResponse<data.MLabClientsResponse>> {
    return RIPEClient._performAPIRequest<data.MLabClientsResponse>(this.client, ENDPOINTS.MLAB_CLIENTS, options);
  }

  /**
   * Returns the containing prefix and announcing ASN of a given IP address.
   *
   * @param options { NetworkInfoOptions }
   */
  networkInfo(options: data.NetworkInfoOptions): Promise<RIPEResponse<data.NetworkInfoResponse>> {
    return RIPEClient._performAPIRequest<data.NetworkInfoResponse>(this.client, ENDPOINTS.NETWORK_INFO, options);
  }

  /**
   * Returns the number of prefixes announced by a given ASN over time.
   *
   * @param options { PrefixCountOptions }
   */
  prefixCount(options: data.PrefixCountOptions): Promise<RIPEResponse<data.PrefixCountResponse>> {
    return RIPEClient._performAPIRequest<data.PrefixCountResponse>(this.client, ENDPOINTS.PREFIX_COUNT, options);
  }

  /**
   * Returns a summary of the given prefix, including whether and by whom it is announced.
   *
   * @param options { PrefixOverviewOptions }
   */
  prefixOverview(options: data.PrefixOverviewOptions): Promise<RIPEResponse<data.PrefixOverviewResponse>> {
    return RIPEClient._performAPIRequest<data.PrefixOverviewResponse>(this.client, ENDPOINTS.PREFIX_OVERVIEW, options);
  }

  /**
   * This data call compares the given routes (prefix originating from an ASN) between Routing Registries and
   * actual routing behaviour as seen by the RIPE NCC route collectors (RIS).
   *
   * @param options { PrefixRoutingConsistencyOptions }
   */
  prefixRoutingConsistency(
    options: data.PrefixRoutingConsistencyOptions
  ): Promise<RIPEResponse<data.PrefixRoutingConsistencyResponse>> {
    return RIPEClient._performAPIRequest<data.PrefixRoutingConsistencyResponse>(
      this.client,
      ENDPOINTS.PREFIX_ROUTING_CONSISTENCY,
      options
    );
  }

  /**
   * Returns the total amount of prefixes announced by a given ASN per subnet size and IP version.
   *
   * @param options { PrefixSizeDistributionyOptions }
   */
  prefixSizeDistribution(
    options: data.PrefixSizeDistributionyOptions
  ): Promise<RIPEResponse<data.PrefixSizeDistributionyResponse>> {
    return RIPEClient._performAPIRequest<data.PrefixSizeDistributionyResponse>(
      this.client,
      ENDPOINTS.PREFIX_SIZE_DISTRIBUTION,
      options
    );
  }

  /**
   * Returns the relationships between objects in the RIPE Database.
   *
   * @param options { RegistryBrowserOptions }
   */
  registryBrowser(options: data.RegistryBrowserOptions): Promise<RIPEResponse<data.RegistryBrowserResponse>> {
    return RIPEClient._performAPIRequest<data.RegistryBrowserResponse>(
      this.client,
      ENDPOINTS.REGISTRY_BROWSER,
      options
    );
  }

  /**
   * Returns which RIR(s) allocated/assigned a resource. Depending on the level of detail ("lod" parameter) this can include additional information
   * like registration status or country of registration. The data is based on RIR stats files, see ftp://ftp.ripe.net/pub/stats/.
   *
   * @param options { RIROptions }
   */
  rir(options: data.RIROptions): Promise<RIPEResponse<data.RIRResponse>> {
    return RIPEClient._performAPIRequest<data.RIRResponse>(this.client, ENDPOINTS.RIR, options);
  }

  /**
   * Returns the number of allocations and assignments
   * (below the queried resource) according to registration data provided by Regional Internet Registries.
   *
   * @param options { RIRPrefixSizeDistributionOptions }
   */
  rirPrefixSizeDistribution(
    options: data.RIRPrefixSizeDistributionOptions
  ): Promise<RIPEResponse<data.RIRPrefixSizeDistributionResponse>> {
    return RIPEClient._performAPIRequest<data.RIRPrefixSizeDistributionResponse>(
      this.client,
      ENDPOINTS.RIR_PREFIX_SIZE_DISTRIBUTION,
      options
    );
  }

  /**
   * This data call provides high-level information on ASNs in RIS, including:
   * total number of ASNs
   * listing of all ASNs
   *
   * The data call supports history, with each data point being aligned to times a dump is created in RIS (00:00, 08:00 and 16:00 UTC).
   * By default, the data call returns the total number of ASNs; more details can be obtained using parameters.
   *
   * Note the term "transit" related to this data call means any ASN that is seen in the AS paths,
   * collected by RIS, that is not the origin of a route.
   *
   * @param options { RIRASNSOptions }
   */
  risASNS(options: data.RIRASNSOptions): Promise<RIPEResponse<data.RIRASNSResponse>> {
    return RIPEClient._performAPIRequest<data.RIRASNSResponse>(this.client, ENDPOINTS.RIR_ASNS, options);
  }

  /**
   * This data call provides information on when a prefix or ASN was first and last seen in RIS data.
   *
   * The data generally goes back to 2000. For the recency of the data you can check the parameter "latest_time",
   * which usually is not more than 8 hours behind real-time.
   *
   * The "low_visibility" flag, which can be optionally included, shows if the data point was seen by a low or high number of peers.
   *
   * @param options { RISFirstLastSeenOptions }
   */
  risFirstLastSeen(options: data.RISFirstLastSeenOptions): Promise<RIPEResponse<data.RISFirstLastSeenResponse>> {
    return RIPEClient._performAPIRequest<data.RISFirstLastSeenResponse>(
      this.client,
      ENDPOINTS.RIS_FIRST_LAST_SEEN,
      options
    );
  }

  /**
   * Returns information on prefixes related to an ASN. The data call distinguishes prefixes in the originated and transitted ASN.
   *
   * @param options { RISPrefixesOptions }
   */
  risPrefixes(options: data.RISPrefixesOptions): Promise<RIPEResponse<data.RISPrefixesResponse>> {
    return RIPEClient._performAPIRequest<data.RISPrefixesResponse>(this.client, ENDPOINTS.RIS_PREFIXES, options);
  }

  /**
   * Returns routes for advertisements of a given IP resource, or that are originated from a given ASN, as seen by the RIPE NCC route collectors.
   *
   * @param options { RISPeeringsOptions }
   */
  risPeerings(options: data.RISPeeringsOptions): Promise<RIPEResponse<data.RISPeeringsResponse>> {
    return RIPEClient._performAPIRequest<data.RISPeeringsResponse>(this.client, ENDPOINTS.RIS_PEERINGS, options);
  }

  /**
   * Returns information on the number of peers as seen by the RIS system. The data call supports history and each data point
   * is aligned to the RIS RIB dump times (every 8 hours starting from midnight each day). Additionally the data shows the number
   *  of full-table peers with paramters to change the threshold (per address family).
   *
   * @param options { RISPeerCountOptions }
   */
  risPeerCount(options: data.RISPeerCountOptions): Promise<RIPEResponse<data.RISPeerCountResponse>> {
    return RIPEClient._performAPIRequest<data.RISPeerCountResponse>(this.client, ENDPOINTS.RIS_PEER_COUNT, options);
  }

  /**
   * Returns prefixes that overlap or are adjacent to the specified IP resource.
   *
   * @param options { RelatedPrefixesOptions }
   */
  relatedPrefixes(options: data.RelatedPrefixesOptions): Promise<RIPEResponse<data.RelatedPrefixesResponse>> {
    return RIPEClient._performAPIRequest<data.RelatedPrefixesResponse>(
      this.client,
      ENDPOINTS.RELATED_PREFIXES,
      options
    );
  }

  /**
   * Returns details of reverse DNS delegations for IP prefixes in the RIPE region.
   *
   * @param options { ReverseDNSOptions }
   */
  reverseDNS(options: data.ReverseDNSOptions): Promise<RIPEResponse<data.ReverseDNSResponse>> {
    return RIPEClient._performAPIRequest<data.ReverseDNSResponse>(this.client, ENDPOINTS.REVERSE_DNS, options);
  }

  /**
   * This is just a simple lookup for the reverse DNS info against a single IP address.
   *
   * @param options { ReverseDNSIPOptions }
   */
  reverseDNSIP(options: data.ReverseDNSIPOptions): Promise<RIPEResponse<data.ReverseDNSIPResponse>> {
    return RIPEClient._performAPIRequest<data.ReverseDNSIPResponse>(this.client, ENDPOINTS.REVERSE_DNS_IP, options);
  }

  /**
   * Returns details on the reverse DNS delegations and its consistency with routed and registered IP space.
   * The input can be a single prefix or an ASN, in which case all routed and registered prefixes for this ASN are used as an input.
   *
   * Additionally the result includes the output of a DNS-Check test, see http://dnscheck.ripe.net/?faq=1&test=standard for details.
   *
   * @param options { ReverseDNSConsistencyOptions }
   */
  reverseDNSConsistency(
    options: data.ReverseDNSConsistencyOptions
  ): Promise<RIPEResponse<data.ReverseDNSConsistencyResponse>> {
    return RIPEClient._performAPIRequest<data.ReverseDNSConsistencyResponse>(
      this.client,
      ENDPOINTS.REVERSE_DNS_CONSISTENCY,
      options
    );
  }

  /**
   * Returns the history of announcements for prefixes, including the origin ASN and the first hop.
   *
   * The data comes from the RIS route collectors.
   *
   * @param options { RoutingHistoryOptions }
   */
  routingHistory(options: data.RoutingHistoryOptions): Promise<RIPEResponse<data.RoutingHistoryResponse>> {
    return RIPEClient._performAPIRequest<data.RoutingHistoryResponse>(this.client, ENDPOINTS.ROUTING_HISTORY, options);
  }

  /**
   * Returns a summary of the current BGP routing state of a given IP prefix or ASN, as observed by the RIS route collectors.
   *
   * @param options { RoutingStatusOptions }
   */
  routingStatus(options: data.RoutingStatusOptions): Promise<RIPEResponse<data.RoutingStatusResponse>> {
    return RIPEClient._performAPIRequest<data.RoutingStatusResponse>(this.client, ENDPOINTS.ROUTING_STATUS, options);
  }

  /**
   * Returns example resource that are directly or indirectly related to the given input.
   *
   * @param options { SearchCompleteOptions }
   */
  searchComplete(options: data.SearchCompleteOptions): Promise<RIPEResponse<data.SearchCompleteResponse>> {
    return RIPEClient._performAPIRequest<data.SearchCompleteResponse>(this.client, ENDPOINTS.SEARCHCOMPLETE, options);
  }

  /**
   * Returns information on bandwidth measurements collected on the Speedchecker platform. The data is collected with HTML5 clients
   * e.g. http://us.broadbandspeedchecker.co.uk/ as well as with Speedchecker's mobile applications.
   *
   * @param options { SpeedCheckerBandwidthMeasurementsOptions }
   */
  speedCheckerBandwidthMeasurements(
    options: data.SpeedCheckerBandwidthMeasurementsOptions
  ): Promise<RIPEResponse<data.SpeedCheckerBandwidthMeasurementsResponse>> {
    return RIPEClient._performAPIRequest<data.SpeedCheckerBandwidthMeasurementsResponse>(
      this.client,
      ENDPOINTS.SPEEDCHECKER_BANDWIDTH_MEASUREMENTS,
      options
    );
  }

  /**
   * Returns how often a particular IP resource has been seen by RIPE NCC route collectors.
   *
   * @param options { VisibilityOptions }
   */
  visibility(options: data.VisibilityOptions): Promise<RIPEResponse<data.VisibilityResponse>> {
    return RIPEClient._performAPIRequest<data.VisibilityResponse>(this.client, ENDPOINTS.VISIBILITY, options);
  }

  /**
   * Returns the IP address of the requestor.
   */
  whatsMyIp(): Promise<RIPEResponse<data.WhatsMyIpResponse>> {
    return RIPEClient._performAPIRequest<data.WhatsMyIpResponse>(this.client, ENDPOINTS.WHATS_MY_IP, {});
  }

  /**
   * Returns whois information from the relevant Regional Internet Registry and Routing Registry.
   *
   * @param options { WhoisOptions }
   */
  whois(options: data.WhoisOptions): Promise<RIPEResponse<data.WhoisResponse>> {
    return RIPEClient._performAPIRequest<data.WhoisResponse>(this.client, ENDPOINTS.WHOIS, options);
  }

  /**
   * Returns information of when a certain object was last updated in the whois database.
   *
   * @param options { WhoisObjectLastUpdatedOptions }
   */
  whoisObjectLastUpdated(
    options: data.WhoisObjectLastUpdatedOptions
  ): Promise<RIPEResponse<data.WhoisObjectLastUpdatedResponse>> {
    return RIPEClient._performAPIRequest<data.WhoisObjectLastUpdatedResponse>(
      this.client,
      ENDPOINTS.WHOIS_OBJECT_LAST_UPDATED,
      options
    );
  }
}

export { RIPEClientOptions, RIPEClient };
