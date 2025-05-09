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

import { ComIbmCommerceFoundationCommonDatatypesQuoteIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-quote-identifier-type';
import { ComIbmCommerceOrderFacadeDatatypesChannelType } from './com-ibm-commerce-order-facade-datatypes-channel-type';

/**
 * 
 * @export
 * @interface CartAssignedPromotionCode
 */
export interface CartAssignedPromotionCode {
    /**
     * 
     * @type {string}
     * @memberof CartAssignedPromotionCode
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartAssignedPromotionCode
     */
    quoteID?: string;
    /**
     * 
     * @type {string}
     * @memberof CartAssignedPromotionCode
     */
    externalOrderID?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesQuoteIdentifierType}
     * @memberof CartAssignedPromotionCode
     */
    quoteIdentifier?: ComIbmCommerceFoundationCommonDatatypesQuoteIdentifierType;
    /**
     * 
     * @type {string}
     * @memberof CartAssignedPromotionCode
     */
    buyerPONumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CartAssignedPromotionCode
     */
    customerOrderNumber?: string;
    /**
     * 
     * @type {Array<CartAssignedPromotionCode>}
     * @memberof CartAssignedPromotionCode
     */
    promotionCode?: Array<CartAssignedPromotionCode>;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesChannelType}
     * @memberof CartAssignedPromotionCode
     */
    channel?: ComIbmCommerceOrderFacadeDatatypesChannelType;
}


