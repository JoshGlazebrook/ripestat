/**
 * See: https://stat.ripe.net/docs/data_api#Geoloc
 */

import { BaseOptions } from './common/BaseOptions';

export interface GeolocationOptions extends BaseOptions {
  /**
     * The resource used for the query.
     *
     * {refix, IP range, ASN or hostname
     */
  resource: string;

  /**
     * The time to use for the query.
     */
  timestamp?: Date | string;
}

export interface GeolocationResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The query time used for the query.
     */
  query_time: Date | string;

  /**
     * Contains the geographical locations for the resource is used
     * (Note that the interpretation for ASNs is different than for prefixes and IP ranges).
     */
  locations: [
    {
      /**
         * The city name - it's not always available
         */
      city: string;
      prefixes: string[];

      /**
         * The ISO-3166 country code
         */
      country: string;

      /**
         * The coordinates defined for this location
         */
      longitude: number;

      /**
         * The coordinates defined for this location
         */
      latitude: number;

      /**
         * Denotes how much of the related IP space is used at this location.
         * Note there is a difference between a prefix/hostname look-up and an ASN look-up.
         * For a prefix/hostname look-up, the percentage relates to the resource that is being looked up.
         * For an ASN look-up the percentage shows how much of the announced address space (see "prefixes" field) is geographically known.
         */
      covered_percentage: number;
    }
  ];
  /**
     * The percentage of address space no geographic information could be found for
     */
  unknown_percentage: number;

  /**
     * The time the query was based on (interesting in case no query_time input argument is given)
     */
  other_prefixes: string[];
}
