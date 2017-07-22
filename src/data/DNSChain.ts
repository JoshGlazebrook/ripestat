/**
 * See: https://stat.ripe.net/docs/data_api#DNSChain
 */

import { BaseOptions } from './common/BaseOptions';

export interface DNSChainOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * Hostname or IP address (Ipv4 or IPv6).
     */
  resource: string;
}

export interface DNSChainResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The query time used for the query.
     */
  query_time: Date | string;

  /**
     * The list of the authoritative nameservers for the returned DNS records.
     */
  authoritative_nameservers: string[];

  /**
     * The list of IP addresses of the DNS resolvers used to do perform the DNS queries.
     */
  nameservers: string[];

  /**
     * A key-value list in which the key is a hostname and the value is the list of
     * IP addresses/hostnames to which it has A/AAAA/CNAME records pointing to.
     */
  forward_nodes: {
    [index: string]: string[];
  };

  /**
     * A key-value list in which the key is an IP address and the value is the
     * list of hostnames to which it has PTR records pointing to.
     */
  reverse_nodes: {
    [index: string]: string[];
  };
}
