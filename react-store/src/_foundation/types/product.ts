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

export type Meta = {
  activity: string;
  espot: string;
  experiment: string;
  experimentName: string;
  price: string;
  testElementName: string;
  testelement: string;
  searchExecution: {
    searchTerm: string;
    searchRule: Record<string, any>;
    nlp: {
      pos: string;
    };
    customFields: Record<string, any>;
  }[];
};

export type Product = {
  id: string;
  partNumber: string;
  name: string;
  thumbnail: string;
  attributes: Record<string, any>[];
  metaData?: Meta;
  seo?: { href?: string };
  type: string;
} & Record<string, any>;
