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
import React, { useCallback, useMemo, useState } from "react";
import { kebabCase } from "lodash-es";
//UI
import {
  StyledMenuItem,
  StyledMenuTypography,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledLink,
} from "@hcl-commerce-store-sdk/react-component";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//GA360
import AsyncCall from "../../_foundation/gtm/async.service";
import { Category } from "_foundation/types/category";
import { SiteInfo } from "redux/reducers";

const MegaMenuLink = (props: any) => {
  const { link, page, level, closeMegaMenu, parentName, site, levelExpanded, onChange, ...others } = props;

  const onClick = () => {
    //GA360
    if (site.enableGA) AsyncCall.sendNavigationClick(parentName, page.name);
    closeMegaMenu();
  };

  return level < 3 && page.children?.length > 0 ? (
    <MegaMenuColumn
      page={page}
      closeMegaMenu={closeMegaMenu}
      level={level}
      breadcrumbs={link.state?.breadCrumbTrailEntryView ?? []}
      levelExpanded={levelExpanded}
      onChange={onChange}
      {...others}
    />
  ) : (
    <StyledLink to={link.pathname} onClick={onClick}>
      <StyledMenuItem role="menuitem">
        <StyledMenuTypography>{page.name} </StyledMenuTypography>
      </StyledMenuItem>
    </StyledLink>
  );
};

interface MegaMenuColumnProps {
  page: Category;
  levelExpanded: string;
  onChange: (_event: React.SyntheticEvent, isExpanded: boolean) => void;
  closeMegaMenu: any;
  level: number;
  breadcrumbs?: any[];
  site: SiteInfo | undefined;
  isTablet: boolean;
}

/**
 * MegaMenu component
 * displays top category links in desktop/mobile view
 * @param props
 */
const MegaMenuColumn: React.FC<MegaMenuColumnProps> = (props) => {
  const { page, closeMegaMenu, level, breadcrumbs = [], levelExpanded, onChange, site, isTablet } = props;
  const [expanded, setExpanded] = useState<string>("");
  const handleChange = useCallback(
    (pageId: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? pageId : "");
    },
    []
  );

  const childrenList: JSX.Element[] = useMemo(
    () =>
      page.children?.map((childPage) => (
        <MegaMenuLink
          key={childPage.id}
          link={{
            pathname: childPage.seo?.href,
            state: {
              breadCrumbTrailEntryView: [
                ...breadcrumbs,
                { label: page.name, value: page.id, seo: page.seo },
                { label: childPage.name, value: childPage.id, seo: childPage.seo },
              ],
            },
          }}
          page={childPage}
          parentName={page.name}
          closeMegaMenu={closeMegaMenu}
          level={level + 1}
          levelExpanded={expanded}
          onChange={handleChange(childPage.id)}
          site={site}
        />
      )) ?? [],
    [breadcrumbs, closeMegaMenu, expanded, handleChange, level, site, page]
  );

  const icon = page.children && !(isTablet && level === 1) ? <ExpandMoreIcon /> : "";

  const onClick = () => {
    //GA360
    if (site?.enableGA) {
      AsyncCall.sendNavigationClick(
        { eventAction: "Main", eventLabel: page.name },
        { enableUA: site.enableUA, enableGA4: site.enableGA4 }
      );
    }
    closeMegaMenu();
  };
  return (
    <StyledAccordion
      testId={`mega-menu-column-${kebabCase(page.name)}`}
      elevation={0}
      square={true}
      expanded={(isTablet && level === 1) || levelExpanded === page.id}
      onChange={onChange}>
      <StyledAccordionSummary
        style={{ padding: 0 }}
        className={`level-${level}`}
        expandIcon={icon}
        aria-controls={`${page.id}bh-content`}
        id={`${page.id}bh-header`}>
        <StyledLink to={page.seo?.href} onClick={onClick}>
          <StyledMenuItem>
            <StyledMenuTypography
              variant={level === 1 ? "overline" : "body2"}
              className="category-title"
              id={`megamenu_department_${page.id}`}
              title={page.name}>
              {page.name}
            </StyledMenuTypography>
          </StyledMenuItem>
        </StyledLink>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{childrenList}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default MegaMenuColumn;
