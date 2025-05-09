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
import { SubstitutionparametersSubstitutionparameters } from '../../../../../com/hcl/commerce/typescript/axios';
/**
 * SubstitutionParametersApi - axios parameter creator
 * @export
 */
export const SubstitutionParametersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        substitutionParametersFindByAll: async (storeId: string, q: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'storeId' is not null or undefined
            assertParamExists('substitutionParametersFindByAll', 'storeId', storeId)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('substitutionParametersFindByAll', 'q', q)
            const localVarPath = `/store/{storeId}/seo/substitutionparameters`
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
    }
};

/**
 * SubstitutionParametersApi - functional programming interface
 * @export
 */
export const SubstitutionParametersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubstitutionParametersApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async substitutionParametersFindByAll(storeId: string, q: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubstitutionparametersSubstitutionparameters>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.substitutionParametersFindByAll(storeId, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SubstitutionParametersApi - factory interface
 * @export
 */
export const SubstitutionParametersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubstitutionParametersApiFp(configuration)
    return {
        /**
         * Gets the feature version data.
         * @summary Get feature version data
         * @param {string} storeId The store identifier.
         * @param {string} q The query name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        substitutionParametersFindByAll(storeId: string, q: string, options?: any): AxiosPromise<SubstitutionparametersSubstitutionparameters> {
            return localVarFp.substitutionParametersFindByAll(storeId, q, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubstitutionParametersApi - object-oriented interface
 * @export
 * @class SubstitutionParametersApi
 * @extends {BaseAPI}
 */
export class SubstitutionParametersApi extends BaseAPI {
    /**
     * Gets the feature version data.
     * @summary Get feature version data
     * @param {string} storeId The store identifier.
     * @param {string} q The query name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubstitutionParametersApi
     */
    public substitutionParametersFindByAll(storeId: string, q: string, options?: any) {
        return SubstitutionParametersApiFp(this.configuration).substitutionParametersFindByAll(storeId, q, options).then((request) => request(this.axios, this.basePath));
    }
}
