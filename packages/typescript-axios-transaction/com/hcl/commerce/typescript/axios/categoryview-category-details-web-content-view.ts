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

import { CategoryviewCategoryDetailsWebContentViewMetaData } from './categoryview-category-details-web-content-view-meta-data';
import { CategoryviewCategoryDetailsWebContentViewUserDataField } from './categoryview-category-details-web-content-view-user-data-field';

/**
 * 
 * @export
 * @interface CategoryviewCategoryDetailsWebContentView
 */
export interface CategoryviewCategoryDetailsWebContentView {
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsWebContentView
     */
    url?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsWebContentViewUserDataField>}
     * @memberof CategoryviewCategoryDetailsWebContentView
     */
    userDataField?: Array<CategoryviewCategoryDetailsWebContentViewUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsWebContentView
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsWebContentView
     */
    uniqueID?: string;
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsWebContentViewMetaData>}
     * @memberof CategoryviewCategoryDetailsWebContentView
     */
    MetaData?: Array<CategoryviewCategoryDetailsWebContentViewMetaData>;
}


