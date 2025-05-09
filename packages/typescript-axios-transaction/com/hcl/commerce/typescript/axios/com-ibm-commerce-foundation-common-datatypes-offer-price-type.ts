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

import { ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeContractIdentifier } from './com-ibm-commerce-foundation-common-datatypes-offer-price-type-contract-identifier';
import { ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeDescription } from './com-ibm-commerce-foundation-common-datatypes-offer-price-type-description';
import { ComIbmCommerceFoundationCommonDatatypesOfferPriceTypePrice } from './com-ibm-commerce-foundation-common-datatypes-offer-price-type-price';
import { ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeUserData } from './com-ibm-commerce-foundation-common-datatypes-offer-price-type-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesOfferPriceType
 */
export interface ComIbmCommerceFoundationCommonDatatypesOfferPriceType {
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    lastUpdate?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    endDate?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeDescription}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    description?: ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeDescription;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    precedence?: number;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    quantityUnit?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeContractIdentifier}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    contractIdentifier?: ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeContractIdentifier;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesOfferPriceTypePrice}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    price?: ComIbmCommerceFoundationCommonDatatypesOfferPriceTypePrice;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    maximumQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    minimumQuantity?: number;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeUserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesOfferPriceTypeUserData;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesOfferPriceType
     */
    qualifier?: string;
}


