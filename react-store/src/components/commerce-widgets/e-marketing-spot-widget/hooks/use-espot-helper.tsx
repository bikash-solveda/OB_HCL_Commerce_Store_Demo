/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2022
 *
 *==================================================
 */
//standard libraries
import Axios, { Canceler } from "axios";
import { useEffect, useMemo } from "react";
import getDisplayName from "react-display-name";
import { useDispatch, useSelector } from "react-redux";
import AsyncCall from "../../../../_foundation/gtm/async.service";
//redux
import eSpotService from "../../../../_foundation/apis/transaction/eSpot.service";
import contentControllerService from "../../../../_foundation/apis/dx/contentController.service";
import mLConfigControllerService from "../../../../_foundation/apis/dx/mLConfigController.service";
import { currentContractIdSelector } from "../../../../redux/selectors/contract";
import { CLICK_EVENT_TRIGGERED_ACTION } from "../../../../redux/actions/marketingEvent";
import { ADD_ITEM_ACTION } from "../../../../redux/actions/order";
//custom libraries
import { DISABLED_ESPOT_LIST } from "../../../../_foundation/constants/gtm";
import { Page, Widget } from "../../../../_foundation/constants/seo-config";
import { useSite } from "../../../../_foundation/hooks/useSite";
import { CommerceEnvironment, EMPTY_STRING } from "../../../../constants/common";
import { LOCALE } from "../../../../_foundation/constants/common";
import { localStorageUtil } from "../../../../_foundation/utils/storageUtil";
//hcl packages
import { commonUtil, marketingConstants } from "@hcl-commerce-store-sdk/utils";
import { useLocation } from "react-router";
import { useBreadcrumbTrail } from "../../../../components/commerce-widgets/breadcrumb-trail-widget/hooks/use-breadcrumb-trail";
import { getESpotCommonQuery } from "../../../../_foundation/utils/getESpotCommonQuery";

/**
 * The hook for processing eSpot data.
 * @param widget the widget that contains eSpot.
 * @param page the page that contains this widget.
 * @returns an eSpot object
 */
