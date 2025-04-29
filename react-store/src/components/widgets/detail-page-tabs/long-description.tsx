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
import { StyledTypography } from "@hcl-commerce-store-sdk/react-component";
import { SxProps } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import { FC } from "react";

export const LongDescription: FC<{
  longDesc: string;
  components?: string[];
  typographySX?: SxProps;
}> = ({ longDesc, components, typographySX = { maxWidth: "65ch" } }) => (
  <>
    <StyledTypography component="div" sx={typographySX}>
      {HTMLReactParser(longDesc)}
    </StyledTypography>
    {components ? (
      <ul>
        {components.map((v, key) => (
          <li {...{ key }}>{v}</li>
        ))}
      </ul>
    ) : null}
  </>
);
