/**
 * See: https://stat.ripe.net/docs/data_api#AtlasProbes
 */

export interface AtlasProbesOptions {
  /**
     * The resource to lookup (prefix, ASN, or country).
     */
  resource: string;
}

export interface AtlasProbesResponse {
  /**
     * The resource used for the query.
     */
  resource: string;

  stats: {
    total: number;
  };

  probes: [
    {
      prefix_v4: string;
      status: number;
      prefix_v6: string;
      is_acnhor: boolean;
      last_connected: Date | number;
      status_name: string;
      type: string;
      id: number;
      tags: string[];

      address_v6: string;
      longitude: number;
      address_v4: string;
      country_code: string;
      asn_v4: number;
      latitude: number;
      status_since: Date | number;
      asn_v6: number;
      is_public: boolean;
      first_connected: Date | number;
      total_uptime: number;
    }
  ];
}
