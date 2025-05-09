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
import { GeonodeGeonode } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * GeonodeApi - axios parameter creator
 * @export
 */
export const GeonodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Finds geo nodes based on query name. See each query for details on input and output.
         * @summary Get by query
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindByQuery: async (storeId: string, q: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('geonodeFindByQuery', 'storeId', storeId)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('geonodeFindByQuery', 'q', q)
            const localVarPath = `/store/{storeId}/geonode`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by parent unique ID
         * @param {string} storeId The store identifier.
         * @param {string} parentgeoid The parent geo node identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindGeoByParentGeoId: async (storeId: string, parentgeoid: string, responseFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('geonodeFindGeoByParentGeoId', 'storeId', storeId)
            // verify required parameter 'parentgeoid' is not null or undefined
            assertParamExists('geonodeFindGeoByParentGeoId', 'parentgeoid', parentgeoid)
            const localVarPath = `/store/{storeId}/geonode/byParentGeoNode/{parentgeoid}`
                .replace(`{${"storeId"}}`, String(storeId))
                .replace(`{${"parentgeoid"}}`, String(parentgeoid));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (responseFormat !== undefined) {
                localVarQueryParameter['responseFormat'] = responseFormat;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by site top-nodes
         * @param {string} storeId The store identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindTopGeoNodes: async (storeId: string, responseFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('geonodeFindTopGeoNodes', 'storeId', storeId)
            const localVarPath = `/store/{storeId}/geonode/byTopGeoNode`
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

            if (responseFormat !== undefined) {
                localVarQueryParameter['responseFormat'] = responseFormat;
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
 * GeonodeApi - functional programming interface
 * @export
 */
export const GeonodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GeonodeApiAxiosParamCreator(configuration)
    return {
        /**
         * Finds geo nodes based on query name. See each query for details on input and output.
         * @summary Get by query
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async geonodeFindByQuery(storeId: string, q: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.geonodeFindByQuery(storeId, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by parent unique ID
         * @param {string} storeId The store identifier.
         * @param {string} parentgeoid The parent geo node identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async geonodeFindGeoByParentGeoId(storeId: string, parentgeoid: string, responseFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GeonodeGeonode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.geonodeFindGeoByParentGeoId(storeId, parentgeoid, responseFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by site top-nodes
         * @param {string} storeId The store identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async geonodeFindTopGeoNodes(storeId: string, responseFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GeonodeGeonode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.geonodeFindTopGeoNodes(storeId, responseFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GeonodeApi - factory interface
 * @export
 */
export const GeonodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GeonodeApiFp(configuration)
    return {
        /**
         * Finds geo nodes based on query name. See each query for details on input and output.
         * @summary Get by query
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindByQuery(storeId: string, q: string, options?: any): AxiosPromise<object> {
            return localVarFp.geonodeFindByQuery(storeId, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by parent unique ID
         * @param {string} storeId The store identifier.
         * @param {string} parentgeoid The parent geo node identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindGeoByParentGeoId(storeId: string, parentgeoid: string, responseFormat?: string, options?: any): AxiosPromise<GeonodeGeonode> {
            return localVarFp.geonodeFindGeoByParentGeoId(storeId, parentgeoid, responseFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
         * @summary Gets by site top-nodes
         * @param {string} storeId The store identifier.
         * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        geonodeFindTopGeoNodes(storeId: string, responseFormat?: string, options?: any): AxiosPromise<GeonodeGeonode> {
            return localVarFp.geonodeFindTopGeoNodes(storeId, responseFormat, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GeonodeApi - object-oriented interface
 * @export
 * @class GeonodeApi
 * @extends {BaseAPI}
 */
export class GeonodeApi extends BaseAPI {
    /**
     * Finds geo nodes based on query name. See each query for details on input and output.
     * @summary Get by query
     * @param {string} storeId The store identifier.
     * @param {string} q The query name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeonodeApi
     */
    public geonodeFindByQuery(storeId: string, q: string, options?: any) {
        return GeonodeApiFp(this.configuration).geonodeFindByQuery(storeId, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
     * @summary Gets by parent unique ID
     * @param {string} storeId The store identifier.
     * @param {string} parentgeoid The parent geo node identifier.
     * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeonodeApi
     */
    public geonodeFindGeoByParentGeoId(storeId: string, parentgeoid: string, responseFormat?: string, options?: any) {
        return GeonodeApiFp(this.configuration).geonodeFindGeoByParentGeoId(storeId, parentgeoid, responseFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
     * @summary Gets by site top-nodes
     * @param {string} storeId The store identifier.
     * @param {string} [responseFormat] The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeonodeApi
     */
    public geonodeFindTopGeoNodes(storeId: string, responseFormat?: string, options?: any) {
        return GeonodeApiFp(this.configuration).geonodeFindTopGeoNodes(storeId, responseFormat, options).then((request) => request(this.axios, this.basePath));
    }
}
