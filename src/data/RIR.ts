/**
 * See: https://stat.ripe.net/docs/data_api#RIR
 */

import { BaseOptions } from './common/BaseOptions';

export interface RIROptions extends BaseOptions {
  /**
   * The resource to use for the query.
   *
   * IP Resource/ASN
   */
  resource: string;

  /**
   * The starttime to use for the query.
   */
  starttime?: Date | string | number;

  /**
   * The endtime to use for the query.
   */
  endtime?: Date | string | number;

  /**
   * Defines the level of detail in which the data is being returned.
   * Levels are:
   * 0 - Least detailed output
   * 1 - Default output
   * 2 - Most detailed output
   */
  lod?: number;
}

export interface RIRResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The level of detail used for the query.
   */
  lod: number;

  /**
   * The starttime used for the query.
   */
  query_starttime: Date | string;

  /**
   * The endtime used for the query.
   */
  query_endtime: Date | string;

  rirs: [
    {
      // Visible at lod 0+

      /**
     * The authoritative RIR.
     */
      rir: string;

      // Visible in lod 1+

      /**
     * The first time this RIR was authoritative.
     */
      first_time?: Date | string;

      /**
     * The last time this RIR was authoritative;
     */
      last_time?: Date | string;

      // Visible in lod 2+

      /**
     * The registration status.
     */
      status?: string;

      /**
     * The country of registration.
     */
      country?: string;

      /**
     * The registartion date;
     */
      registration?: Date | string;
    }
  ];

  latest: Date | string;
}
