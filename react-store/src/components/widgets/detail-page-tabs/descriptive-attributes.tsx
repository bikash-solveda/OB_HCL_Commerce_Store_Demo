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
import { StyledBox, StyledTypography } from "@hcl-commerce-store-sdk/react-component";
import { uniqWith } from "lodash-es";
import { FC } from "react";
import { ProductDetailAttribute } from "_foundation/types/product-detail-attribute";

const comparator = (l, r) => l.value === r.value;
const empty = [];
const sx = { fontWeight: "bold" };

export const DescriptiveAttributes: FC<{
  partNumber: string;
  attributes?: ProductDetailAttribute[];
}> = ({ partNumber, attributes = empty }) => (
  <StyledBox id={`product-details-container_${partNumber}`}>
    {attributes.map(({ identifier, name, values = empty }) => (
      <StyledBox key={identifier} id={`product_attribute_${partNumber}`}>
        <StyledTypography component="span" sx={sx} id={`product_desc_attribute_name_${identifier}_${partNumber}`}>
          {`${name}: `}
        </StyledTypography>
        {uniqWith(values, comparator).map(({ identifier: vIdentifier, value }, i, all) => (
          <StyledTypography
            key={vIdentifier}
            id={`product_attribute_value_${vIdentifier}_${partNumber}`}
            {...(all.length === 1 && { component: "span" })}>
            {value}
          </StyledTypography>
        ))}
      </StyledBox>
    ))}
  </StyledBox>
);
