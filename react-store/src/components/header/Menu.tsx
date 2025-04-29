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
import { SxProps } from "@mui/material";
import { StyledMenuTypography, StyledBox, StyledLink } from "@hcl-commerce-store-sdk/react-component";
import { Category } from "_foundation/types/category";
import { Breadcrumb } from "_foundation/types/breadcrumb";

const MAX_LEVELS = 3;
const classAtLevel = {
  1: "expanded-menu-bold",
  [MAX_LEVELS]: "expanded-menu-sub-links",
};
const nonLeafSX = { mt: 2, mr: 5 };
const sxAtLevels = {
  1: { m: 3 },
  [MAX_LEVELS]: { m: 0 },
};

type TitleProps = {
  page: Category;
  crumbs: Breadcrumb[];
  level: number;
  className: string;
};
const Title: React.FC<TitleProps> = ({ page: { id, seo, name }, crumbs, level, className }) => (
  <StyledLink testId={`header-${id}`} to={seo?.href} state={{ breadCrumbTrailEntryView: crumbs }}>
    <StyledMenuTypography variant={level > 1 ? "body2" : "body1"} className={className}>
      {name}
    </StyledMenuTypography>
  </StyledLink>
);

type MenuProps = {
  page: Category;
  crumbs?: Breadcrumb[];
  level?: number;
  nonLeafAtLevel?: boolean;
  sx?: SxProps;
};
export const Menu: React.FC<MenuProps> = ({ level = 1, page, crumbs = [], nonLeafAtLevel = false, sx: _sx }) => {
  const fullCrumb = [...crumbs, { label: page.name, value: page.id, seo: page.seo }];
  const hasGrandChild = page.children?.some(({ children }) => children);
  const flexDirection = hasGrandChild && level < MAX_LEVELS - 1 ? "row" : "column";
  const className = classAtLevel[level] ?? (nonLeafAtLevel ? classAtLevel[1] : classAtLevel[MAX_LEVELS]);
  const sx = _sx ?? sxAtLevels[level] ?? (nonLeafAtLevel ? nonLeafSX : sxAtLevels[MAX_LEVELS]);

  return (
    <StyledBox sx={sx}>
      <Title page={page} level={level} crumbs={fullCrumb} className={className} />

      {page.children && level < MAX_LEVELS ? (
        <StyledBox display="flex" flexWrap="wrap" alignContent="flex-start" flexDirection={flexDirection}>
          {page.children.map((child) => (
            <Menu key={child.id} page={child} level={level + 1} crumbs={fullCrumb} nonLeafAtLevel={hasGrandChild} />
          ))}
        </StyledBox>
      ) : null}
    </StyledBox>
  );
};