export const useESpotHelper = (widget: Widget, page: Page) => {
  const widgetName = getDisplayName(widget.widgetName);
  const { breadcrumbs } = useBreadcrumbTrail();
  const { mySite } = useSite();
  const CancelToken = Axios.CancelToken;
  const dispatch = useDispatch();
  const contract = useSelector(currentContractIdSelector);
  const cancels: Canceler[] = [];
  const ESPOT_TYPE_PAGE_SPECIFIC: string = "local";
  const { emsName, emsType } = widget.properties || {};
  const storeID: string = mySite ? mySite.storeID : EMPTY_STRING;
  const catalogID: string = mySite ? mySite.catalogID : EMPTY_STRING;
  //for url parameters
  const { search } = useLocation();
  const searchParams = useMemo(() => {
    return new URLSearchParams(search ?? "");
  }, [search]);
  const initESpot = async (pageName: string) => {
    let eSName = emsName;
    if (emsType === ESPOT_TYPE_PAGE_SPECIFIC) {
      eSName = pageName + eSName;
    }
    const parameters: any = {
      storeId: storeID,
      name: eSName,
      catalogId: catalogID,
      widget: widgetName,
      query: {
        DM_ReturnCatalogGroupId: true,
        DM_FilterResults: false,
        /**
         * other possible eSpot parameters
         * DM_marketingSpotBehavior: 0,1, or 2,
         * -- Example of specifying the customer is viewing a set of product.
         * -- The marketing activity could then display merchandising associations
         * -- of these products.
         * productId: "12345,67890,54321",
         * DM_DisplayProducts: number of products to display,
         * DM_DisplayCategories: number of categories,
         * DM_DisplayContent: number of contents
         * Name: value (pairs, can be cookie name and value),
         * -- content Substitutions
         * DM_SubstitutionName1: ${DM_SubstitutionName1}
         * DM_SubstitutionValue1: ${DM_SubstitutionValue1}
         * -- masked content substitutions: masked values will be masked in trace output.
         * DM_SubstitutionMaskedName1: ${DM_SubstitutionMaskedName1}
         * DM_SubstitutionMaskedValue1: ${DM_SubstitutionMaskedValue1}
         */
        ...getESpotCommonQuery({ page, breadcrumbs }),
      },
      cancelToken: new CancelToken(function executor(c) {
        cancels.push(c);
      }),
    };
    //for url parameters.
    searchParams.forEach((value, key) => {
      parameters.query[key] = value;
    });
    try {
      const res = await eSpotService.findByName(parameters);
      return res.data.MarketingSpotData;
    } catch (e) {
      console.log("espot helper", e);
      return null;
    }
  };

  const allowGAEvent = (eSpotRoot) => !DISABLED_ESPOT_LIST.includes(eSpotRoot.eSpotName);

  const performClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, { eSpotDesc }: any) => {
    dispatch(
      CLICK_EVENT_TRIGGERED_ACTION({
        eSpotDesc,
        widget: widgetName,
      })
    );
    const { contentUrl: url } = eSpotDesc;
    const linkAction = commonUtil.parseContentUrl(url || EMPTY_STRING);
    if (linkAction?.action) {
      event.preventDefault();
      switch (linkAction.action) {
        case "addToCart": {
          const payload = {
            quantity: [1],
            partnumber: linkAction.partnumber,
            contractId: contract,
            cancelToken: new CancelToken((c) => cancels.push(c)),
          };
          dispatch(ADD_ITEM_ACTION(payload));
          break;
        }
        case "addToWishlist":
          //TODO
          break;
      }
    }
    //GA360
    if (mySite.enableGA && allowGAEvent(eSpotDesc)) {
      AsyncCall.sendPromotionClick(eSpotDesc, {
        enableUA: mySite.enableUA,
        enableGA4: mySite.enableGA4,
      });
    }
  };

  const processDxContent = async (dxContentId: string) => {
    const locale =
      localStorageUtil.get(LOCALE)?.split("_")[0] || CommerceEnvironment.dxLanguageMap[mySite.defaultLanguageID];
    const payload = {
      skipErrorSnackbar: true,
      content_id: dxContentId,
      access_type: "dxrest",
      locale,
      widget: widgetName,
      cancelToken: new CancelToken(function executor(c) {
        cancels.push(c);
      }),
    };

    let mlcontentId;
    try {
      const res = await mLConfigControllerService.accessMLSTranslations(payload);
      mlcontentId = res?.data?.translatedItems[locale].id;
    } catch (e) {
      mlcontentId = null;
      console.log(e);
    }

    let _data;
    if (mlcontentId) {
      const payload_translation = {
        content_id: mlcontentId,
        access_type: "dxrest",
        widget: widgetName,
        cancelToken: new CancelToken(function executor(c) {
          cancels.push(c);
        }),
      };

      try {
        const res2 = await contentControllerService.webContentReadContent(payload_translation);
        _data = res2?.data;
      } catch (e) {
        _data = null;
        console.log(e);
      }
    } else {
      try {
        const res3 = await contentControllerService.webContentReadContent(payload);
        _data = res3?.data;
      } catch (e) {
        _data = null;
        console.log(e);
      }
    }

    if (_data?.content) {
      const content = _data.content;
      let contentType = EMPTY_STRING;
      let templateID = _data.links.contentTemplate.href;
      templateID = templateID.split("/content-templates/")[1];
      if (templateID === marketingConstants.CONTENT_TEMPLATE.VIDEO_TEMPLATE_ID) {
        contentType = marketingConstants.CONTENT_TYPE_VIDEO;
      }
      return { dxContentId, content, contentType };
    }
    return { dxContentId };
  };

  useEffect(() => {
    return () => {
      cancels.forEach((cancel) => cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    initESpot,
    allowGAEvent,
    performClick,
    processDxContent,
  };
};
