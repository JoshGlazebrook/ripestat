/**
 * See: https://stat.ripe.net/docs/data_api#AsOverview
 */

export interface ASOverviewOptions {
  /**
   * The Autonomous System Number to get information for.
   */
  resource: number;
}

export interface ASOverviewResponse {
  /**
   * The AS the query is based on.
   */
  resource: string;

  /**
   * The type of resource this information is about (this is always 'as');
   */
  type: 'as';

  /**
   * The start time this query covers.
   */
  query_startitme: Date;

  /**
   * The end time this query covers.
   */
  query_endtime: Date;

  /**
   * Information about this ASN or the ASN block it belongs to.
   */
  block: {
    desc: string;
    name: string;
    resource: string;
    tags: string;
  };

  /**
   * Descriptive name for the AS if AS is given, "null" otherwise
   */
  holder: string;

  /**
   * "true" if the ASN is originating any prefixes which are visible by at least 3 RIS full-feed peers (see http://ris.ripe.net).
   * Note that a transit-only ASN would be reported with "false".
   */
  announced: boolean;
}
