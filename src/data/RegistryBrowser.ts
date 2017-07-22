/**
 * See: https://stat.ripe.net/docs/data_api#RegistryBrowser
 *
 * Note: These interfaces were not very clear in the documentation.
 */

import { BaseOptions } from './common/BaseOptions';

export interface RegistryBrowserOptions extends BaseOptions {
  /**
   * The resource to query for.
   *
   * This is a prefix (v4/v6), an AS number, or a string of the format "objtype:objkey" for looking up non-numeric database objects
   */
  resource: string;

  /**
   * Whether to request near realtime information from the database. Defaults to "true".
   * If "false", the information may be several hours old but the response time may be slightly quicker.
   */
  use_live_lookups?: boolean;
}

export interface RegistryBrowserGroup {
  key: string;
  deleted: boolean;

  /* Each related object contains a list of fields that relate this
   * to the exact match object.
   * This attribute doesn't exist for exact match objects.
   */
  relationships: string[];

  revision: number;

  fields: [
    {
      references?: string[];
      key: string;
      value: string;
    }
  ];

  type: string;

  /* The primary key is the unique identifier for this object.
   * If you combine it into a "key:value" string, it can be used in
   * the 'resource' parameter of this data call.
   */
  primary: {
    key: string;
    value: string;
  };

  to_time: string;
  latest: boolean;

  /* The title key/value forms the "friendly name" for an object, and
   * is not necesarily unique.
   */
  title: {
    key: string;
    value: string;
  };
}

export interface RegistryBrowserResponse {
  /**
   * The resource used for the query.
   */
  resource: string;

  /**
   * The total number of versions that are recorded for the 'exact' object.
   * This is the total known to the backend, and may be more than the number of objects in the 'versions' list.
   */
  num_versions: number;

  versions: [string[]];

  /**
   * 	A list of objects that reference the exact match object in one or more of their fields. This will be empty if the query is ambiguous.
   */
  backwards_refs: RegistryBrowserGroup[];
  backward_refs_summary: any;

  suggestions: [
    {
      key: string;
      deleted: boolean;
      fields: [
        {
          value: string;
          key: string;
        }
      ];
    }
  ];

  /**
   * A list of objects that exactly match the query.
   */
  objects: RegistryBrowserGroup[];

  /**
   * The point in time that the returned data refers to.
   */
  time: Date;

  /**
   * A list of objects that are referenced by the exact match in one or more of its fields. This will be empty if the query is ambiguous.
   */
  forward_refs: RegistryBrowserGroup[];
  forward_refs_summary: any;

  now: Date;
  type: string;
  database: string;
  historic_queries_allowed: boolean;
  terms_and_conditions: string;
  complete_history: boolean;
  truncated: any[];
}
