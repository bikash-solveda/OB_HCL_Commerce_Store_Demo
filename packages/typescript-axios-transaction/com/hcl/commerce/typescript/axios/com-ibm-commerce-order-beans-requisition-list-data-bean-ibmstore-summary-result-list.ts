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

import { ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultListUserRegistration } from './com-ibm-commerce-order-beans-requisition-list-data-bean-ibmstore-summary-result-list-user-registration';

/**
 * 
 * @export
 * @interface ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
 */
export interface ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList {
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    lastUpdate?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    organizationId?: string;
    /**
     * 
     * @type {Array<ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultListUserRegistration>}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    userRegistration?: Array<ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultListUserRegistration>;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    storeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    memberId?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof ComIbmCommerceOrderBeansRequisitionListDataBeanIBMStoreSummaryResultList
     */
    status?: string;
}


