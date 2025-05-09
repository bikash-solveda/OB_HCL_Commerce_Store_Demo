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

import { ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionTypeUserData } from './com-ibm-commerce-foundation-common-datatypes-attachment-description-type-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
 */
export interface ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType {
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionTypeUserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionTypeUserData;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesAttachmentDescriptionType
     */
    longDescription?: string;
}


