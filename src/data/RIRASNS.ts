/**
 * See: https://stat.ripe.net/docs/data_api#RISAsns
 */

import { BaseOptions } from './common/BaseOptions';

export interface RIRASNSOptions extends BaseOptions {
  /**
   * Defines the time of the lookup. This value needs to be aligned to the RIS dump times.
   */
  query_time?: string | Date;

  /**
   * If true, the data call will return a list of all ASNs (default: false)
   */
  list_asns?: boolean;

  /**
   * The type of ASNs to retrieve.
   *
   * 'o' - Originating ASNs only.
   * 't' - Transiting ASNs only.
   * 'o,t' - Originating and Transiting ASNs.
   * undefined - All ASNs (in a single array) are returned.
   */
  asn_types?: 'o' | 't' | 'o,t' | undefined;
}

export interface RIRASNSResponse {
  /**
   * The ASN types included in the response. Can be 't' | 'o' | 'o,t'.
   */
  asn_types: string[];

  /**
   * The amount of ASNs given in response.
   *
   * Note: total will only appear if asn_types is undefined in the request options (This is not supported via typings in this api library)
   */
  counts: {
    /**
     * The number of origin ASNs.
     */
    originating?: number;

    /**
     * The number of transiting ASNs.
     */
    transiting?: number;

    /**
     * The number of ASNs (no distinction between origin and transiting).
     */
    total?: number;
  };
  /**
   * Originating and Transiting ASNs.
   *
   * Note: This property can also be an array of ASN numbers. But only if asn_types is not supplied in the request
   * options. This is not currently supported by the type definitions for this library.
   */
  asns?: {
    /**
     * Originating ASNs.
     */
    originating?: number[];

    /**
     * Transiting ASNs.
     */
    transiting?: number[];
  };

  /**
   * The time used for the lookup.
   */
  query_time: Date;

  /**
   * The most recent time that can be used for lookups.
   */
  latest_time: Date;

  /**
   * Whether asns were listed or not.
   */
  list_asns: boolean;
}
