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
import React from "react";
//UI
import { StyledPaper, StyledBox } from "@hcl-commerce-store-sdk/react-component";
import { Category } from "_foundation/types/category";
import { Menu } from "./Menu";

interface AllCategoriesExpandedMenuProps {
  pages?: Category[];
}

/**
 * AllCategoriesExpandedMenu component
 * displays all categories in the expanded menu on desktop/tablet
 * @param props
 */
const AllCategoriesExpandedMenu: React.FC<AllCategoriesExpandedMenuProps> = ({ pages }) => {
  return (
    <StyledPaper className="expanded-menu-paper">
      <StyledBox display="flex" flexWrap="wrap" alignContent="flex-start" mx={4} my={3}>
        {pages?.map((page) => (
          <Menu key={page.id} page={page} sx={{ mr: 5, mb: 1 }} />
        ))}
      </StyledBox>
    </StyledPaper>
  );
};

export default AllCategoriesExpandedMenu;
