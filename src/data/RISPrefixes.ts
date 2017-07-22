/**
 * See: https://stat.ripe.net/docs/data_api#RISPrefixes
 */

import { BaseOptions } from './common/BaseOptions';

export interface RISPrefixesOptions extends BaseOptions {
  /**
   * The resource (ASN) to use for the query.
   */
  resource: string;

  /**
   * Defines the time of the lookup. This value needs to be aligned to the RIS dump times!
   */
  query_time?: Date | string;

  /**
   * If true, the data call will return all prefixes and not only the total counts.
   * This might be further separated into "originating" and "transitting".
   */
  list_prefixes?: boolean;

  /**
   * "o" will show originating prefixes and "t" transitting. The combination shows both, which is the default.
   */
  types?: 'o' | 't' | 'o,t';

  /**
   * This parameter lets you filter the address family: "v4" shows only IPv4 and "v6" only IPv6.
   */
  af?: 'v4' | 'v6' | 'v4,v6';

  /**
   * Noise refers to routed prefixes that are either coming from private IP space, single IP addresses or the entire IP space (/0).
   * "filter" will remove these prefixes from the output, "keep" will not remove any prefixes.
   */
  noise?: 'keep' | 'filter';
}

export interface RISPrefixesResponse {
  /**
   * The resource (ASN) used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * The noise option that was used for the query.
   */
  noise: string[];

  /**
   * The address family option that was used for the query.
   */
  af: string[];

  /**
   * The counts of prefixes for the queried ASN.
   */
  counts: {
    /**
     * Count data for ipv4 pefixes.
     */
    v4: {
      /**
       * The number of prefixes originating from this ASN.
       */
      originating: number;

      /**
       * The number of prefixes transitting through this ASN.
       */
      transitting: number;
    };

    /**
     * Count data for ipv6 prefixes.
     */
    v6: {
      /**
       * The number of prefixes originating from this ASN.
       */
      originating: number;

      /**
       * The number of prefixes transitting through this ASN.
       */
      transitting: number;
    };
  };

  /**
   * The list_prefixes option used for the query.
   */
  list_prefixes: boolean;

  /**
   * The prefix types option used for the query.
   */
  types: string[];

  /**
   * The prefixes associated with this ASN.
   */
  prefixes: {
    /**
     * Data for ipv4 prefixes.
     */
    v4: {
      /**
       * A list of all prefixes originating from this ASN.
       */
      originating: string[];

      /**
       * A list of all prefixes transitting through this ASN.
       */
      transitting: string[];
    };

    /**
     * Data for ipv6 prefixes.
     */
    v6: {
      /**
       * A list of all prefixes originating from this ASN.
       */
      originating: string[];

      /**
       * A list of all prefixes transitting through this ASN.
       */
      transitting: string[];
    };
  };
}
