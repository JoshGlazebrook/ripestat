/**
 * See: https://stat.ripe.net/docs/data_api#CountryResourceStats
 */

import { BaseOptions } from './common/BaseOptions';

export interface CountryResourceStatsOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * 2-digit ISO-3166 country code (e.g. "at","de"...)
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
     * String representation for the resolution
     *
     * Possible values:
     * "5m" - 5 minutes
     * "1h" - 1 hour
     * "1d" - 1 day
     * "1w" - 1 week
     */
  resolution?: string;
}

export interface CountryResourceStatsResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The starttime the query covers.
     */
  query_starttime: Date | string;

  /**
     * The endtime the query covers.
     */
  query_endtime: Date | string;

  /**
     * The latest time available to query.
     */
  latest_time: Date | string;

  /**
     * The earliest time available to query.
     */
  earliest_time: Date | string;

  /**
     * The latest (most recent) time data is available for at the highest resolution (high definition)
     */
  hd_latest_time: Date | string;

  /**
     * The statistics valid for the times seen in the "timeline" field.
     */
  stats: [
    {
      /**
             * The number of ASNs seen in routing data
             */
      asn_rirs: number;

      /**
             * The number of ASNs seen in registration data
             */
      asns_stats: number;
      timeline: [
        {
          /**
                 * Start time of this validity period
                 */
          starttime: Date | string;
          /**
                 * End time of this validity period.
                 */
          endtime: Date | string;
        }
      ];
      /**
             * The timestamp of the RIR stat file that is used for the registration dat
             */
      stats_date: Date | string;
      /**
             * The number of v4 prefixes seen in registration data
             */
      v4_prefixes_stats: number;
      /**
             * The number of v4 prefixes seen in routing data
             */
      v4_prefixes_ris: number;
      /**
             * The number of v6 prefixes seen in registration data
             */
      v6_prefixes_stats: number;
      /**
             * The number of v6 prefixes seen in routing data
             */
      v6_prefixes_ris: number;
    }
  ];
}
