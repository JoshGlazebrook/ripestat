/**
 * See: https://stat.ripe.net/docs/data_api#BGPlay
 */

export interface BGPlayOptions {
  /**
     * The resource to use for the query (Prefix, IP address, AS or a list of valid comma-separated resources).
     *
     * If a list of resources is supplied, the results will be combined for all of them.
     */
  resource: string;

  /**
     * The start time for the query (default: endtime - 8 hours)
     */
  starttime?: Date | number | string;

  /**
     * The end time for the query (default: latest time there is BGP data available.)
     */
  endtime?: Date | number | string;

  /**
     * The list of Route Collectors (RRCs) to get the results from.
     * Single-value or comma-separated values of RRC numbers (4 or 0,4,12,15)
     */
  rrcs?: string;

  /**
     * If true, timestamps will be displayed as unix timestamps (default: false).
     */
  unix_timestamps?: boolean;
}

export interface BGPlayResponse {
  /**
     * The resource used for the query.
     */
  resource: string | string[];

  /**
     * Descriptive information of all the RIS collectors neighbouring peers through which the BGP routes/updates were observed.
     */
  sources: [
    {
      /**
             * AS number of this RIS neighbour.
             */
      as_number: string;
      /**
             * The number of the RIS route collector with which this source is peering.
             */
      rrc: string;
      /**
             * Id of the source peer, as referred to in the BGP entries found in the "initial_state" and "events" sections.
             */
      id: string;
      /**
             * Peering IP address of this RIS neighbour.
             */
      ip: string;
    }
  ];

  /**
     * List of all the unique target prefixes present in the results.
     */
  targets: [
    {
      prefix: string;
    }
  ];

  /**
     * The start time the query covered.
     */
  query_starttime: Date | number;

  /**
     * The end time the query covered.
     */
  query_endtime: Date | number;

  nodes: [
    {
      owner: string;
      as_number: number;
    }
  ];

  /**
     * The state of the BGP routes for this resource at the starttime.
     * Formatted as defined in the "bgp_state" section of bgp-state.
     * See: https://stat.ripe.net/docs/data_api#BGPState
     */
  initial_state: [
    {
      /**
             * The id of the route collector (rrc) neighbouring peer through which this BGP route was observed.
             * The format is "[rrc number]-[peer IP address]".
             */
      source_id: string;

      /**
             * The AS path in this BGP route, formatted as a list of ASes (first element is the direct BGP neighbour, last element is the origin AS).
             */
      path: number[];

      /**
             * The list of communities in this BGP route.
             */
      community: string[];

      /**
             * Prefix to which this BGP route refers to.
             */
      target_prefix: string;
    }
  ];

  /**
     * The BGP updates observed for this resource during the query time interval.
     * Formatted as defined in the "updates" section of bgp-updates.
     * See: https://stat.ripe.net/docs/data_api#BGPUpdates
     */
  events: [
    {
      timestamp: Date | number;
      /**
             * Type of BGP update: "A"=Announcement, "W"=Withdrawal.
             */
      type: string;
      /**
             * Attributes of the BGP update (some fields depend on the update type).
             */
      attrs: {
        /**
                 * 	The id of the route collector (rrc) neighbouring peer through which this BGP update was observed.
                 * he format is "[rrc number]-[peer IP address]".
                 */
        source_id: string;
        /**
                 * Prefix to which this BGP update refers to.
                 */
        target_prefix: string;

        /**
                 * The AS path in this BGP announcement, formatted as a list of ASes (first element is the direct BGP neighbour,
                 * last element is the origin AS).
                 */
        path?: number[];

        /**
                 * The list of communities in this BGP announcement.
                 */
        community: string[];
      };
    }
  ];
}
