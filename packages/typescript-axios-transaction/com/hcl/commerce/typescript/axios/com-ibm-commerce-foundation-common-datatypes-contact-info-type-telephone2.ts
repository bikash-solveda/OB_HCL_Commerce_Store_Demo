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

import { ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2UserData } from './com-ibm-commerce-foundation-common-datatypes-contact-info-type-telephone2-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2
 */
export interface ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2 {
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2UserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2UserData;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof ComIbmCommerceFoundationCommonDatatypesContactInfoTypeTelephone2
     */
    publish?: boolean;
}


