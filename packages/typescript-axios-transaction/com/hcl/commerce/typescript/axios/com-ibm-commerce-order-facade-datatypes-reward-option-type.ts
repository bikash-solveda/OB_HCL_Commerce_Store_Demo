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

import { ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeAdjustment } from './com-ibm-commerce-order-facade-datatypes-reward-option-type-adjustment';
import { ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardChoice } from './com-ibm-commerce-order-facade-datatypes-reward-option-type-reward-choice';
import { ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardOptionIdentifier } from './com-ibm-commerce-order-facade-datatypes-reward-option-type-reward-option-identifier';
import { ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardSpecification } from './com-ibm-commerce-order-facade-datatypes-reward-option-type-reward-specification';
import { ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeUserData } from './com-ibm-commerce-order-facade-datatypes-reward-option-type-user-data';

/**
 * 
 * @export
 * @interface ComIbmCommerceOrderFacadeDatatypesRewardOptionType
 */
export interface ComIbmCommerceOrderFacadeDatatypesRewardOptionType {
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardChoice}
     * @memberof ComIbmCommerceOrderFacadeDatatypesRewardOptionType
     */
    rewardChoice?: ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardChoice;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeUserData}
     * @memberof ComIbmCommerceOrderFacadeDatatypesRewardOptionType
     */
    userData?: ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeUserData;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardSpecification}
     * @memberof ComIbmCommerceOrderFacadeDatatypesRewardOptionType
     */
    rewardSpecification?: ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardSpecification;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardOptionIdentifier}
     * @memberof ComIbmCommerceOrderFacadeDatatypesRewardOptionType
     */
    rewardOptionIdentifier: ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeRewardOptionIdentifier;
    /**
     * 
     * @type {ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeAdjustment}
     * @memberof ComIbmCommerceOrderFacadeDatatypesRewardOptionType
     */
    adjustment?: ComIbmCommerceOrderFacadeDatatypesRewardOptionTypeAdjustment;
}


