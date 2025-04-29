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
export type ProductDetailAttribute = {
  identifier: string;
  name: string;
  values: {
    identifier: string;
    value: string;
  }[];
};
