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
export const isProductOrVariant = ({ numberOfSKUs: n, catalogEntryTypeCode: c }) =>
  parseInt(n) > 1 && (c === "ProductBean" || c === "VariantBean");
