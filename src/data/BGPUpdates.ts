/**
 * See: https://stat.ripe.net/docs/data_api#BGPUpdates
 */

import { BaseOptions } from './common/BaseOptions';

export interface BGPUpdatesOptions extends BaseOptions {
  /**
     * Prefix, IP address, AS or a list of valid comma-separated resources
     *
     * If a list of resources is supplied, the results will be combined for all of them.
     */
  resource: string;

  /**
     * The starttime for the query.
     */
  starttime?: Date | number | string;

  /**
     * The endtime for the query.
     */
  endtime?: Date | number | string;

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

export interface BGPUpdatesResponse {
  /**
     * The resource(s) used for the query.
     */
  resource: string | string[];

  /**
     * The start time for the query.
     */
  query_starttime: Date | string | number;

  /**
     * The end time for the query.
     */
  query_endtime: Date | string | number;

  /**
     * 	List of observed BGP updates, in chronological order of occurrence.
     */
  updates: [
    {
      /**
         * Time (UTC) of the BGP update.
         */
      timestamp: Date | string | number;
      /**
         * Type of BGP update: "A"=Announcement, "W"=Withdrawal.
         */
      type: string;
      /**
         * Attributes of the BGP update (some fields depend on the update type).
         */
      attrs: {
        /**
             * The id of the route collector (rrc) neighbouring peer through which this BGP update was observed.
             * The format is "[rrc number]-[peer IP address]".
             */
        source_id: string;
        /**
             * The AS path in this BGP announcement, formatted as a list of ASes (first element is the direct BGP neighbour,
             * last element is the origin AS).
             */
        path: number[];
        /**
             * The list of communities in this BGP announcement.
             */
        community: string[];
        /**
             * Prefix to which this BGP update refers to.
             */
        target_prefix: string;
      };
    }
  ];
}
