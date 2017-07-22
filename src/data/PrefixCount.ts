/**
 * See: https://stat.ripe.net/docs/data_api#PrefixCount
 */

import { BaseOptions } from './common/BaseOptions';

export interface PrefixCountOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * ASN.
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
     * Minimum number of RIS peers seeing the prefix for it to be included in the results. Excludes low-visibility/localized announcements.
     * (default: 3)
     */
  min_peers_seeing?: number;

  /**
     * Defines the resolution/aggregation for the returned data.
     * e.g. "2d" means that changes in the data must persist for longer than 2 days to be visible at this resolution.
     *
     * Examples: "8h" (8 hours),"2d" (2 days) or "12d" (12 days)
     */
  resolution?: string;
}

export interface PrefixCountResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The starttime used for the query.
     */
  query_starttime: Date | string | number;

  /**
     * The endtime used for the query.
     */
  query_endtime: Date | string | number;

  /**
     * The resolution used for the query.
     */
  resolution: string;

  /**
     * A series of incremental changes per timestamp on the IPv4 prefixes announced by the AS.
     */
  ipv4: [
    {
      /**
         * Amount of address space, in terms of /24 (for IPv4) or /48 (for IPv6) subnets, anounced by the AS at that point in time
         */
      'address-space': number;
      /**
         * Number of prefixes announced by the AS at that point in time
         */
      prefixes: number;

      /**
         * Time of the data point
         */
      timestamp: Date | string;
    }
  ];

  /**
     * A series of incremental changes per timestamp on the IPv6 prefixes announced by the AS.
     */
  ipv6: [
    {
      /**
         * Amount of address space, in terms of /24 (for IPv4) or /48 (for IPv6) subnets, anounced by the AS at that point in time
         */
      'address-space': number;
      /**
         * Number of prefixes announced by the AS at that point in time
         */
      prefixes: number;

      /**
         * Time of the data point
         */
      timestamp: Date | string;
    }
  ];
}
