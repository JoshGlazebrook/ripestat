/**
 * See: https://stat.ripe.net/docs/data_api#PrefixSizeDistribution
 */

import { BaseOptions } from './common/BaseOptions';

export interface PrefixSizeDistributionyOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * Prefix.
     */
  resource: string;

  /**
   * The timestamp to use for the query.
   *
   * default (now - 2 days)
   */
  timestamp?: Date | string | number;

  /**
   * Minimum number of RIS peers seeing the prefix for it to be included in the results. Excludes low-visibility/localized announcements.
   *
   * (default: 3)
   */
  min_peers_seeing?: number;
}

export interface PrefixSizeDistributionyResponse {
  /**
  * The resource used for the query.
  */
  resource: string;

  /**
  * The query time used for the query.
  */
  query_time: Date | string;

  ipv4: [
    {
      count: number;
      size: number;
    }
  ];

  ipv6: [
    {
      count: number;
      size: number;
    }
  ];
}
