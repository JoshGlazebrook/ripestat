/**
 * See: https://stat.ripe.net/docs/data_api#ReverseDNSConsistency
 */

import { BaseOptions } from './common/BaseOptions';

export interface ReverseDNSConsistencyOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   */
  resource: string;

  /**
   * If true, will include ipv4 results (default: true).
   */
  ipv4?: boolean;

  /**
   * If true, will include ipv6 results (default: true).
   */
  ipv6?: boolean;
}

export interface ReverseDNSConsistencyResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * Indicates if ipv4 results were included.
   */
  ipv4: boolean;

  /**
   * Indicates if ipv6 results were included.
   */
  ipv6: boolean;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * Holds the results separated in "v4" and "v6" results.
   */
  prefixes: {
    /**
     * IPV4 Results.
     */
    ipv4: {
      [index: string]: {
        /**
         * True if all the returned delegations cover the entire IP space for this prefix.
         */
        complete: boolean;

        /**
         * All reverse DNS delegations within the prefix given in this key.
         */
        domains: [
          {
            /**
             * hTe output of the DNS-Check test.
             */
            dnscheck: {
              /**
               * The status from the test.
               */
              status: string;

              /**
               * When the test was done.
               */
              time: Date | string;
            };

            domain: string;

            /**
             * True if the prefix is found in the RIPE Registry.
             */
            found: boolean;

            /**
             * The prefix this domain result is based on.
             */
            prefix: string;
          }
        ];
      };
    };

    /**
     * IPV6 Results.
     */
    ipv6: {
      [index: string]: {
        /**
         * True if all the returned delegations cover the entire IP space for this prefix.
         */
        complete: boolean;

        /**
         * All reverse DNS delegations within the prefix given in this key.
         */
        domains: [
          {
            /**
             * hTe output of the DNS-Check test.
             */
            dnscheck: {
              /**
               * The status from the test.
               */
              status: string;

              /**
               * When the test was done.
               */
              time: Date | string;
            };

            domain: string;

            /**
             * True if the prefix is found in the RIPE Registry.
             */
            found: boolean;

            /**
             * The prefix this domain result is based on.
             */
            prefix: string;
          }
        ];
      };
    };
  };
}
