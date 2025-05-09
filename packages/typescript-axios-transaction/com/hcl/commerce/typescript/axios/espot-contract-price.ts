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

import { ComIbmCommerceFoundationCommonDatatypesDescriptionType } from './com-ibm-commerce-foundation-common-datatypes-description-type';
import { EspotContractIdentifier } from './espot-contract-identifier';
import { EspotContractPriceUserDataField } from './espot-contract-price-user-data-field';
import { EspotContractUnitPrice } from './espot-contract-unit-price';

/**
 * 
 * @export
 * @interface EspotContractPrice
 */
export interface EspotContractPrice {
    /**
     * 
     * @type {string}
     * @memberof EspotContractPrice
     */
    lastUpdate?: string;
    /**
     * 
     * @type {string}
     * @memberof EspotContractPrice
     */
    endDate?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesDescriptionType}
     * @memberof EspotContractPrice
     */
    description?: ComIbmCommerceFoundationCommonDatatypesDescriptionType;
    /**
     * 
     * @type {number}
     * @memberof EspotContractPrice
     */
    precedence?: number;
    /**
     * 
     * @type {string}
     * @memberof EspotContractPrice
     */
    quantityUnit?: string;
    /**
     * 
     * @type {EspotContractIdentifier}
     * @memberof EspotContractPrice
     */
    contractIdentifier?: EspotContractIdentifier;
    /**
     * 
     * @type {number}
     * @memberof EspotContractPrice
     */
    maximumQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof EspotContractPrice
     */
    minimumQuantity?: number;
    /**
     * 
     * @type {EspotContractUnitPrice}
     * @memberof EspotContractPrice
     */
    contractUnitPrice?: EspotContractUnitPrice;
    /**
     * 
     * @type {string}
     * @memberof EspotContractPrice
     */
    startDate?: string;
    /**
     * 
     * @type {Array<EspotContractPriceUserDataField>}
     * @memberof EspotContractPrice
     */
    userDataField?: Array<EspotContractPriceUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof EspotContractPrice
     */
    qualifier?: string;
}


