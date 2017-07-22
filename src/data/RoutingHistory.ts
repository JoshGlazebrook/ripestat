/**
 * See: https://stat.ripe.net/docs/data_api#RoutingHistory
 */

import { BaseOptions } from './common/BaseOptions';

export interface RoutingHistoryOptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * Prefix or ASN
   */
  resource: string;

  /**
   * The maximum number of routes to return. This is a soft limit: all recorded routes for each origin ASN are returned,
   * but when the row limit is reached no more origins will be returned.
   */
  max_rows?: number;

  /**
   * Include the first hop ASN in the route, instead of just the origin ASN.
   */
  include_first_hop?: boolean;

  /**
   * Add a visibility field to each timeline indicating the visibility of the route (according to RIS) at that point in time.
   * The visibility is computed as the peers_seeing divided by the number of RIS full table peers at the time.
   */
  normalise_visbility?: boolean;

  /**
   * Minimum number of full-feed RIS peers seeing the route for the segment to be included in the results.
   * Excludes low-visibility/localized announcements.
   *
   * (default: 3)
   */
  min_peers?: number;

  /**
   * The starttime to use for the query.
   */
  starttime?: Date | string | number;

  /**
   * The endtime to use for the query.
   */
  endtime?: Date | string | number;
}

export interface RoutingHistoryResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The starttime used for the query.
   */
  query_starttime: Date | string;

  /**
   * The endtime used for the query.
   */
  query_endtime: Date | string;

  /**
   * A list containing routes grouped by origin.
   */
  by_origin: [
    {
      /**
     * The ASN (or AS pair including first hop) of the announcing prefix.
     */
      origin: string;

      /**
     * A list of prefixes and timelines.
     */
      prefixes: [
        {
          /**
       * Time periods during which this origin announced this prefix.
       */
          timelines: [
            {
              /**
         * The end time of the period.
         */
              endtime: Date | string;
              /**
         * 	The number of RIS full-feed peers that saw this route.
         */
              full_peers_seeing: number;
              /**
         * The start time of the period.
         */
              starttime: Date | string;

              /**
         * Visibility of the route according to RIS.
         */
              visibility: string;
            }
          ];

          /**
       * The IPv4 or IPv6 prefix in standard notation.
       */
          prefix: string;
        }
      ];
    }
  ];
}
