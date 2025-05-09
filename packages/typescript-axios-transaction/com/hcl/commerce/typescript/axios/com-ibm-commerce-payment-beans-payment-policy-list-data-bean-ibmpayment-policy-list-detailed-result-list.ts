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

import { ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultListPaymentPolicyInfoUsableWithoutTA } from './com-ibm-commerce-payment-beans-payment-policy-list-data-bean-ibmpayment-policy-list-detailed-result-list-payment-policy-info-usable-without-ta';

/**
 * 
 * @export
 * @interface ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList
 */
export interface ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList {
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList
     */
    secondaryRC?: number;
    /**
     * 
     * @type {Array<ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultListPaymentPolicyInfoUsableWithoutTA>}
     * @memberof ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList
     */
    paymentPolicyInfoUsableWithoutTA?: Array<ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultListPaymentPolicyInfoUsableWithoutTA>;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ComIbmCommercePaymentBeansPaymentPolicyListDataBeanIBMPaymentPolicyListDetailedResultList
     */
    primaryRC?: number;
}


