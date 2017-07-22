/**
 * See: https://stat.ripe.net/docs/data_api#GeolocHistory
 */

import { BaseOptions } from './common/BaseOptions';

export interface GeolocationHistoryOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * Prefix, IP range, ASN or hostname
     */
  resource: string;

  /**
     * The starttime to use for the query.
     */
  starttime?: Date | string;

  /**
     * The end time to use for the query.
     */
  endtime?: Date | string;
}

export interface GeolocationHistoryResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * The starttime used for the query.
     */
  query_starttime: Date | string;

  /**
     * The endtime used for the query.
     */
  query_endtime: Date | string;

  /**
     * Contains for each month of the covered range the geographical distribution.
     */
  months: [
    {
      distributions: [
        {
          /**
             * The name of the city (empty is not available).
             */
          city: string;

          /**
             * The name of the country.
             */
          country: string;

          /**
             * The percentage value of the address space that is used in this city/country.
             */
          percentage: number;
        }
      ];
      /**
         * The month for which the data in the "distributions" is valid for.
         */
      month: Date | string;
    }
  ];
}
