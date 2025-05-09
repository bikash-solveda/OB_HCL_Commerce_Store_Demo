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

import { ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockBlockReason } from './com-ibm-commerce-order-facade-datatypes-order-block-info-type-order-block-block-reason';
import { ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockUserData } from './com-ibm-commerce-order-facade-datatypes-order-block-info-type-order-block-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
 */
export interface ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock {
    /**
     * 
     * @type {boolean}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
     */
    resovled?: boolean;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockUserData}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
     */
    userData?: ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockUserData;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockBlockReason}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
     */
    blockReason?: ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlockBlockReason;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
     */
    timeBlocked?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderFacadeDatatypesOrderBLockInfoTypeOrderBlock
     */
    comments?: string;
}


