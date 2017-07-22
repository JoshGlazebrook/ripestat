/**
 * See: https://stat.ripe.net/docs/data_api#NetworkInfo
 */

import { BaseOptions } from './common/BaseOptions';

export interface NetworkInfoOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * IP Address.
     */
  resource: string;
}

export interface NetworkInfoResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * ASNs the prefix is announced from.
     */
  asns: number[];

  /**
     * The prefix the requested ip address is in.
     */
  prefix: string;
}
