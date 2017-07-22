/**
 * See: https://stat.ripe.net/docs/data_api#WhatsMyIp
 */

import { BaseOptions } from './common/BaseOptions';

export interface WhatsMyIpResponse {
  /**
   * The requesters ip address.
   */
  ip: string;
}
