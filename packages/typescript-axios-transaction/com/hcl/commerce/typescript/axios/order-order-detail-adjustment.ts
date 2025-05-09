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

import { OrderOrderDetailAdjustmentUserDataField } from './order-order-detail-adjustment-user-data-field';

/**
 * 
 * @export
 * @interface OrderOrderDetailAdjustment
 */
export interface OrderOrderDetailAdjustment {
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    displayLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    xadju_calUsageId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    currency?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderOrderDetailAdjustment
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    usage?: string;
    /**
     * 
     * @type {Array<OrderOrderDetailAdjustmentUserDataField>}
     * @memberof OrderOrderDetailAdjustment
     */
    userDataField?: Array<OrderOrderDetailAdjustmentUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderDetailAdjustment
     */
    descriptionLanguage?: string;
}


