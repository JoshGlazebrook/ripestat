/**
 * See: https://stat.ripe.net/docs/data_api#AsRoutingConsistency
 */
import { BaseOptions } from './common/BaseOptions';

export interface ASRoutingConsistencyOptions extends BaseOptions {
  /**
   * The Autonomous System Number to get information for.
   */
  resource: number;
}

export interface ASRoutingConsistencyResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  exports: [
    {
      /**
             * True if the route exists in IRR or whois, false otherwise.
             * For prefixes it is meant to be a Internet Routing Registry,
             * for peers it is meant to be the whois registration of the authoritative Internet registry.
             */
      in_whois: boolean;
      /**
             * The AS number of the peer.
             */
      peer: number;
      /**
             * True if the route has been seen by RIS, false otherwise.
             */
      in_bgp: boolean;
    }
  ];

  imports: [
    {
      /**
             * True if the route exists in IRR or whois, false otherwise.
             * For prefixes it is meant to be a Internet Routing Registry,
             * for peers it is meant to be the whois registration of the authoritative Internet registry.
             */
      in_whois: boolean;
      /**
             * The AS number of the peer.
             */
      peer: number;
      /**
             * True if the route has been seen by RIS, false otherwise.
             */
      in_bgp: boolean;
    }
  ];

  /**
     * The authoritative Internet registry for the input resource (e.g. RIPE, APNIC, ARIN...)
     */
  authority: string;

  prefixes: [
    {
      /**
         * True if the route exists in IRR or whois, false otherwise.
         * For prefixes it is meant to be a Internet Routing Registry,
         * for peers it is meant to be the whois registration of the authoritative Internet registry.
         */
      in_whois: boolean;
      /**
         * Note: This can be an array of strings, or a single string containging '-'
         */
      irr_sources: string[] | string;
      /**
         * The prefix in CIDR notation.
         */
      prefix: string;
      /**
         * True if the route has been seen by RIS, false otherwise.
         */
      in_bgp: boolean;
    }
  ];

  /**
     * The start time the query covers.
     */
  query_starttime: Date;

  /**
     * The end time the query covers.
     */
  query_endtime: Date;
}
