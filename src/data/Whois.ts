/**
 * See: https://stat.ripe.net/docs/data_api#Whois
 */

import { BaseOptions } from './common/BaseOptions';

export interface WhoisOptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * (ASN/ipv4/ipv6)
   */
  resource: string;
}

export interface WhoisRecordLine {
  /**
   * Provides a link with further informations (either on RIPEstat or the responsible whois database)
   */
  details_link: string;

  /**
   * The value of the entry.
   */
  value: string;

  /**
   * The key of the entry.
   *
   * records: (e.g. "aut-num", "as-name"...)
   * irr_records: (e.g. "route", "descr", "origin", "source"...)
   */
  key: string;
}

export interface WhoisResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * Holds the authorities that were involved in the query (e.g. "ripe", "afrinic", "apnic", "lacnic", "arin", "iana")
   */
  authorities: string[];

  /**
   * A list of whois records returned for this resource (authorities are combined)
   */
  records: [WhoisRecordLine[]];

  /**
   * A list of records returned for Routing Registries (RIPE, RADB...)
   */
  irr_records: [WhoisRecordLine[]];
}
