/**
 * See: https://stat.ripe.net/docs/data_api#RIRPrefixSizeDistribution
 */

import { BaseOptions } from './common/BaseOptions';

export interface RIRPrefixSizeDistributionOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   */
  resource: string;

  /**
   * The time to use for the query.
   */
  query_time?: Date | string | number;
}

export interface RIRPrefixSizeDistributionResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The time used for the query.
   */
  query_time: Date | string;

  /**
   * A list of prefix size distributions grouped by RIR.
   */
  rirs: [
    {
      /**
       * A list of distributions grouped by prefix size.
       */
      distribution: [
        {
          /**
           * The number of prefixes of this size.
           */
          count: number;

          /**
           * The prefix size in bits.
           */
          prefix_size: number;
        }
      ];

      /**
       * AFRINIC, APNIC, ARIN, LACNIC or RIPE NCC
       */
      rir: string;
    }
  ];
}
