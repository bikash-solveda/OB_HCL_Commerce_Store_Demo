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

import { TaskGroupIBMAdminAllItemTaskGroupApprovers } from './task-group-ibmadmin-all-item-task-group-approvers';
import { TaskGroupIBMAdminAllItemTaskGroupComments } from './task-group-ibmadmin-all-item-task-group-comments';
import { TaskGroupIBMAdminAllItemUserDataField } from './task-group-ibmadmin-all-item-user-data-field';

/**
 * 
 * @export
 * @interface TaskGroupIBMAdminAllItem
 */
export interface TaskGroupIBMAdminAllItem {
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    approvalDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskGroupIBMAdminAllItem
     */
    parentWorkspaceManagerID?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    taskGroupID?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    taskGroupName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskGroupIBMAdminAllItem
     */
    quickPublish?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    parentWorkspaceID?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    parentWorkspaceExternalIdentifier?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskGroupIBMAdminAllItem
     */
    promotionDate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    commitDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    taskGroupDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskGroupIBMAdminAllItem
     */
    recurring?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    parentWorkspaceName?: string;
    /**
     * 
     * @type {Array<TaskGroupIBMAdminAllItemUserDataField>}
     * @memberof TaskGroupIBMAdminAllItem
     */
    userDataField?: Array<TaskGroupIBMAdminAllItemUserDataField>;
    /**
     * 
     * @type {Array<TaskGroupIBMAdminAllItemTaskGroupComments>}
     * @memberof TaskGroupIBMAdminAllItem
     */
    TaskGroupComments?: Array<TaskGroupIBMAdminAllItemTaskGroupComments>;
    /**
     * 
     * @type {Array<TaskGroupIBMAdminAllItemTaskGroupApprovers>}
     * @memberof TaskGroupIBMAdminAllItem
     */
    TaskGroupApprovers?: Array<TaskGroupIBMAdminAllItemTaskGroupApprovers>;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    dueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskGroupIBMAdminAllItem
     */
    taskGroupExternalIdentifier?: string;
}


