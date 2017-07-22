/**
 * See: https://stat.ripe.net/docs/data_api#AsnNeighbours
 */
import { BaseOptions } from './common/BaseOptions';

export interface ASNNeighborsOptions extends BaseOptions {
  /**
   * The Autonomous System Number to get information for.
   */
  resource: number;

  /**
     * The start time for the query (default: latest available)
     */
  starttime?: Date | number | string;
}

export interface ASNNeighborsResponse {
  /**
   * The AS the query is based on.
   */
  resource: string;

  /**
   * The start of the time the query covers.
   */
  query_starttime: Date;
  /**
     * The end time the query covers.
     */
  query_endtime: Date;

  /**
     * The earliest time there is data available for.
     */
  earliest_time: Date;

  /**
     * The most recent time there is data available for.
     */
  latest_time: Date;

  /**
     * Total counts for the neighbors.
     */
  neighbor_counts: {
    /**
         * Total left neighbors.
         */
    left: number;

    /**
         * Total right neighbors.
         */
    right: number;

    /**
         * These are neighbors that are seen as left, but only as direct peers to one of RIPE's route collectors.
         * ASNs that have been seen as left neighbor and not as direct peer are not flagged as uncertain.
         */
    uncertain: number;

    /**
         * Total unique neighbors.
         */
    unique: number;
  };

  /**
     * The neighbors seen as this point in time.
     */
  neighbors: [
    {
      /**
         * The neighboring ASN.
         */
      asn: number;

      /**
         * The number of AS paths (path count) containing this combination of ASN neighbors with the stated
         * type (left/right).
         */
      power: number;

      /**
         * Shows information about the neighbour's position ("left" or "right").
         * The type "uncertain" is explained in the "neighbour_counts" section.
         */
      type: string;

      /**
         * Accumulated number of routes (prefixes) seen by peers.
         * If all peers see the same route (prefix + AS path) then this number is equal to peers * routes.
         * It is an indicator of how widely used this AS path combination is.
         */
      v4_peers: number;

      /**
         * Accumulated number of routes (prefixes) seen by peers.
         * If all peers see the same route (prefix + AS path) then this number is equal to peers * routes.
         * It is an indicator of how widely used this AS path combination is.
         */
      v6_peers: number;
    }
  ];
}
