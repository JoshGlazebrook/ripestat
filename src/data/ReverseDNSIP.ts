/**
 * See: https://stat.ripe.net/docs/data_api#ReverseDNSIP
 */

import { BaseOptions } from './common/BaseOptions';

export interface ReverseDNSIPOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   */
  resource: string;
}

export interface ReverseDNSIPResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * The reverse dns result.
   */
  result: string;

  /**
   * If not empty explains an error that occurred (e.g. "Domain does not exists (NXDOMAIN)", "Timeout"...)
   */
  error: string;
}
