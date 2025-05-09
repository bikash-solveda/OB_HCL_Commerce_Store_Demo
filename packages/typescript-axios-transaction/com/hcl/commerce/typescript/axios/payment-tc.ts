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

import { AttributeDetail } from './attribute-detail';
import { Participant } from './participant';
import { PaymentMethodDisplayString } from './payment-method-display-string';
import { PaymentTCAllOf } from './payment-tcall-of';
import { PaymentTCAllOfBillToAddress } from './payment-tcall-of-bill-to-address';
import { PaymentTCAllOfPaymentMethod } from './payment-tcall-of-payment-method';
import { Property } from './property';
import { TermCondition } from './term-condition';
import { TermConditionDescription } from './term-condition-description';

/**
 * @type PaymentTC
 * @export
 */
export type PaymentTC = PaymentTCAllOf & TermCondition;



