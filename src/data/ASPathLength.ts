/**
 * See: https://stat.ripe.net/docs/data_api#AsPathLength
 */
import { BaseOptions } from './common/BaseOptions';

export interface ASPathLengthOptions extends BaseOptions {
  /**
     * The Autonomous System Number to get information for.
     */
  resource: number;

  /**
     * Sort by the given field.
     * geo: sort by approximating a world map on to a circle.
     */
  sort_by?: 'number' | 'count' | 'location' | 'geo';
}

export interface ASPathLengthResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The starttime the query covers.
     */
  query_starttime?: Date;

  /**
     * The endtime the query covers.
     */
  query_endtime?: Date;

  /**
     * The snapshot time the query covers.
     */
  query_time: Date;

  /**
     * The sorting method used for this query.
     */
  sort_by: string;

  /**
     * List of RIS peers that have seen routes to the given AS.
     */
  stats: [
    {
      /**
             * The number of data points collected.
             */
      count: number;
      /**
             * Description of the RIS peer.
             */
      location: string;
      /**
             * Unique RIS peer id.
             */
      number: 0;
      /**
             * Stats that exclude AS path prepending.
             */
      stripped: {
        /**
                 * Mean number of path entries, excluding the RIS peer itself.
                 */
        avg: number;
        /**
                 * Maximum number of path entried, excluding the RIS peer.
                 */
        max: number;
        /**
                 * Minimum number of path entries, excluding the peer.
                 */
        min: number;
        /**
                 * Total number of path entries across all data points.
                 */
        sum: number;
      };

      /**
             * Stats that include AS path prepending.
             */
      unstripped: {
        /**
                 * Mean number of path entries, excluding the RIS peer itself.
                 */
        avg: number;
        /**
                 * Maximum number of path entried, excluding the RIS peer.
                 */
        max: number;
        /**
                 * Minimum number of path entries, excluding the peer.
                 */
        min: number;
        /**
                 * Total number of path entries across all data points.
                 */
        sum: number;
      };
    }
  ];
}
