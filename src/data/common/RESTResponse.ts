import * as rest from 'rest';
import { RIPEResponse } from './RIPEResponse';

/**
 * Generic wrapper around rest.Response for RIPE API Data responses.
 */
export interface RESTResponse<T> extends rest.Response {
  entity: RIPEResponse<T>;
}
