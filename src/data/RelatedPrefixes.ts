/**
 * See: https://stat.ripe.net/docs/data_api#RelatedPrefixes
 */

import { BaseOptions } from './common/BaseOptions';

export interface RelatedPrefixesOptions extends BaseOptions {
  /**
   * The resource (prefix or ip range) to use for the query.
   */
  resource: string;
}

export interface RelatedPrefixesResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * The related prefixes.
   */
  prefixes: [
    {
      /**
     * The name of the originating ASN.
     */
      asn_name: string;

      /**
     * The origin ASN of this related prefix.
     */
      origin_asn: string;

      /**
     * The related prefix.
     */
      prefix: string;

      /**
     * The type of relationship (e.g. More Specific, Adjacency - Left).
     */
      relationship: string;
    }
  ];
}
