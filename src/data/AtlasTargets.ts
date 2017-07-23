/**
 * See: https://stat.ripe.net/docs/data_api#AtlasTargets
 */
import { BaseOptions } from './common/BaseOptions';

export interface AtlasTargetsOptions extends BaseOptions {
  /**
     * The resource to lookup (prefix, ASN, or country).
     */
  resource: string;
}

export interface AtlasTargetsResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  authenticated: boolean;

  measurements: [
    {
      status: {
        id: number;
        name: string;
      };

      result: string;
      msm_id: number;
      participant_count: number;
      af: number;
      start_time: Date | number;
      creation_time: Date | number;
      dst_name: string;
      dst_asn: number;
      dst_addr: string;
      is_public: boolean;
      size: number;
      type: {
        name: string;
      };
      stop_time: Date | number;
      description: string;
    }
  ];

  stats: {
    total: number;
  };
}
