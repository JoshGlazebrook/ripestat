/**
 * See: https://stat.ripe.net/docs/data_api#AnnouncedPrefixes
 */
import { BaseOptions } from './common/BaseOptions';

export interface AnnouncedPrefixesOptions extends BaseOptions {
  /**
   * The Autonomous System Number for which to return prefixes.
   */
  resource: number;

  /**
   * The start time for the query (default: 2 weeks ago?)
   */
  starttime?: Date | number | string;

  /**
   * The end time for the query (default: now).
   */
  endtime?: Date | number | string;

  /**
   * Minimum number of RIS peers seeing the prefix for it to be included in the results.
   * Excludes low-visibility/localized announcements (default: 3).
   */
  min_peers_seeing?: number;
}

export interface AnnouncedPrefixesResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * A list of all announced prefixes and the timelines when they were visible.
   */
  prefixes: [
    {
      /**
       * The announced prefix.
       */
      prefix: string;
      /**
       * All the timelines when the prefix was announced.
       */
      timelines: [
        {
          starttime: Date;
          endtime: Date;
        }
      ];
    }
  ];

  /**
   * The start of the time the query covers.
   */
  query_starttime: Date;

  /**
   * The end of the time the query covers.
   */
  query_endtime: Date;

  /**
   * The earliest time data is available for.
   */
  earliest_time: Date;

  /**
   * The latest time data is availabe for.
   */
  lastest_time: Date;
}
