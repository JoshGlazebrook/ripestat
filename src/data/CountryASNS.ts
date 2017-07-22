/**
 * See: https://stat.ripe.net/docs/data_api#CountryAsns
 */

import { BaseOptions } from './common/BaseOptions';

export interface CountryASNSOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * The country has to be provided as an ISO-3166-1 alpha-2 country code.
     * See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for details.
     */
  resource: string;

  /**
     * The time of the lookup.
     *
     * This value needs to be or will be aligned to the RIS dump times!
     */
  query_time?: Date | string | number;

  /**
     * Defines the level of detail in which the data is being returned.
     * Levels are:
     * 0 - Least detailed output
     * 1 - Most detailed output
     *
     * (default: 0)
     */
  lod?: number;
}

export interface CountryASNSResponse {
  /**
     * The resource used for the query.
     */
  resource: string[];

  /**
     * The querytime used for the query.
     */
  query_time: Date | string;

  /**
     * The latest time avaialble for querying.
     */
  latest_Time: Date | string;

  /**
     * The level of detail used for the query.
     */
  lod: string[];

  countries: [
    {
      /**
             * The resource (country).
             */
      resource: string;
      /**
             * Routed ASNs (only appears when lod is 1)
             */
      routed?: string[];

      /**
             * Non-routed ASNs (only appears when lod is 1)
             */
      non_routed?: string[];

      stats: {
        registered: number;
        routed: number;
      };
    }
  ];
}
