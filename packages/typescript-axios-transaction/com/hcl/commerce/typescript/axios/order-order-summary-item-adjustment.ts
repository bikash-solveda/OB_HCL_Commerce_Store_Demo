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

import { OrderOrderSummaryItemAdjustmentUserDataField } from './order-order-summary-item-adjustment-user-data-field';

/**
 * 
 * @export
 * @interface OrderOrderSummaryItemAdjustment
 */
export interface OrderOrderSummaryItemAdjustment {
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    displayLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    currency?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    usage?: string;
    /**
     * 
     * @type {Array<OrderOrderSummaryItemAdjustmentUserDataField>}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    userDataField?: Array<OrderOrderSummaryItemAdjustmentUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    descriptionLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderSummaryItemAdjustment
     */
    xadju_calUsageId?: string | null;
}


