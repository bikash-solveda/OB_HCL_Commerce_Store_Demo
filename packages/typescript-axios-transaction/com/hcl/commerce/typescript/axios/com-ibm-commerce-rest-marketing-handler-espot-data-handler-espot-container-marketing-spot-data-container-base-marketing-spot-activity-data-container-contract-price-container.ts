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


/**
 * Structure containing an contract price.
 * @export
 * @interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
 */
export interface ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer {
    /**
     * Major version.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    majorVersionNumber?: string;
    /**
     * Date of last update.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    lastUpdate?: string;
    /**
     * End date.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    endDate?: string;
    /**
     * Description of the offer price.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    description?: string;
    /**
     * Precedence of contract.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    precedence?: string;
    /**
     * Unit of measure for minimumQuantity and maximumQuantity.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    quantityUnit?: string;
    /**
     * Minor version.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    minorVersionNumber?: string;
    /**
     * Start date.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    startDate?: string;
    /**
     * A uniquely identifying number that identifies the contract price.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    qualifier?: string;
    /**
     * Contact name.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    name?: string;
    /**
     * Currency of the offer price.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    currency?: string;
    /**
     * Maximum quantity.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    maximumQuantity?: string;
    /**
     * Minimum quantity.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    minimumQuantity?: string;
    /**
     * Unit price in other currencies.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    alternativeCurrencyPrice?: string;
    /**
     * Owner of the contract.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    ownerID?: string;
    /**
     * Quantity of a unit.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    quantity?: string;
    /**
     * The contract price.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    contractPrice?: string;
    /**
     * Origin of the contract.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    origin?: string;
    /**
     * Contract identifier the offer price is associated with.
     * @type {string}
     * @memberof ComIbmCommerceRestMarketingHandlerESpotDataHandlerESpotContainerMarketingSpotDataContainerBaseMarketingSpotActivityDataContainerContractPriceContainer
     */
    contractID?: string;
}


