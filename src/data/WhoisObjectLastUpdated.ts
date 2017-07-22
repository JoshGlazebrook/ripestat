/**
 * See: https://stat.ripe.net/docs/data_api#whois-object-last-updated
 */

import { BaseOptions } from './common/BaseOptions';

export interface WhoisObjectLastUpdatedOptions extends BaseOptions {
  /**
   * The exact object to use for the query.
   */
  object: string;

  /**
   * The object type.
   *
   * Examples: aut-num, inetnum, person, etc
   */
  type: string;

  /**
   * Database source
   *
   * RIPE or APNIC
   */
  source: 'RIPE' | 'APNIC';

  /**
   * The time to use for the query.
   */
  timestamp?: Date | string | number;

  /**
   * When True (default), the version at the last changed time will be compared with the current live object and indicate if it's different.
   * This will indicate whether there has been at least one modification between "query_time" and "now"
   */
  compare_with_live?: boolean;
}

export interface WhoisObjectLastUpdatedResponse {
  /**
   * The object name used for the query.
   */
  object: string;

  /**
   * The time used for the query.
   */
  query_time: Date | string;

  /**
   * The time the object was last updated (before the query_time) in the specified Whois database.
   */
  last_updated: Date | string;

  /**
   * indicates whether the object at "query_time" is identical to the current live object.
   * nly applicable for RIPE DB objects. Possible values: "yes", "no" or null.
   * null indicates there has been no comparison with the live object and it is therefore unknown.
   * This can be because the mechanism is switched off ("compare_with_live" query option), or it's an object outside the RIPE database.
   */
  same_as_live: 'yes' | 'no' | null;
}
