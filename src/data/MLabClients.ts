/**
 * See: https://stat.ripe.net/docs/data_api#MlabClients
 */

import { BaseOptions } from './common/BaseOptions';

export interface MLabClientsOptions extends BaseOptions {
  /**
     * The resource to use for the query.
     *
     * IPv4 Prefix, IPv4 address or 2-digit ISO-3166 country code (e.g. "at","de"...)
     */
  resource: string;

  /**
     * The starttime to use for the query.
     *
     * (default: endtime - 7d)
     */
  starttime?: Date | string | number;

  /**
     * The endtime to use for the query.
     *
     * (default: latest time there is M-Lab data available)
     */
  endtime?: Date | string | number;
}

export interface MLabClientsResponse {
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
     * A key-value list of hosts with network activity, indexed by the host IP address.
     */
  clients: {
    [index: string]: {
      /**
             * The city where the host is located (maxmind data).
             */
      city: string;

      /**
             * The country where the host is locate (maxmind data).
             */
      country: string;

      /**
             * The host latitude according to Maxmind data.
             */
      latitude: number;

      /**
             * The host longitude according to Maxmind data.
             */
      longitude: number;
      /**
             * 	The number of tests ran by the host during the query period.
             */
      num_tests: number;
    };
  };

  /**
     * Total number of hosts in the result
     */
  nr_clients: number;

  /**
     * 	(Only applicable for prefixes). The amount of address space coverage of the hosts. Equals to nr_clients/number of IPs in the prefix.
     */
  perc_coverage: number;
}
