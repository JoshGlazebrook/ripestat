/**
 * See: https://stat.ripe.net/docs/data_api#Searchcomplete
 */

import { BaseOptions } from './common/BaseOptions';

export interface SearchCompleteOptions extends BaseOptions {
  /**
   * The term that should tried to be matched against resources.
   */
  resource: string;

  /**
   * Defines how many suggestions are returned per category.
   *
   * (default: 6)
   */
  limit?: number;
}

export interface SearchCompleteResponse {
  /**
   * The resource (query term) used for the query
   */
  query_term: string;

  /**
   * The maximum number of suggestions per category.
   */
  limit: number;

  /**
   * The query time used for the query.
   */
  query_time: Date | string;

  /**
   * This contains a list of objects each with a "category" and a "suggestions" property,
   * which contains the suggestions and defines the category they are belonging to.
   */
  categories: [
    {
      category: string;

      suggestions: [
        {
          description: string;
          value: string;
          label: string;
        }
      ];
    }
  ];
}
