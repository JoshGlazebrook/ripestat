/**
 * See: https://stat.ripe.net/docs/data_api#ReverseDNS
 */

import { BaseOptions } from './common/BaseOptions';

export interface ReverseDNSOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   */
  resource: string;
}

export interface ReverseDNSResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  delegations: [
    [
      {
        key: string;
        value: string;
      }
    ]
  ];
}
