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

import { CategoryviewCategoryDetailsSuggestionViewEntry } from './categoryview-category-details-suggestion-view-entry';

/**
 * 
 * @export
 * @interface CategoryviewCategoryDetailsSuggestionView
 */
export interface CategoryviewCategoryDetailsSuggestionView {
    /**
     * 
     * @type {Array<CategoryviewCategoryDetailsSuggestionViewEntry>}
     * @memberof CategoryviewCategoryDetailsSuggestionView
     */
    Entry?: Array<CategoryviewCategoryDetailsSuggestionViewEntry>;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsSuggestionView
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryviewCategoryDetailsSuggestionView
     */
    label?: string;
}


