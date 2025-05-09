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
import { EXPIRED_PASSWORD_PAGE_ERROR } from "../../../_foundation/constants/common";
import loginIdentity from "../../../_foundation/apis/transaction/loginIdentity.service";
import { storageSessionHandler } from "../../../_foundation/utils/storageUtil";
import personService from "../../../_foundation/apis/transaction/person.service";
import userContextService from "../../../_foundation/apis/transaction/userContext.service";
//Redux
import * as ACTIONS from "../../action-types/user";
import {
  REGISTRATION_SUCCESS_ACTION,
  LOGOUT_SUCCESS_ACTION,
  LOGIN_SUCCESS_ACTION,
  INIT_USER_FROM_STORAGE_SUCCESS_ACTION,
  FETCH_USER_DETAILS_SUCCESS_ACTION,
  SESSION_ERROR_LOGIN_ERROR_ACTION,
  GUEST_LOGIN_SUCCESS_ACTION,
  LOGON_AND_CHANGE_PASSWORD_FAIL_ACTION,
  INIT_USER_FROM_STORAGE_FETCH_CART_ACTION,
} from "../../actions/user";
import { WISHLIST_RESET_ACTION } from "../../actions/wish-list";
import { userLastUpdatedSelector } from "../../selectors/user";
import { USER_CONTEXT_REQUEST_SUCCESS_ACTION } from "../../actions/context";
import { ENTITLED_ORG_ACTION } from "../../actions/organization";
import { FETCH_CONTRACT_REQUESTED_ACTION } from "../../actions/contract";

function* loginAndFetchDetail(payload: any) {
  const response = yield call(loginIdentity.login, payload);
  const _user = response.data;
  if (payload?.query?.rememberMe) {
    //add rememberMe true to user state
    _user["rememberMe"] = payload.query.rememberMe;
  }
  yield put(LOGIN_SUCCESS_ACTION(_user));

  const response2 = yield call(personService.findPersonBySelf, {
    widget: payload.widget,
  });
  const loginPayload2 = response2.data;
  yield put(FETCH_USER_DETAILS_SUCCESS_ACTION(loginPayload2));

  if (payload?.checkoutFn) {
    payload.checkoutFn();
  }
}

const preProcessLogonAndChangePasswordError = (error: any) => {
  if (error?.isAxiosError && error.response?.data?.errors && error.response.data.errors[0]) {
    return {
      ...error.response.data.errors[0],
      [EXPIRED_PASSWORD_PAGE_ERROR]: true,
    };
  } else {
    return {
      errorMessage: error.toLocaleString(),
      [EXPIRED_PASSWORD_PAGE_ERROR]: true,
    };
  }
};

export function* logonAndChangePassword(action: any) {
  try {
    const payload = action.payload;
    yield* loginAndFetchDetail(payload);
  } catch (error) {
    yield put(LOGON_AND_CHANGE_PASSWORD_FAIL_ACTION(preProcessLogonAndChangePasswordError(error)));
  }
}

export function* login(action: any) {
  try {
    const payload = action.payload;
    yield* loginAndFetchDetail(payload);
  } catch (error) {
    yield put({ type: ACTIONS.LOGIN_ERROR, error });
  }
}

export function* sessionErrorReLogin(action: any) {
  try {
    const payload = action.payload;
    const currentUser = storageSessionHandler.getCurrentUserAndLoadAccount();
    if (currentUser?.rememberMe) {
      payload.query
        ? (payload.query.rememberMe = currentUser.rememberMe)
        : (payload.query = { rememberMe: currentUser.rememberMe });
    }
    storageSessionHandler.removeCurrentUser();
    yield* loginAndFetchDetail(payload);
  } catch (error: any) {
    if (error && error.response && error.response.data && error.response.data.errors && error.response.data.errors[0]) {
      yield put(SESSION_ERROR_LOGIN_ERROR_ACTION(error.response.data.errors[0]));
    }
  }
}

