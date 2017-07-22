/**
 * See: https://stat.ripe.net/docs/data_api#BGPUpdateActivity
 *
 * Note: The docs for this call seem to be out of date.
 */

import { BaseOptions } from './common/BaseOptions';

export interface BGPUpdateActivityOptions extends BaseOptions {
  /**
     * The resource to use for the query (prefix, IP range, or AS)
     */
  resource: string;

  /**
     * The starttime for the query.
     */
  starttime?: Date | string | number;

  /**
     * The endtime for the query (default: now)
     */
  endtime?: Date | string | number;

  /**
     * BGP events are aggregated in to at most this number of sampling periods (default: 50)
     */
  max_samples?: number;

  /**
     * The smallest possible time period for each data point. It will be automatically increased to satisfy 'max_points' (default: 1 minute)
     */
  min_sampling_period?: number;

  /**
     * If 'starttime' is not given then this parameter will be used to calculate it from the 'endtime' (which defaults to now).
     */
  num_hours?: number;

  /**
     * If true (default) then samples with 0 updates will not be returned - they are simply implied by the returned query_startendtime/query_endtime.
     */
  hide_empty_samples?: boolean;
}

export interface BGPUpdateActivityResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The type of resource used for the query.
     */
  resource_type: number;

  /**
     * The starttime the query covers.
     */
  query_starttime: Date | string;

  /**
     * The endtime the query covers.
     */
  query_endttime: Date | string;

  /**
     * The duration in seconds of each stated sampling period
     */
  sampling_period: number;

  /**
     * 	A human-readable version of the sampling period.
     */
  sampling_period_human: string;

  related_prefixes: any;

  /**
     * Holds the list of BGP update activities
     */
  updates: [
    {
      /**
             * The number of announcements during this sample
             */
      announcements: number;
      /**
             * 	This defines the beginning of each sample
             */
      starttime: Date | string;

      /**
             * 	The number of withdrawals during this sample
             *  Note: this is currently always 'null' when querying an ASN
             */
      withdrawals: number;
    }
  ];
}
