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
import { RootReducerState } from "../reducers";

const contractSelector = (state: RootReducerState) => {
  return state.contract;
};
/*const currentContractIdSelector = (state: RootReducerState) => {
  //let contractId = (state.context?.entitlement?.currentTradingAgreementIds ?? [])[0];
  let contractId = (state.context?.entitlement?.currentTradingAgreementIds ?? []).includes("4000000000000000019")
    ? "4000000000000000019"
    : (state.context?.entitlement?.currentTradingAgreementIds ?? [])[0];
  if (!contractId && state.contract) {
    console.log("inside If");
    //contractId = Object.keys(state.contract)[0];
    contractId = Object.keys(state.contract).includes("4000000000000000019")
      ? "4000000000000000019"
      : Object.keys(state.contract)[0];
  }
  console.log("contract ID 0 = " + contractId);
  return contractId ? String(contractId) : contractId;
};*/

/*const currentContractIdSelector = (state: RootReducerState) => {
  // Set the default contractId to "-31009"
  let contractId = (state.context?.entitlement?.currentTradingAgreementIds ?? []).includes("4000000000000000019")
    ? "4000000000000000019"
    : (state.context?.entitlement?.currentTradingAgreementIds ?? [])[0];

  if (!contractId && state.contract) {
    console.log("inside If");
    contractId = Object.keys(state.contract).includes("4000000000000000019")
      ? "4000000000000000019"
      : Object.keys(state.contract)[0];
  }

  // If no contractId is found, default to "-31009"
  if (!contractId) {
    contractId = "-31009";
  }

  console.log("contract ID = " + contractId);
  return contractId ? String(contractId) : contractId;
};*/

const currentContractIdSelector = (state: RootReducerState) => {
  let contractId = (state.context?.entitlement?.currentTradingAgreementIds ?? [])[0];
  if (!contractId && state.contract) {
    contractId = Object.keys(state.contract)[0];
  }
  return contractId ? String(contractId) : contractId;
};

const currentEntitledContractsSelector = (state: RootReducerState) => {
  return state.context.entitlement?.currentTradingAgreementIds || [];
};

const eligibleContractsSelector = (state: RootReducerState) => {
  return state.context.entitlement?.eligibleTradingAgreementIds || [];
};
export { contractSelector, currentContractIdSelector, currentEntitledContractsSelector, eligibleContractsSelector };
