/**
 * See: https://stat.ripe.net/docs/data_api#SpeedcheckerBandwidthMeasurements
 */

import { BaseOptions } from './common/BaseOptions';

export interface SpeedCheckerBandwidthMeasurementsOptions extends BaseOptions {
  /**
   * The resource (prefix) to use for the query.
   *
   * At this moment the data call only supports prefixes but aggregations for ASNs and countries is planned.
   */
  resource: string;

  /**
   * The starttime to use for the query.
   */
  starttime?: Date | string;

  /**
   * the endtime to use for the query.
   */
  endtime?: Date | string;
}

export interface SpeedCheckerBandwidthMeasurementsResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The starttime used for the query.
   */
  starttime: Date | string;

  /**
   * The endtime used for the query.
   */
  endtime: Date | string;

  statistics: {
    measurements: number;
  };

  measurements: [
    {
      date: Date | string;
      down: number;
      prefix: string;
      up: number;
    }
  ];
}
