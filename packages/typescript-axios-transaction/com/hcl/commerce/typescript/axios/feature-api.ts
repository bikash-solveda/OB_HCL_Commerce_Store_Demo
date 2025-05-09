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

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../../../../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../../../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../../../../base';
// @ts-ignore
import { ComIbmCommerceRestConfigFeatureHandlerFeatureResponse } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * FeatureApi - axios parameter creator
 * @export
 */
export const FeatureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Finds all features supported.
         * @param {string} storeId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdFeatureGet: async (storeId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('storeStoreIdFeatureGet', 'storeId', storeId)
            const localVarPath = `/store/{storeId}/feature`
                .replace(`{${"storeId"}}`, String(storeId));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeatureApi - functional programming interface
 * @export
 */
export const FeatureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeatureApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Finds all features supported.
         * @param {string} storeId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeStoreIdFeatureGet(storeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComIbmCommerceRestConfigFeatureHandlerFeatureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeStoreIdFeatureGet(storeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeatureApi - factory interface
 * @export
 */
export const FeatureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeatureApiFp(configuration)
    return {
        /**
         * 
         * @summary Finds all features supported.
         * @param {string} storeId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeStoreIdFeatureGet(storeId: string, options?: any): AxiosPromise<ComIbmCommerceRestConfigFeatureHandlerFeatureResponse> {
            return localVarFp.storeStoreIdFeatureGet(storeId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FeatureApi - object-oriented interface
 * @export
 * @class FeatureApi
 * @extends {BaseAPI}
 */
export class FeatureApi extends BaseAPI {
    /**
     * 
     * @summary Finds all features supported.
     * @param {string} storeId The store identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureApi
     */
    public storeStoreIdFeatureGet(storeId: string, options?: any) {
        return FeatureApiFp(this.configuration).storeStoreIdFeatureGet(storeId, options).then((request) => request(this.axios, this.basePath));
    }
}
