/**
 * See: https://stat.ripe.net/docs/data_api#ExampleResources
 */

export interface ExampleResourcesResponse {
  /**
     * Example ASN number
     */
  asn: number;

  /**
     * Example IPv4 address
     */
  ipv4: string;

  /**
     * Example IPv6 address
     */
  ipv6: string;

  /**
     * Example IPv4 address range
     */
  range4: string;
}
