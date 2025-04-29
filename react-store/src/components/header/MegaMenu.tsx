/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import React, { useState } from "react";
//Custom libraries
import MegaMenuColumn from "./MegaMenuColumn";
//UI
import { StyledGrid } from "@hcl-commerce-store-sdk/react-component";
import { Category } from "_foundation/types/category";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSite } from "_foundation/hooks/useSite";

interface MegaMenuProps {
  pages?: Category[];
  closeMegaMenu?: any;
}

/**
 * MegaMenu component
 * displays top category links in desktop/mobile view
 * @param props
 */
const MegaMenu: React.FC<MegaMenuProps> = ({ pages, closeMegaMenu }) => {
  const [expanded, setExpanded] = useState<string>("");
  const handleChange = (pageId: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? pageId : "");
  };
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const { mySite: site } = useSite();

  return (
    <>
      {pages?.map((page) => (
        <StyledGrid item xs={12} sm={4} md={3} lg={2} key={page.id}>
          <MegaMenuColumn
            page={page}
            levelExpanded={expanded}
            onChange={handleChange(page.id)}
            closeMegaMenu={closeMegaMenu}
            level={1}
            site={site}
            isTablet={isTablet}
          />
        </StyledGrid>
      ))}
    </>
  );
};

export default MegaMenu;
