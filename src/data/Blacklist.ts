import { BaseOptions } from './common/BaseOptions';

export interface BlacklistOptions extends BaseOptions {
  /**
     * The resource to use for the query (prefix or ip range).
     */
  resource: string;

  /**
     * The starttime for the query.
     */
  starttime?: Date | string | number;

  /**
     * The endtime for the query.
     */
  endtime?: Date | string | number;
}

export interface BlacklistResponse {
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
     * Each different data source gets one entry, containing blacklist information for this source.
     */
  sources: {
    [index: string]: {
      /**
             * Holds time information for the periods the entry appeared in the blacklist data source.
             */
      timelines: [
        {
          /**
                 * The starttime the query covers.
                 */
          starttime: Date | string;

          /**
                 * The endtime the query covers.
                 */
          endttime: Date | string;
        }
      ];
      /**
             * Holds the prefix of the entry in the blacklist data source.
             */
      prefix: string;

      /**
             * If available this holds additional informations about the entry.
             */
      details: string;
    };
  };
}
