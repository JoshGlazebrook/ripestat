/**
 * See: https://stat.ripe.net/docs/data_api#IanaRegistryInfo
 */

import { BaseOptions } from './common/BaseOptions';

export interface IANARegistryInfoOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * IP address, prefix or ASN
     */
  resource: string;

  /**
     * If a resource is given and this parameter is set, only the best match (which is the closest topologically) is returned.
     * (default: false)
     */
  best_match_only?: boolean;
}

export interface IANARegistryInfoResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  /**
     * Shows when the data was loaded from IANA.
     */
  load_time: Date | string;

  /**
     * The number of entries in the result.
     */
  returned: number;

  resources: [
    {
      resource: string;
      type_properties: string[];
      description: string;
      details: {
        [index: string]: string;
      };
      source: string;
      source_url: string;
    }
  ];
}
