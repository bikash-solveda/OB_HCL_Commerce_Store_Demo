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
import { ConfigurationConfiguration } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * ConfigurationApi - axios parameter creator
 * @export
 */
export const ConfigurationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets configuration details by the specified identifier.
         * @summary Get details by ID
         * @param {string} storeId The store identifier.
         * @param {string} configurationId The configuration identifier. This is mandatory parameter and cannot be null or empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurationFindByConfigurationId: async (storeId: string, configurationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('configurationFindByConfigurationId', 'storeId', storeId)
            // verify required parameter 'configurationId' is not null or undefined
            assertParamExists('configurationFindByConfigurationId', 'configurationId', configurationId)
            const localVarPath = `/store/{storeId}/configuration/{configurationId}`
                .replace(`{${"storeId"}}`, String(storeId))
                .replace(`{${"configurationId"}}`, String(configurationId));
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
        /**
         * Gets configuration details by one or more specified identifiers.
         * @summary Get details by specified identifiers
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {string} configurationId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurationFindByQuery: async (storeId: string, q: string, configurationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('configurationFindByQuery', 'storeId', storeId)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('configurationFindByQuery', 'q', q)
            // verify required parameter 'configurationId' is not null or undefined
            assertParamExists('configurationFindByQuery', 'configurationId', configurationId)
            const localVarPath = `/store/{storeId}/configuration`
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

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (configurationId !== undefined) {
                localVarQueryParameter['configurationId'] = configurationId;
            }


    
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
 * ConfigurationApi - functional programming interface
 * @export
 */
export const ConfigurationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigurationApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets configuration details by the specified identifier.
         * @summary Get details by ID
         * @param {string} storeId The store identifier.
         * @param {string} configurationId The configuration identifier. This is mandatory parameter and cannot be null or empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configurationFindByConfigurationId(storeId: string, configurationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigurationConfiguration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configurationFindByConfigurationId(storeId, configurationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets configuration details by one or more specified identifiers.
         * @summary Get details by specified identifiers
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {string} configurationId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configurationFindByQuery(storeId: string, q: string, configurationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigurationConfiguration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configurationFindByQuery(storeId, q, configurationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConfigurationApi - factory interface
 * @export
 */
export const ConfigurationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigurationApiFp(configuration)
    return {
        /**
         * Gets configuration details by the specified identifier.
         * @summary Get details by ID
         * @param {string} storeId The store identifier.
         * @param {string} configurationId The configuration identifier. This is mandatory parameter and cannot be null or empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurationFindByConfigurationId(storeId: string, configurationId: string, options?: any): AxiosPromise<ConfigurationConfiguration> {
            return localVarFp.configurationFindByConfigurationId(storeId, configurationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets configuration details by one or more specified identifiers.
         * @summary Get details by specified identifiers
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {string} configurationId The store identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurationFindByQuery(storeId: string, q: string, configurationId: string, options?: any): AxiosPromise<ConfigurationConfiguration> {
            return localVarFp.configurationFindByQuery(storeId, q, configurationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export class ConfigurationApi extends BaseAPI {
    /**
     * Gets configuration details by the specified identifier.
     * @summary Get details by ID
     * @param {string} storeId The store identifier.
     * @param {string} configurationId The configuration identifier. This is mandatory parameter and cannot be null or empty.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public configurationFindByConfigurationId(storeId: string, configurationId: string, options?: any) {
        return ConfigurationApiFp(this.configuration).configurationFindByConfigurationId(storeId, configurationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets configuration details by one or more specified identifiers.
     * @summary Get details by specified identifiers
     * @param {string} storeId The store identifier.
     * @param {string} q The query name.
     * @param {string} configurationId The store identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public configurationFindByQuery(storeId: string, q: string, configurationId: string, options?: any) {
        return ConfigurationApiFp(this.configuration).configurationFindByQuery(storeId, q, configurationId, options).then((request) => request(this.axios, this.basePath));
    }
}
