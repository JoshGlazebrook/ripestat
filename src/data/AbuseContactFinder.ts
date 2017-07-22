/**
 * See: https://stat.ripe.net/docs/data_api#AbuseContactFinder
 */
import { BaseOptions } from './common/BaseOptions';

export interface AbuseContactFinderOptions extends BaseOptions {
  /**
     * The resource to lookup. (Prefix, single IP address or ASN)
     */
  resource: string;
}

export interface AbuseContactFinderResponse {
  /**
     * List of all RIRs that are responsible for the queried resource (ARIN, RIPE, etc)
     */
  authorities: string[];

  /**
     * Lists the total amount of entries in one blacklist source.
     * Every blacklist is given with the name as "list" and the number of entries in the field "entries".
     *
     * TODO: structure
     */
  blacklist_info: any;

  /**
     * This contains information that are related to special purpose Internet number resources, e.g. private address space.
     */
  global_network_info: {
    description: string;
    name: string;
  };

  /**
     * These fields contain the anti-abuse contact information.
     */
  anti_abuse_contacts: {
    /**
         * 	Dedicated abuse contact that is according to ripe-563, for details refer to this RIPE Labs article
            If the abuse-c contact is available other contact fields (e.g. "extracted_mails") will be omitted and left empty.
         */
    abuse_c: [
      {
        description: string;
        key: string;
        email: string;
      }
    ];

    /**
         * Any found email address is stated with a "description" and a "email" field
         */
    emails: [
      {
        description: string;
        email: string;
        via_techc: string;
      }
    ];

    /**
         * Any object that was found to contain anti-abuse related information is listed with a "type" field
         * and a link to the RIPE DB web interface.
         *
         * TODO: structure
         */
    objects_with_remarks: any;

    /**
         * Those contacts have been extracted/parsed from a RIPE DB object, the exact reference is given by "object-type" and "object-key".
         * TODO: structure
         */
    extracted_emails: any;
  };

  /**
     * This contains information found in the matching autnum or inet(6)num object in the RIPE DB.
     */
  holder_info: {
    /**
         * "netname" for IP based queries, "as-name" for ASN based queries.
         */
    name: string;

    /**
         * The resource that is mapped to the object (that doesn't have to be the same as the given input).
         */
    resource: string;
  };

  /**
     * Lists more or less specific IP prefixes/ranges found for the given input resource
     */
  less_specifics: string[];

  /**
     * Lists more or less specific IP prefixes/ranges found for the given input resource
     */
  more_specifics: string[];

  /**
     * The time the query was based on.
     */
  query_time: Date;

  /**
     * The resource the query was based on.
     */
  resource: string;
}
