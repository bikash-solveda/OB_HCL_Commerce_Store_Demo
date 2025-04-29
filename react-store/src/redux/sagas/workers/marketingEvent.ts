/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020, 2021
 *
 *==================================================
 */
//Standard libraries
import { select } from "redux-saga/effects";
//hcl libraries
import { marketingConstants } from "@hcl-commerce-store-sdk/utils";

//Foundation libraries
import eventService from "../../../_foundation/apis/transaction/event.service";

//custom library
import { wcTokenSelector } from "../../selectors/user";
import { Meta, Product } from "_foundation/types/product";

const getSearchPayload = (payload: { product: Product }) => {
  const { product } = payload;
  const { metaData } = product;
  const { activity, espot, experiment, testelement } = metaData as Meta;

  const body: Record<string, string> = {
    evtype: "CpgnClick",
    expDataType: "CatalogEntryId",
    intv_id: activity,
    mpe_id: espot,
    experimentId: experiment,
    testElementId: testelement,
    expDataUniqueID: product.id,
  };
  return body;
};

const getESpotPayload = (payload: any) => {
  const { eSpotDesc, eSpotRoot } = payload;
  const body: Record<string, string> = {
    evtype: "CpgnClick",
    DM_ReqCmd: "",
    intv_id: eSpotDesc.activityIdentifierID,
    expDataType: eSpotDesc.baseMarketingSpotDataType,
    mpe_id: eSpotDesc.marketingSpotIdentifier || eSpotRoot?.marketingSpotIdentifier,
    expDataUniqueID: eSpotDesc.baseMarketingSpotActivityID,
  };

  if (
    eSpotDesc.baseMarketingSpotDataType === marketingConstants.MARKETING_SPOT_DATA_TYPE.CATALOG_ENTRY_ID ||
    eSpotDesc.baseMarketingSpotDataType === marketingConstants.MARKETING_SPOT_DATA_TYPE.CATALOG_ENTRY
  ) {
    body.productId = eSpotDesc.baseMarketingSpotActivityID || "";
  }

  if (eSpotDesc.baseMarketingSpotDataType === marketingConstants.MARKETING_SPOT_DATA_TYPE.CATALOG_GROUP_ID) {
    body.categoryId = eSpotDesc.filteredResultId || eSpotDesc.baseMarketingSpotActivityID || "";
  }

  if (eSpotDesc.experimentResult) {
    const expResult = eSpotDesc.experimentResult[0];
    Object.assign(body, {
      experimentId: expResult.experimentResultId,
      testElementId: expResult.experimentResultTestElementId,
      controlElement: expResult.controlElement,
    });
  }
  return body;
};

function* performClickEvent(action: any) {
  const WCToken = yield select(wcTokenSelector);
  if (WCToken) {
    // only track clicks of guest (login-as-guest) or registered-users
    const { payload } = action;
    const { type, product, eSpotDesc, eSpotRoot, ...rest } = payload;
    const body = type === "search" ? getSearchPayload(payload) : getESpotPayload(payload);
    const params = { body, ...rest };
    try {
      yield eventService.handleClickInfo(params);
    } catch (e) {
      console.warn(e);
    }
  }
}

function* performTriggerMarketing(action: any) {
  //allow the call for generic user, we have persistent cookie now.
  try {
    const params = {
      body: action.payload,
    };
    if (action?.payload?.widget) {
      params["widget"] = action.payload.widget;
      delete action.payload.widget;
    }
    yield eventService.triggerMarketing(params);
  } catch (e) {
    console.warn(e);
  }
}

export { performClickEvent, performTriggerMarketing };
