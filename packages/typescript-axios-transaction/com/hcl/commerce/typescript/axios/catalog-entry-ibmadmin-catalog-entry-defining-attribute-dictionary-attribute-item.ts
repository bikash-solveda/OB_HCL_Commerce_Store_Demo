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

import { CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes } from './catalog-entry-ibmadmin-catalog-entry-defining-attribute-dictionary-attribute-item-attributes';
import { CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemDescription } from './catalog-entry-ibmadmin-catalog-entry-defining-attribute-dictionary-attribute-item-description';
import { CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemUserDataField } from './catalog-entry-ibmadmin-catalog-entry-defining-attribute-dictionary-attribute-item-user-data-field';

/**
 * 
 * @export
 * @interface CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
 */
export interface CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem {
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    parentCatalogEntryID?: string;
    /**
     * 
     * @type {Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemDescription>}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    description?: Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemDescription>;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    owningStoreDirectory?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    uniqueID?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    parentCatalogEntryPartNumber: string;
    /**
     * 
     * @type {Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes>}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    attributes?: Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemAttributes>;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    partNumber: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    type?: string;
    /**
     * 
     * @type {Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemUserDataField>}
     * @memberof CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItem
     */
    userDataField?: Array<CatalogEntryIBMAdminCatalogEntryDefiningAttributeDictionaryAttributeItemUserDataField>;
}


