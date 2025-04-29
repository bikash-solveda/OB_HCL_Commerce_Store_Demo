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
export type ResponseErrorResponseDataError = {
  errorCode: string;
  errorKey: string;
};

export type ResponseErrorResponseData = {
  errorCode?: string;
  errorMessage?: string;
  code?: string;
  errors: ResponseErrorResponseDataError[];
};

export type ResponseErrorResponse = {
  status: number;
  data: ResponseErrorResponseData;
};

export type ResponseError = {
  isAxiosError: boolean;
  config: {
    url: string;
    method: string;
  };
  response: ResponseErrorResponse;
};
