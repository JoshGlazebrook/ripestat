/**
 * See: https://stat.ripe.net/docs/data_api#RISFirstLastSeen
 */

import { BaseOptions } from './common/BaseOptions';

export interface RISFirstLastSeenOptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * IP Prefix/ASN
   */
  resource: string;

  /**
   * This parameter defines additional data to be included.
   * "more_specific" includes more specific IP ranges, which only works for prefix lookups.
   * By default "more_specific" is not set as it makes the lookup slower.
   * "low_visibility_flag" includes the flag to indicate low visibility. By default it is not included.
   */
  include?: 'more_specific' | 'low_visibility_flag';
}

export interface RISFirstLastSeenResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The latest time available for querying.
   */
  latest_time: Date | string;

  /**
   * The include paramter used in the query.
   */
  include: string[];

  stats: {
    count: number;
  };

  resources: [
    {
      resource: string;
      type?: string;

      last: {
        time: Date | string;
        low_visibility: boolean;
      };

      first: {
        time: Date | string;
        low_visibility: boolean;
      };
    }
  ];
}
