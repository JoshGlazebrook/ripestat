/**
 * See: https://stat.ripe.net/docs/data_api#RISPeerings
 */

import { BaseOptions } from './common/BaseOptions';

export interface RISPeeringsOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   */
  resource: string;

  /**
   * The query time to use for the query.
   */
  query_time?: Date | string | number;
}

export interface RISPeeringsResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The starttime used for the query.
   */
  starttime: Date | string;

  /**
   * The endtime used for the query.
   */
  endtime: Date | string;

  /**
    * A list of ASNs grouped by the RIPE NCC Routing Information Service probe they were seen by.
    */
  peerings: [
    {
      /**
      * A list of peers of the route collector probe.
      */
      peers: [
        {
          /**
        * IP address of the peer.
        */
          ip: string;

          /**
        * Number of prefixes of the family specified in table_version, announced in this peering session.
        */
          prefix_count: number;

          /**
        * IP version (4 or 6) of the peering IP.
        */
          ip_version: string;

          /**
        * IP family (4 or 6) of the prefix table being passed by the peer.
        * For ASn queries, if the peer announces both IPv4 and IPv6 tables, two separate entries will be present in this peer list.
        */
          table_version: string;

          /**
        * List of AS-paths (of the table_version family) routes related to the queried prefix/ASn, as passed by the peer.
        */
          routes: [
            {
              as_path: number[];
            }
          ];

          /**
        * Autonomous System Number of the peer.
        */
          asn: number;
        }
      ];

      /**
      * A RIPE NCC Routing Information Service probe.
      */
      probe: {
        /**
        * The city where the probe is located.
        */
        city: string;

        /**
        * The country where the probe is located.
        */
        country: string;

        /**
        * The longitude of where the probe is located.
        */
        longitude: number;

        /**
        * The latitude of where the probe is located.
        */
        latitude: number;

        /**
        * The ID of the probe.
        */
        name: string;

        /**
        * Name of the internet exchange hosting the probe.
        */
        ipx: string;

        /**
        * Number of IPv4 peers with this probe.
        */
        ipv6_peer_count: number;

        /**
        * Number of IPv6 peers with this probe.
        */
        ipv4_peer_count: number;
      };
    }
  ];
}
