/**
 * See: https://stat.ripe.net/docs/data_api#CountryResourceList
 */

import { BaseOptions } from './common/BaseOptions';

export interface CountryResourceListOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * 2-digit ISO-3166 country code (e.g. "at","de"...)
     */
  resource: string;

  /**
     * The time to use for the query.
     */
  time?: Date | string;

  /**
     * Describes the formatting for the output of IPv4 space
     *
     * format parameter; possible values: "" or "prefix".
     * "prefix" will return each entry in prefix notation, meaning that ranges are converted to CIDR prefixes.
     */
  v4_format?: string;
}

export interface CountryResourceListResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The time covered by the query.
     */
  query_time: Date | string;

  /**
     * Lists of resources that are associated with the queried country according to the RIR stats files.
     */
  resources: {
    /**
         * A sorted list of IPv6 prefixes associated with the queried country.
         */
    ipv6: string[];

    /**
         * A sorted list of ASN numbers associated with the queried country.
         */
    asn: number[];

    /**
         * 	A sorted list of IPv4 prefixes and/or ranges associated with the queried country.
         */
    ipv4: string[];
  };
}
