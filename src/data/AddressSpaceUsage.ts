/**
 * See: https://stat.ripe.net/docs/data_api#AddressSpaceUsage
 */
import { BaseOptions } from './common/BaseOptions';

export interface AddressSpaceUsageOptions extends BaseOptions {
  /**
     * The prefix or IP range the address space usage should be returned for.
     */
  resource: string;
}

export interface AddressSpaceUsageResponse {
  /**
     * A list of assignments related to the queried resource.
     */
  assignments: [
    {
      /**
             * The status (for details read the methodology for this data call).
             */
      status: string;

      /**
             * The network name.
             */
      asn_name: string;

      /**
             * 	The address space this entry is referring to.
             *
             * Note: Property is observed via API response, but not documented.
             */
      address_range: string;

      /**
             * 	The address space this entry is referring to.
             *
             *  Note: Property is defined via API docs.
             */
      address_space: string;

      /**
             * The related allocation for this address range.
             *
             * Note: Property is observed via API response, but not documented.
             */
      parent_allocation: string;

      /**
             * The related allocation for this address range.
             *
             * Note: Property is defined via API docs.
             */
      allocation: string;
    }
  ];

  query_time: Date;

  /**
     * An overview of the distribution of statuses of the covered address space.
     */
  ip_stats: [
    {
      /**
             * The name of the status.
             */
      status: string;
      /**
             * The number of IP addresses with this status.
             */
      ips: number;
    }
  ];

  /**
     * The resource the query was based on.
     */
  resource: string;

  /**
     * A list of allocations related to the queried resource.
     */
  allocations: [
    {
      /**
             * The allocation this entry is referring to.
             */
      allocation: string;
      /**
             * The status (for details read the methodology for this data call).
             */
      status: string;
      /**
             * The network name.
             */
      asn_name: string;
      /**
             * The number of assignments within this allocation.
             */
      assignments: number;
    }
  ];
}
