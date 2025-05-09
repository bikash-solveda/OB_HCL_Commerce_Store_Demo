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

import { GeonodeGeonodeItemDescription } from './geonode-geonode-item-description';
import { GeonodeGeonodeItemUserDataField } from './geonode-geonode-item-user-data-field';

/**
 * 
 * @export
 * @interface GeonodeGeonodeItem
 */
export interface GeonodeGeonodeItem {
    /**
     * 
     * @type {Array<GeonodeGeonodeItemUserDataField>}
     * @memberof GeonodeGeonodeItem
     */
    userDataField?: Array<GeonodeGeonodeItemUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof GeonodeGeonodeItem
     */
    type?: string;
    /**
     * 
     * @type {Array<GeonodeGeonodeItemDescription>}
     * @memberof GeonodeGeonodeItem
     */
    Description?: Array<GeonodeGeonodeItemDescription>;
    /**
     * 
     * @type {string}
     * @memberof GeonodeGeonodeItem
     */
    uniqueID?: string;
    /**
     * 
     * @type {string}
     * @memberof GeonodeGeonodeItem
     */
    name?: string;
}


