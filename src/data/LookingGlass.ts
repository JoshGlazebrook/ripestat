/**
 * See: https://stat.ripe.net/docs/data_api#LookingGlass
 */
import { BaseOptions } from './common/BaseOptions';

export interface LookingGlassOptions extends BaseOptions {
  /**
     * The resurce (prefix) to use for the query.
     *
     * States the prefix you want to get looking glass information for.
     */
  resource: string;
}

export interface LookingGlassResponse {
  /**
     * The resource (prefix) used for the query.
     */
  resource: string;

  /**
     * The query time used for the query.
     */
  query_time: Date | string;

  /**
     * Contains the RRCs which are not returning any records for this IP.
     */
  no_data_rrcs: [
    {
      /**
         * The location of the RRC.
         */
      location: string;

      /**
         * The name of the RRC.
         */
      rrc: string;
    }
  ];

  /**
     * One entry per RRC returning entries for the resource.
     */
  rrcs: {
    [index: string]: {
      /**
             * Groups the entries of the looking glass query per RRC.
             */
      entries: [
        {
          /**
                 * States the AS path for the looking glass request.
                 */
          as_path: string;

          /**
                 * These are details that were returned together with the AS path.
                 */
          details: string[];

          update_from: string;

          next_hope: string;

          originating_as: number;
        }
      ];
    };
  };
}
