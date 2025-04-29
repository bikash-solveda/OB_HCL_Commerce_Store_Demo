/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2023
 *
 *==================================================
 */
import { Page } from "../../_foundation/constants/seo-config";
import { CATEGORY_DISPLAY, PRODUCT_DISPLAY, TOP_CATEGORIES_DISPLAY } from "../../constants/marketing";

export const getESpotCommonQuery = ({ page, breadcrumbs }: { page: Page; breadcrumbs: any[] }) => {
  return {
    ...(page.tokenName === "CategoryToken" && { categoryId: page.tokenValue, DM_ReqCmd: CATEGORY_DISPLAY }),
    ...(page.tokenName === "ProductToken" && {
      productId: page.tokenValue,
      DM_ReqCmd: PRODUCT_DISPLAY,
      categoryId: breadcrumbs?.at(breadcrumbs.length - 2)?.value ?? "",
    }),
    ...(page.externalContext?.identifier === "HomePage" && {
      DM_ReqCmd: TOP_CATEGORIES_DISPLAY,
    }),
  };
};