export function* logout(action: any) {
  const payload = action.payload;
  const logoutPayload = {
    ...payload,
    // HC-41575 remove rememberMe from logout
  };
  try {
    yield call(loginIdentity.logout, payload);
    yield put(LOGOUT_SUCCESS_ACTION(logoutPayload));
    yield put(WISHLIST_RESET_ACTION());
  } catch (error) {
    yield put({ type: ACTIONS.LOGOUT_ERROR, error });
    //still need to clear user token, event though logout fail to avoid infinite loop
    yield put(LOGOUT_SUCCESS_ACTION(payload));
    yield put(WISHLIST_RESET_ACTION());
  }
}

export function* sessionErrorLogout(action: any) {
  const payload = action.payload;
  try {
    yield call(loginIdentity.logout, payload);
    yield put(LOGOUT_SUCCESS_ACTION(payload));
    yield put(WISHLIST_RESET_ACTION());
  } catch (error) {
    yield put({ type: ACTIONS.LOGOUT_ERROR, error });
    //still need to clear user token, event though logout fail to avoid infinite loop
    yield put(LOGOUT_SUCCESS_ACTION(payload));
    yield put(WISHLIST_RESET_ACTION());
  }
}

export function* registration(action: any) {
  try {
    const payload = action.payload;
    const response = yield call(personService.registerPerson, payload);

    const registrationPayload = response.data;
    if (payload?.query?.rememberMe) {
      registrationPayload["rememberMe"] = payload.query.rememberMe;
    }
    yield put(REGISTRATION_SUCCESS_ACTION(registrationPayload));

    const response2 = yield call(personService.findPersonBySelf, {
      widget: payload.widget,
    });
    const registrationPayload2 = response2.data;
    yield put(FETCH_USER_DETAILS_SUCCESS_ACTION(registrationPayload2));
  } catch (error) {
    yield put({ type: ACTIONS.REGISTRATION_ERROR, error });
  }
}

export function* initStateFromStorage(action: any) {
  try {
    let currentUser = storageSessionHandler.getCurrentUserAndLoadAccount();
    if (currentUser === null) {
      // remember me case
      const response = yield call(personService.findPersonNameBySelf, {
        ...action.payload,
      });
      const { firstName, lastName } = response.data;
      if (lastName) {
        currentUser = {
          rememberMe: true,
          details: {
            firstName,
            lastName,
          },
        };
      }
    }
    yield put(INIT_USER_FROM_STORAGE_SUCCESS_ACTION(currentUser));
    if (currentUser && currentUser.WCToken) {
      const response2 = yield call(personService.findPersonBySelf, {
        ...action.payload,
      });
      const loginPayload2 = response2.data;
      yield put(FETCH_USER_DETAILS_SUCCESS_ACTION(loginPayload2));
    }
    yield put(INIT_USER_FROM_STORAGE_FETCH_CART_ACTION(currentUser));
    const response3 = yield call(userContextService.getContextData, { ...action.payload });
    const userPayload = response3.data;
    yield put(USER_CONTEXT_REQUEST_SUCCESS_ACTION({ ...userPayload }));
    yield put(ENTITLED_ORG_ACTION({ ...action.payload }));
    yield put(FETCH_CONTRACT_REQUESTED_ACTION({ ...action.payload, userContext: userPayload }));
  } catch (e) {
    console.warn(e);
  }
}

export function* updateStateFromStorage(action: any) {
  try {
    const currentUser = storageSessionHandler.getCurrentUserAndLoadAccount();
    if (currentUser && currentUser.forUserId) {
      return;
    }
    const userLastUpdated = yield select(userLastUpdatedSelector);
    if (currentUser && currentUser.lastUpdated && (!userLastUpdated || userLastUpdated < currentUser.lastUpdated)) {
      yield put(INIT_USER_FROM_STORAGE_SUCCESS_ACTION(currentUser));
      if (currentUser.isGuest) {
        yield put(GUEST_LOGIN_SUCCESS_ACTION(null));
      } else {
        yield put(LOGIN_SUCCESS_ACTION(null));
      }
    }
  } catch (e) {
    console.warn(e);
  }
}
