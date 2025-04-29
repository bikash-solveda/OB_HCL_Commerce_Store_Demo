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
//Redux
import { REGISTERED, GUEST, GENERIC } from "../../constants/user";
import { RootReducerState } from "../reducers";

const userTypeSelector = (state: RootReducerState) => {
  if (state.user.userLoggedIn) {
    return REGISTERED;
  } else if (state.user.isGuest) {
    return GUEST;
  } else {
    return GENERIC;
  }
};

const loginStatusSelector = (state: RootReducerState) => {
  return state.user.userLoggedIn || state.user.rememberMe || false;
};

/**
 * remembered but logged out.
 */
const rememberMeStatusSelector = (state: RootReducerState) => {
  return state.user.rememberMe && !state.user.userLoggedIn;
};

const loginErrorMsgSelector = (state: RootReducerState) => {
  return state.user.userLoginErrorMsg;
};
const guestStatusSelector = (state: RootReducerState) => {
  return state.user.isGuest || false;
};
const rememberMeSelector = (state: RootReducerState) => {
  return state.user.rememberMe || false;
};
const wcTokenSelector = (state: RootReducerState) => {
  return state.user.WCToken;
};
const wcTrustedTokenSelector = (state: RootReducerState) => {
  return state.user.WCTrustedToken;
};

const logonIdSelector = (state: RootReducerState) => {
  return state.user.details?.logonId || "";
};

const userIdSelector = (state: RootReducerState) => {
  return state.user.userId;
};

const forUserIdSelector = (state: RootReducerState) => {
  return state.user.forUserId;
};

const userNameSelector = (state: RootReducerState) => {
  const firstName = state.user.details?.firstName || "";
  const lastName = state.user.details?.lastName || "";
  return { firstName, lastName };
};

const userInitStatusSelector = (state: RootReducerState) => {
  return state.user.initiatedFromStorage;
};

const userLastUpdatedSelector = (state: RootReducerState) => {
  return state.user.lastUpdated;
};

const registrationStatusSelector = (state: RootReducerState) => {
  return state.user.userRegistration || false;
};

const fetchForUserDetailsCompletedSelector = (state: RootReducerState) => {
  return state.user.fetchForUserDetailsCompleted || false;
};

export {
  loginStatusSelector,
  loginErrorMsgSelector,
  guestStatusSelector,
  wcTokenSelector,
  wcTrustedTokenSelector,
  logonIdSelector,
  registrationStatusSelector,
  userNameSelector,
  userIdSelector,
  userInitStatusSelector,
  userLastUpdatedSelector,
  forUserIdSelector,
  rememberMeSelector,
  userTypeSelector,
  rememberMeStatusSelector,
  fetchForUserDetailsCompletedSelector,
};
