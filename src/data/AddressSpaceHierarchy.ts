/**
 * See: https://stat.ripe.net/docs/data_api#AddressSpaceHierarchy
 */
import { BaseOptions } from './common/BaseOptions';

export interface AddressSpaceHierarchyOptions extends BaseOptions {
  /**
     * The prefix or IP range the address space hierarchy should be returned for.
     */
  resource: string;

  /**
     * How many CIDR levels below the queried resource to display more specific resources before aggregating blocks together.
     */
  aggr_levels_below?: number;

  /**
     * The maximum number of blocks to return, after aggregation has taken place.
     */
  max_more_specific?: number;

  /**
     * Which RIR to return blocks for. (default: ripe)
     */
  rir?: 'ripe' | 'apnic';
}

export interface AddressSpaceHierarchyResponse {
  /**
   * The time the query was based on.
   */
  query_time: Date;

  /**
   * The resource the query was based on.
   */
  resource: string;

  /**
   * Name of the RIR where the results are from
   */
  rir: string;

  /**
   * An integer representing the total number of first level more specific blocks, before aggregation.
   */
  total_more_specific: number;

  /**
 * A list containing first level less specific (parent) blocks above the queried resource.
 */
  less_specific: [
    {
      [index: string]: string;
    }
  ];

  /**
   * A list containing first level more specific blocks underneath the queried resource.
   * Some of these may be aggregated according to the 'aggr_levels_below' query parameter.
   */
  more_specific: [
    {
      [index: string]: string;
    }
  ];

  /**
   * A structure which describes when the exact-match and less-specific inetnum/inet6num objects were last updated
   * in the database. The inet(6)num attribute's key is "ip_space" and the last updated date's key is "date".
   */
  last_updated: [
    {
      date: Date;
      ip_space: string;
    }
  ];

  /**
     * A list containing exact matches for the queried resource.
     */
  exact: [
    {
      [index: string]: string;
    }
  ];

  /**
   * A key-pair structure which links database ORG IDs to their organisation names as described in the respective ORG object.
   * Only for IDs appearing in the exact-match and less-specific objects.
   */
  org_names: {
    [index: string]: string;
  };
}
