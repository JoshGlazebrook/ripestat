/**
 * See: https://stat.ripe.net/docs/data_api#AsnNeighboursHistory
 */

export interface ASNNeighborsHistoryOptions {
  /**
     * The Autonomous System Number for which to return prefixes.
     */
  resource: number;

  /**
     * The start time the query covers (default now)
     */
  starttime?: Date | number | string;

  /**
     * The end time the query covers (default now - 60 days)
     */
  endtime?: Date | number | string;

  /**
     * The number of results to return. (default: to 1800)
     */
  max_rows?: number;
}

export interface ASNNeighborsHistoryResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The start of the time the query covers.
     */
  query_starttime: Date;

  /**
     * The end of the time the query covers.
     */
  query_endtime: Date;

  /**
     * The latest time there is data available for.
     */
  lastest_time: Date;

  /**
     * The earliest time ther eis data avaialble for.
     */
  earliest_time: Date;

  /**
     * The ASN neighbors.
     */
  neighbors: [
    {
      /**
             * The neighboring ASN.
             */
      neighbor: number;

      /**
             * Times when this AS was seen as a neighbor.
             */
      timelines: [
        {
          starttime: Date;
          endtime: Date;
        }
      ];
    }
  ];
}
