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
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
//UI
import { StyledBox, StyledContainer } from "@hcl-commerce-store-sdk/react-component";
//custom
import MenubarMenuItem from "./MenubarMenuItem";
import { Category } from "_foundation/types/category";

interface ExpandedMenuProps {
  pages?: Category[];
}
const EMPTY_CATS = [] as Category[];

/**
 * ExpandedMenu component
 * expanded menu for desktop/tablet view
 * @param props
 */
const ExpandedMenu: React.FC<ExpandedMenuProps> = ({ pages = EMPTY_CATS }) => {
  const { t } = useTranslation();
  const location: any = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState<any | null>(null);
  const allCategories = {
    id: "allCategories",
    children: pages,
    name: t("AllCategoriesExpandedMenu.AllCategoriesLabel"),
  } as Category;
  const categories = [allCategories, ...pages];
  const selectMenuItem = (cid: string) => {
    setSelectedMenuItem(categories.filter((c) => c.id === cid)[0] || null);
  };

  React.useEffect(() => {
    setSelectedMenuItem(null);
  }, [location]);

  return (
    <StyledBox className="expanded-menu-container">
      <StyledContainer overflow="hidden">
        <StyledBox display="flex" flexWrap="nowrap" justifyContent="flex-start" alignContent="flex-start">
          {categories.map((page) => (
            <MenubarMenuItem
              key={page.id}
              selectedMenuItem={selectedMenuItem}
              selectMenuItem={selectMenuItem}
              page={page}></MenubarMenuItem>
          ))}
        </StyledBox>
      </StyledContainer>
    </StyledBox>
  );
};

export default ExpandedMenu;
