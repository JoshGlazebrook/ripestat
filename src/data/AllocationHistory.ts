/**
 * See: https://stat.ripe.net/docs/data_api#AllocationHistory
 */
import { BaseOptions } from './common/BaseOptions';

export interface AllocationHistoryOptions extends BaseOptions {
  /**
     * The resource to lookup (prefix, ip range, or ASN)/
     */
  resource: string;

  /**
     * The starttime for the query.
     */
  starttime: Date | number | string;

  /**
     * The endtime for the query (defaults to now).
     */
  endtime?: Date | number | string;
}

export interface AllocationHistoryResponse {
  /**
     * The endtime the query covers.
     */
  query_endtime: Date;

  /**
     * The starttime the query covers.
     */
  query_starttime: Date;

  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * Contains information on allocations and direct assignments grouped by RIR or IANA.
     */
  results: {
    [index: string]: [
      {
        /**
                 * The status according to the RIRstats.
                 */
        status: string;
        /**
                 * The timelines when this entry was valid.
                 */
        timelines: [
          {
            endtime: Date;
            starttime: Date;
          }
        ];
        /**
                 * The resource this entry is about.
                 */
        resource: string;
      }
    ];
  };
}
