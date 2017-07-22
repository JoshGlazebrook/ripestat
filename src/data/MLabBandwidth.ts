/**
 * See: https://stat.ripe.net/docs/data_api#MlabBandwidth
 */

import { BaseOptions } from './common/BaseOptions';

export interface MLabBandwidthOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * IPv4 Prefix, IPv4 address or 2-digit ISO-3166 country code (e.g. "at","de"...)
     */
  resource: string;

  /**
     * The starttime to use for the query.
     *
     * (default: endtime - 7d)
     */
  starttime?: Date | string | number;

  /**
     * The endtime to use for the query.
     *
     * (default: latest time there is M-Lab data available)
     */
  endtime?: Date | string | number;
}

export interface MLabBandwidthResponse {
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
     * List of observed bandwidths in Mbps units. One value per host.
     */
  bandwidths: number[];
}
