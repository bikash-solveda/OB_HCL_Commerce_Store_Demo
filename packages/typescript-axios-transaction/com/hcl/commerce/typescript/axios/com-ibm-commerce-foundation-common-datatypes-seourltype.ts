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

import { ComIbmCommerceFoundationCommonDatatypesSEOURLTypeParentStoreIdentifier } from './com-ibm-commerce-foundation-common-datatypes-seourltype-parent-store-identifier';
import { ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo } from './com-ibm-commerce-foundation-common-datatypes-seourltype-site-map-info';
import { ComIbmCommerceFoundationCommonDatatypesSEOURLTypeURLKeyword } from './com-ibm-commerce-foundation-common-datatypes-seourltype-urlkeyword';
import { ComIbmCommerceFoundationCommonDatatypesSEOURLTypeUserData } from './com-ibm-commerce-foundation-common-datatypes-seourltype-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceFoundationCommonDatatypesSEOURLType
 */
export interface ComIbmCommerceFoundationCommonDatatypesSEOURLType {
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesSEOURLTypeUserData}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    userData?: ComIbmCommerceFoundationCommonDatatypesSEOURLTypeUserData;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesSEOURLTypeParentStoreIdentifier}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    parentStoreIdentifier?: ComIbmCommerceFoundationCommonDatatypesSEOURLTypeParentStoreIdentifier;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    tokenValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    uRLKeywordID?: string;
    /**
     * 
     * @type {Array<ComIbmCommerceFoundationCommonDatatypesSEOURLTypeURLKeyword>}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    uRLKeyword?: Array<ComIbmCommerceFoundationCommonDatatypesSEOURLTypeURLKeyword>;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    usage?: string;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo}
     * @memberof ComIbmCommerceFoundationCommonDatatypesSEOURLType
     */
    siteMapInfo?: ComIbmCommerceFoundationCommonDatatypesSEOURLTypeSiteMapInfo;
}


