/**
 * See: https://stat.ripe.net/docs/data_api#PrefixRoutingConsistency
 */

import { BaseOptions } from './common/BaseOptions';

export interface PrefixRoutingConsistencyOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * Prefix.
     */
  resource: string;
}

export interface PrefixRoutingConsistencyResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The snapshot time used for the query.
     */
  query_starttime: Date | string;

  /**
     * The snapshot time used for the query.
     */
  query_endtime: Date | string;

  routes: [
    {
      /**
        * True" if the route has been seen by RIS, "False" otherwise
        */
      in_bgp: boolean;

      /**
         * 	"True" if the route exists in whois, "False" otherwise
         */
      in_whois: boolean;

      /**
         * The AS number (integer) of the route
         */
      origin: number;

      /**
         * The name of this AS's holder
         */
      asn_name: string;

      /**
         *The prefix (CIDR string) of the route (more or less specific to the input resource)
         */
      prefix: string;

      /**
         * IRR source this route was found in e.g. "RADB", "RIPE", "LEVEL3"...
         */
      irr_sources: string[];
    }
  ];
}
