/**
 * See: https://stat.ripe.net/docs/data_api#AtlasProbeDeployment
 */
import { BaseOptions } from './common/BaseOptions';

export interface AtlasProbeDeploymentOptions extends BaseOptions {
  /**
     * Region, country, ASN, or mixed value to lookup.
     *
     * Due to the ambigious nature of abbreviated identifiers for regions and countries
     * (e.g. me for Middle East and Montenegro) region and country resources should be prefixes with "region_" or "cc_".
     * Looking up a network can be specified on the IP version by using the prefix "asn4_" for IP v4 networks and "asn6_" for IP v6 networks.
     * For mixed results the resources just need to be comma separated.
     */
  resource: string | number;

  /**
     * The start time for the query (defaults to the start of 2014)/
     */
  starttime?: Date | number | string;

  /**
     * The end time for the query.
     */
  endtime?: Date | number | string;
}

export interface AtlasProbeDeploymentResponse {
  /**
     * The resource used for the query.
     */
  resource: string[];

  /**
     * The start of the time the query covers.
     */
  query_starttime: Date;

  /**
     * The end of the time the query covers.
     */
  query_endtime: Date;

  query_date: Date;

  merge: boolean;

  deployment: [
    {
      date: Date;
      statuses: {
        neverseen: number;
        connected: number;
        disconnected: number;
        abandoned: number;
      };
    }
  ];
}
