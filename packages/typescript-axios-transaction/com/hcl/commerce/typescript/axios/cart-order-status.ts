/* tslint:disable */
/* eslint-disable */
/**
 * HCL Commerce Services - Account and Contract
 * These services provide APIs to manage accounts and contracts.  a contract is an agreement that represents the terms and conditions that apply to a transaction. An account is a relationship between the merchant and the financial institution that processes transactions for that merchant.
 *
 * The version of the OpenAPI document: 9.1.6
 * 
 * (C) Copyright HCL Technologies Limited 2021
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { JavaUtilMapEntry } from './java-util-map-entry';

/**
 * 
 * @export
 * @interface CartOrderStatus
 */
export interface CartOrderStatus {
    /**
     * 
     * @type {Array<JavaUtilMapEntry>}
     * @memberof CartOrderStatus
     */
    xstat_?: Array<JavaUtilMapEntry>;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    locked?: string;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    prepareIndicator?: string;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    buyerApprovalStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    editable?: string;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    orderStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CartOrderStatus
     */
    blocked?: string;
}


