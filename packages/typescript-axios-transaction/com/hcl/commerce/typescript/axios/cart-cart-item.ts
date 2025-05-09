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

import { CartCartItemItemAttributes } from './cart-cart-item-item-attributes';
import { CartCartItemOrderItemExtendAttribute } from './cart-cart-item-order-item-extend-attribute';
import { CartCartItemUserDataField } from './cart-cart-item-user-data-field';
import { CartOrderItemAmount } from './cart-order-item-amount';
import { CartOrderItemShippingInfo } from './cart-order-item-shipping-info';
import { CartUsableShippingChargePolicy } from './cart-usable-shipping-charge-policy';
import { ComIbmCommerceFoundationCommonDatatypesDescriptionType } from './com-ibm-commerce-foundation-common-datatypes-description-type';
import { ComIbmCommerceFoundationCommonDatatypesStoreIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-store-identifier-type';
import { ComIbmCommerceOrderFacadeDatatypesAdjustmentRequirementType } from './com-ibm-commerce-order-facade-datatypes-adjustment-requirement-type';
import { ComIbmCommerceOrderFacadeDatatypesOrderItemComponentType } from './com-ibm-commerce-order-facade-datatypes-order-item-component-type';

/**
 * 
 * @export
 * @interface CartCartItem
 */
export interface CartCartItem {
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    timeReleased?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    orderItemFulfillmentStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    externalOrderItemID?: string;
    /**
     * 
     * @type {Array<ComIbmCommerceOrderFacadeDatatypesAdjustmentRequirementType>}
     * @memberof CartCartItem
     */
    adjustmentRequirement?: Array<ComIbmCommerceOrderFacadeDatatypesAdjustmentRequirementType>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    orderItemInventoryStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    comments?: string;
    /**
     * 
     * @type {Array<CartCartItemOrderItemExtendAttribute>}
     * @memberof CartCartItem
     */
    orderItemExtendAttribute?: Array<CartCartItemOrderItemExtendAttribute>;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesDescriptionType}
     * @memberof CartCartItem
     */
    fulfillmentCenterDescription?: ComIbmCommerceFoundationCommonDatatypesDescriptionType;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    UOM?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    fulfillmentCenterName?: string;
    /**
     * 
     * @type {CartOrderItemShippingInfo}
     * @memberof CartCartItem
     */
    orderItemShippingInfo?: CartOrderItemShippingInfo;
    /**
     * 
     * @type {ComIbmCommerceFoundationCommonDatatypesStoreIdentifierType}
     * @memberof CartCartItem
     */
    storeIdentifier?: ComIbmCommerceFoundationCommonDatatypesStoreIdentifierType;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    availableDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    timeShipped?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    offerID?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    fulfillmentCenterId?: string;
    /**
     * 
     * @type {Array<CartCartItemUserDataField>}
     * @memberof CartCartItem
     */
    userDataField?: Array<CartCartItemUserDataField>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    productId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    expectedShipDate?: string;
    /**
     * 
     * @type {Array<CartCartItemItemAttributes>}
     * @memberof CartCartItem
     */
    itemAttributes?: Array<CartCartItemItemAttributes>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    ownerID?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    correlationGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    contractId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    orderItemStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    orderItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    configurationID?: string;
    /**
     * 
     * @type {CartOrderItemAmount}
     * @memberof CartCartItem
     */
    orderItemAmount?: CartOrderItemAmount;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    lastUpdateDate?: string;
    /**
     * 
     * @type {Array<ComIbmCommerceOrderFacadeDatatypesOrderItemComponentType>}
     * @memberof CartCartItem
     */
    orderItemComponent?: Array<ComIbmCommerceOrderFacadeDatatypesOrderItemComponentType>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    partNumber: string;
    /**
     * 
     * @type {number}
     * @memberof CartCartItem
     */
    quantity?: number;
    /**
     * 
     * @type {Array<CartUsableShippingChargePolicy>}
     * @memberof CartCartItem
     */
    usableShippingChargePolicy?: Array<CartUsableShippingChargePolicy>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    fulfillmentCenterOwnerId?: string;
}


