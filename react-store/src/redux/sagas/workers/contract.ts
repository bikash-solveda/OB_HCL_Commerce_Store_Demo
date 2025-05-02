/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import { call, put, select } from "redux-saga/effects";
//Foundation libraries
import contractService from "../../../_foundation/apis/transaction/contract.service";
import switchContractService from "../../../_foundation/apis/transaction/switchContract.service";
//Redux
import {
  FETCH_CONTRACT_SUCCESS_ACTION,
  FETCH_CONTRACT_ERROR_ACTION,
  CONTRACT_SWITCH_ERROR_ACTION,
} from "../../actions/contract";
import { USER_CONTEXT_REQUEST_ACTION } from "../../actions/context";
import { contractSelector, currentEntitledContractsSelector } from "../../selectors/contract";
import { loginStatusSelector, rememberMeStatusSelector, userIdSelector } from "../../selectors/user";
import { getSite } from "../../../_foundation/hooks/useSite";
import { isEmpty } from "lodash-es";
import { useSelector } from "react-redux";

export function* fetchContract(action: any) {
  try {
    const { userContext, ...payload } = action.payload;
    const siteInfo = getSite();
    const existing = yield select(contractSelector);

    // in B2C envs, the contract is always the same -- we don't need to re-fetch
    if (siteInfo?.isB2B || isEmpty(existing)) {
      const response = yield call(contractService.findEligible, payload);
      yield put(FETCH_CONTRACT_SUCCESS_ACTION({ ...response.data }));
    }

    yield* preSelectContract(payload, userContext);
  } catch (error) {
    yield put(FETCH_CONTRACT_ERROR_ACTION(error));
  }
}

export function* switchContract(action: any) {
  try {
    const { callback, ...payload } = action.payload;
    yield call(switchContractService.changeContract, payload);
    yield put(USER_CONTEXT_REQUEST_ACTION(payload));
    callback && callback();
  } catch (error) {
    yield put(CONTRACT_SWITCH_ERROR_ACTION(error));
  }
}

export function* preSelectContract(payload: any, context?: any) {
  try {
    //fetch first entitled contract and explicitly set it to entitled contract.
    const contracts = yield select(contractSelector);
    let entitledContracts: string[] = context?.entitlement?.currentTradingAgreementIds ?? [];
    if (entitledContracts.length === 0) {
      entitledContracts = yield select(currentEntitledContractsSelector);
    }
    const isLogin = yield select(loginStatusSelector);
    const isUserRemembered = yield select(rememberMeStatusSelector);

    const LOGIN_USER_BUYER_CONTRACT_MAP = getSite()?.storeCfg?.userData?.LOGIN_USER_BUYER_CONTRACT_MAP;
    const userIdSelectorData = yield select(userIdSelector);
    const getContractIdForBuyerId = (mapString: string, userId: string) => {
      const entries = mapString.split("||");
      for (const entry of entries) {
        const [contractId, buyerId] = entry.split(":");
        if (buyerId === userId) {
          return contractId; // return the matching contractId
        }
      }
      return null; // not found
    };

    const getContractId = getContractIdForBuyerId(LOGIN_USER_BUYER_CONTRACT_MAP, userIdSelectorData);
    console.log("entitledContracts = " + entitledContracts);
    console.log(
      "isLogin = " +
        isLogin +
        " isUserRemembered = " +
        isUserRemembered +
        " contract = " +
        Object.keys(contracts)[0] +
        " , userIdSelectorData =" +
        userIdSelectorData +
        " Updated getContractId = " +
        getContractId
    );
    //if (!isUserRemembered && isLogin && entitledContracts.length !== 1) {
    if (isLogin && getContractId) {
      //const contract = Object.keys(contracts)[0];
      console.log("If contract = " + getContractId);
      yield call(switchContractService.changeContract, {
        query: { contractId: String(getContractId) },
        ...payload,
      });
      yield put(USER_CONTEXT_REQUEST_ACTION(payload));
    } /* else {

      console.log("else contract = " + contracts);
      yield call(switchContractService.changeContract, {
        query: { contractId: "-31009" },
        ...payload,
      });
      yield put(USER_CONTEXT_REQUEST_ACTION(payload));
    }*/
  } catch (error) {
    yield put(CONTRACT_SWITCH_ERROR_ACTION(error));
  }
}
