/**
 * See: https://stat.ripe.net/docs/data_api#RoutingStatus
 */

import { BaseOptions } from './common/BaseOptions';

export interface RoutingStatusOptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * This is a prefix (v4/v6), IP address or AS number
   */
  resource: string;

  /**
   * The timestamp to use for the query.
   */
  timestamp?: Date | string | number;

  /**
   * Minimum number of peers seeing the route for it to be included in the results. Excludes low-visibility/localized announcements.
   *
   * (default: 3)
   */
  min_peers_seeing?: number;
}

export interface RoutingStatusResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * The BGP visibility of the resource, in terms of RIS peers seeing the resource versus total peers, separated over IPv4 and IPv6.
   */
  visibility: {
    /**
     * IPV4 Visbility Data.
     */
    v4: {
      /**
       * The number of full-table (of that IP family) RIS peers currently seeing the resource.
       */
      total_ris_peers: number;
      /**
       * The total number of full-table (of that IP family) RIS peers, at that point in time.
       */
      ris_peers_seeing: number;
    };

    /**
     * IPV6 Visbility Data.
     */
    v6: {
      /**
       * The number of full-table (of that IP family) RIS peers currently seeing the resource.
       */
      total_ris_peers: number;
      /**
       * The total number of full-table (of that IP family) RIS peers, at that point in time.
       */
      ris_peers_seeing: number;
    };
  };

  /**
   * Indicates the amount of address space currently announced by that AS number.
   */
  announced_space: {
    /**
     * IPV4 Address Space Data.
     */
    v4: {
      /**
       * The number of IPv4 prefixes announced by the ASn.
       */
      prefixes: number;
      /**
       * 	The total amount of IPv4 address space announced by the ASn by combining all the prefixes in terms of unique IP addresses.
       */
      ips: number;
    };

    /**
     * IPV6 Address Space Data.
     */
    v6: {
      /**
       * The number of IPv6 prefixes announced by the ASn.
       */
      prefixes: number;
      /**
       * 	The total amount of IPv6 address space announced by the ASn by combining all the prefixes in terms of unique IP addresses.
       */
      ips: number;
    };
  };

  /**
   * The amount of unique ASes which are observed to be BGP neighbours of the queried AS at this point in time.
   * Note that the AS might have more neighbours than is specified here, but they are not observed by the RIS collectors.
   */
  observed_neighbors: number;

  /**
   * The list of origin ASes which currently announce this exact match prefix.
   */
  origins: [
    {
      /**
     * The origin AS.
     */
      origin: number;
      /**
     * A list of routing registry sources where there is a route object exactly matching this prefix and origin AS.
     */
      route_objects: string[];
    }
  ];

  /**
   * The list of less specific prefixes related to the queries prefix currently announced in BGP. Each list is limited to a maximum of 50 items.
   */
  less_specifics: [
    {
      prefix: string;
      origin: number;
    }
  ];

  /**
   * The list of more specific prefixes related to the queries prefix currently announced in BGP. Each list is limited to a maximum of 50 items.
   */
  more_specifics: [
    {
      prefix: string;
      origin: number;
    }
  ];

  /**
   * Information on when and how the resource was first seen in BGP.
   */
  first_seen: {
    /**
     * The origin AS in the route when the resource was first seen.
     */
    origin: string;
    /**
     * The prefix in the route when the resource was first seen.
     */
    prefix: string;
    /**
     * The time when the resource was first seen.
     */
    time: Date | string;
  };

  /**
   * Information on when and how the resource was first seen in BGP.
   */
  last_Seen: {
    /**
     * The origin AS in the route when the resource was last seen.
     */
    origin: string;
    /**
     * The prefix in the route when the resource was last seen.
     */
    prefix: string;
    /**
     * The time when the resource was last seen.
     */
    time: Date | string;
  };
}
