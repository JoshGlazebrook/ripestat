/**
 * See: https://stat.ripe.net/docs/data_api#RISPeerCount
 */

import { BaseOptions } from './common/BaseOptions';

export interface RISPeerCountOptions extends BaseOptions {
  /**
   * The starttime to use for the query.
   */
  starttime?: Date | string | number;

  /**
   * The endtime to use for the query.
   */
  endtime?: Date | string | number;

  /**
   * Defines the threshold (ipv4) used to calculate the number of full-table peers.
   */
  v4_full_prefix_threshold?: number;

  /**
   * Defines the threshold (ipv6) used to calculate the number of full-table peers.
   */
  v6_full_prefix_threshold?: number;
}

export interface RISPeerCountResponse {
  /**
   * The starttime used for the query.
   */
  starttime?: Date | string | number;

  /**
   * The endtime used for the query.
   */
  endtime?: Date | string | number;

  /**
   * The threshold (ipv4) used to calculate the number of full-table peers.
   */
  v4_full_prefix_threshold?: number;

  /**
   * The threshold (ipv6) used to calculate the number of full-table peers.
   */
  v6_full_prefix_threshold?: number;

  /**
   * Groups the address families.
   */
  peer_count: {
    /**
     * IPV4 Peer Count Data.
     */
    v4: {
      /**
       * The total number of peers.
       */
      total: [
        {
          /**
           * The number of peers.
           */
          count: number;

          /**
           * Date and time (UTC) when this data point is valid, in ISO8601 format
           */
          timestamp: Date | string;
        }
      ];

      /**
       * The number of peers that are considered full-table peers.
       */
      full_feed: [
        {
          /**
           * The number of peers
           */
          count: number;

          /**
           * Date and time (UTC) when this data point is valid, in ISO8601 format
           */
          timestamp: Date | string;
        }
      ];
    };

    /**
     * IPv6 Peer Count Data.
     */
    v6: {
      /**
       * The total number of peers.
       */
      total: [
        {
          /**
           * The number of peers.
           */
          count: number;

          /**
           * Date and time (UTC) when this data point is valid, in ISO8601 format
           */
          timestamp: Date | string;
        }
      ];

      /**
       * The number of peers that are considered full-table peers.
       */
      full_feed: [
        {
          /**
           * The number of peers
           */
          count: number;

          /**
           * Date and time (UTC) when this data point is valid, in ISO8601 format
           */
          timestamp: Date | string;
        }
      ];
    };
  };
}
