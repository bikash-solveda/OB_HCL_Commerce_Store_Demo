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
export type Category = {
  id: string;
  name: string;
  seo?: { href: string };
  children?: Category[];
};
