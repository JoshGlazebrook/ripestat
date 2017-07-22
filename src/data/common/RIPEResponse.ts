/**
 * RIPEStat API Data Response
 *
 * See: https://stat.ripe.net/docs/data_api#Overview
 */
export interface RIPEResponse<T> {
  /**
   * Indicates the status of the result of the data call.
   * Possible values are "ok" for a successful query, "error" for unsuccessful query and "maintenance"
   * in case the data call is undergoing maintenance. In case of an error see the messages field for details.
   */
  status: string;
  /**
   * The server that handled the request.
   */
  server_id: string;

  /**
   * Same as the HTTP status code. In case of server errors the HTTP status code will be set appropriately.
   */
  status_code: number;
  /**
   * 	major.minor version of the response layout for this particular data call.
   * New minor versions are backwards compatible, new major versions are not
   */
  version: string;
  /**
   * True if the response data is from cache, otherwise false if fresh.
   */
  cached: boolean;

  /**
   * Example: [{
   *   resource: "127.6.208.0/20",
   *   relation: "more-specific"
   * }]
   */
  see_also: any[];

  time: string;
  /**
   * Human readable messages.
   */
  messages: any[];
  /**
    * Indicates the status of the data call.
    * Possible values:
    * supported
    * This data call is meant to be stable and without bugs. Any bugs reported will be fixed asap.
    * deprecated(usually provided with an expiration date)
    * This data call is meant to be deprecated and is about to be removed either by the expiration date or soon.
    * PLEASE CHECK ON THIS FLAG REGULARLY IF YOU WANT TO HAVE A RELIABLE SOURCE OF DATA!
    * development
    * This data call is currently work in progress and to be considered to change or
    * discontinued without notice. This guarantees that we can incorporate user feedback
    * in the most efficient way - so bug reports are highly welcome!
  */
  data_call_status: string;
  /**
   * Time it took to process the request, in millisecons.
   * If for some reason the time could not be determined then its value is "not available".
   */
  process_time: number;
  /**
   * The version of the backend that served the request?
   */
  build_version: string;
  query_id: string;
  /**
   * See: https://stat.ripe.net/docs/data_api#MetaRequest
   */
  meta?: {
    availability?: [{
      available_timelines: [{
        description?: string;
        starttime: Date;
        endtime: Date;
      }];

      id: string;
    }];

    versions: any;
    methodology: any;
  };
  /**
   * The actual response data.
   */
  data: T;
}
