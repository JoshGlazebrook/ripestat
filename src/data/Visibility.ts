/**
 * See: https://stat.ripe.net/docs/data_api#Visibility
 */

import { BaseOptions } from './common/BaseOptions';

export interface VisibilityOptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * (Prefix or ip range)
   */
  resource: string;

  /**
   * The starttime to use for the query.
   */
  starttime?: Date | string | number;

  /**
   * The endtime to use for the query.
   */
  endtime?: Date | string | number;

  /**
   * This parameter defines additional data to be included.
   * "peers_seeing" includes details on peers that are seeing a resource as only the peers that are not seeing a resource.
   * By default it is not set because the output become significantly bigger.
   */
  include?: 'peers_seeing';
}

export interface VisibilityResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * The latest time available for querying.
   */
  latest_time: Date | string;

  /**
   * Additional params used for the query to include additional data.
   */
  include: string[];

  /**
   * A list of RIPE NCC Routing Information Service probes with visibility information.
   */
  visibilities: [
    {
      /**
     * Number of full-table peers for IPv4.
     */
      ipv4_full_table_peer_count: number;

      /**
     * Lists of peers that don't see the queried resource with the option to see also peers that are seeing the queried resoure.
     */
      ipv4_full_table_peers_not_seeing: [
        {
          /**
       * Autonomous System Number of the peer.
       */
          asn: number;

          /**
       * IP address of the peer.
       */
          ip: string;

          /**
       * The number of prefixes of this IP family passed in the peer full table.
       */
          prefix_count: number;
        }
      ];

      /**
     * Number of full-table peers for IPv6.
     */
      ipv6_full_table_peer_count: number;

      /**
     * Lists of peers that don't see the queried resource with the option to see also peers that are seeing the queried resoure.
     */
      ipv6_full_table_peers_not_seeing: [
        {
          /**
       * Autonomous System Number of the peer.
       */
          asn: number;

          /**
       * IP address of the peer.
       */
          ip: string;

          /**
       * The number of prefixes of this IP family passed in the peer full table.
       */
          prefix_count: number;
        }
      ];

      /**
     * Details about the probe.
     */
      probe: {
        /**
       * The city where the probe is located.
       */
        city: string;

        /**
       * The registered country where the probe is located.
       */
        country: string;

        /**
       * The longitude of where the probe is located.
       */
        longitude: number;

        /**
       * the latitude of where the probe is located.
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
        ipv4_peer_count: number;

        /**
       * Number of IPv6 peers with this probe.
       */
        ipv6_peer_count: number;
      };
    }
  ];

  related_prefixes: string[];
}
