/**
 * See: https://stat.ripe.net/docs/data_api#BGPState
 */

import { BaseOptions } from './common/BaseOptions';

export interface BGPStateOptions extends BaseOptions {
  /**
     * Prefix, IP address, AS or a list of valid comma-separated resources
     *
     * If a list of resources is supplied, the results will be combined for all of them.
     */
  resource: string;

  /**
     * The time for when to perform the query.
     */
  timestamp?: Date | number | string;

  /**
     * The list of Route Collectors (RRCs) to get the results from.
     *
     * Single-value or comma-separated values of RRC numbers (4 or 0,4,12,15)
     */
  rrcs?: string;

  /**
     * If true, will format the timestamps in the result as Unix timestamp (default: false).
     */
  unix_timestamps?: boolean;
}

export interface BGPStateResponse {
  /**
     * The resource used for this query.
     */
  resource: string | string[];

  /**
     * The number of BGP routes observed at that time.
     */
  nr_routes: number;

  /**
     * The time used for this query.
     */
  query_time: Date;

  /**
     * List of BGP routes.
     */
  bgp_state: [
    {
      /**
         * Prefix to which this BGP route refers to.
         */
      target_prefix: string;
      /**
         * The AS path in this BGP route, formatted as a list of ASes (first element is the direct BGP neighbour, last element is the origin AS).
         */
      path: number[];
      /**
         * The list of communities in this BGP route.
         */
      community: string[];
      /**
         * The id of the route collector (rrc) neighbouring peer through which this BGP route was observed.
         * The format is "[rrc number]-[peer IP address]".
         */
      source_id: string;
    }
  ];
}
