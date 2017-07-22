/**
 * See: https://stat.ripe.net/docs/data_api#PrefixOverview
 */

import { BaseOptions } from './common/BaseOptions';

export interface PrefixOverviewOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * Prefix.
     */
  resource: string;

  /**
     * The query time to use for the query.
     */
  query_time?: Date | string | number;

  /**
     * Minimum number of RIS peers seeing the prefix for it to be included in the results. Excludes low-visibility/localized announcements.
     */
  min_peers_seeing?: number;

  /**
     * Limits the number of related prefixes - if there are any - included in the result
     */
  max_related?: number;
}

export interface PrefixOverviewResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The query time used for the query.
     */
  query_time: Date | string;

  /**
     * This contains information about this ASN or the ASN block it belongs to.
     */
  block: {
    /**
         * A human readable description
         */
    desc: string;

    /**
         * A human readable name.
         */
    name: string;

    resource: string;
    tags: string;
  };

  /**
     * "True" if the prefix is announced, "False" otherwise
     */
  announced: boolean;

  /**
     * A list of ("asn"/"holder") objects representing the originating ASNs.
     * For multi-origin prefixes it's more than one ASN.
     */
  asns: [
    {
      holder: string;
      asn: number;
    }
  ];

  /**
     * 	Descriptive name for the AS if AS is given, "null" otherwise
     */
  holder: string;

  /**
     * For this data call always "prefix"
     */
  type: string;

  /**
     * 	List of related prefixes
     */
  related_prefixes: string[];

  /**
     * Total number of (returned and truncated) related prefixes.
     */
  actual_num_related: number;

  /**
     * Number of prefixes (exact or related) filtered by low-visibility filter. This can be controlled by the parameter "min_peers_seeing".
     */
  num_filtered_out: number;

  /**
     * True if the information in the response is for a larger block than the one requested.
     */
  is_less_specific: boolean;
}
