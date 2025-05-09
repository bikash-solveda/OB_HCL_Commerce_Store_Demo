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
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@mui/styled-engine-sc";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Custom libraries
import { StyledListItem } from "../list/styled-listitem";
import { StyledListItemIcon } from "../list";
import { StyledTypography } from "../typography";
import { StyledPaper } from "../paper";
import { StyledLink } from "../link";
import { StyledSidebarAppBar } from "./styled-sidebar-appbar";

const StyledSidebarWrapper = styled((props: any) => {
  const { scrollable, className, ...other } = props;
  return <StyledPaper className={className + (scrollable ? " scrollable" : "")} {...other} />;
})`
  ${({ theme }) => `

    &.product-filter{
      margin-top:${theme.spacing(3)};
    }

    .MuiList-root {
      padding: 0;

      a {
        display: block;
      }
    }

    .MuiAppBar-root {
      box-shadow: none;
    }

    .MuiListItem-root {
      &.Mui-selected {
        background: ${theme.palette.primary.main};
        color: white;

        span {
          font-weight: 600;
          letter-spacing: 0.02rem;
        }
      }
    }

    .section-title:not(.section-heading) {
      padding: ${theme.spacing(2)};
      border-top: 1px solid ${theme.palette.text.disabled};
      span {
        line-height: 1.3;
      }
    }

    .section-heading {
      line-height: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
    }

    .section-link {
      transition: background 250ms ease-in-out;
      &:hover {
        color: white;
        background: ${theme.palette.primary.main};
      }
    }
    .horizontal-margin{
      margin-left: ${theme.spacing(1)};
      margin-right: ${theme.spacing(1)};
    }
    .price-filter{
      display: flex;
    }
    .section-disabled {
      color: ${theme.palette.text.disabled};
    }

    .section-link .MuiListItem-root,
    .section-disabled {
        padding: 0 ${theme.spacing(2)};
        height: ${theme.spacing(5)};
        line-height: ${theme.spacing(5)};
      }
    }
  `}
`;

const StyledNavigationHeader = styled(({ ...props }) => <StyledListItem {...props} />)`
  ${({ theme }) => `
    justify-content: space-between;

    .MuiListItemIcon-root {
      min-width: auto;
    }
  `}
`;

function StyledSidebar({ title, sidebarContent, linkTo, breakpoint, className, scrollable }: any) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const mobileBreakpoint = breakpoint ? breakpoint : "sm";
  const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint));

  const sidebarElement = (
    <StyledSidebarWrapper className={className} scrollable={scrollable}>
      <StyledNavigationHeader className="section-title section-heading">
        {linkTo ? (
          <StyledLink testId={`account-sidebar-${title.toLowerCase()}`} to={linkTo}>
            <StyledTypography variant="subtitle1">{title}</StyledTypography>
          </StyledLink>
        ) : (
          <StyledTypography variant="subtitle1">{title}</StyledTypography>
        )}
        {isMobile ? (
          <StyledListItemIcon data-testid="expand-more-list-item-icon" onClick={() => setOpen(!open)}>
            <ExpandMoreIcon />
          </StyledListItemIcon>
        ) : null}
      </StyledNavigationHeader>
      {sidebarContent}
    </StyledSidebarWrapper>
  );

  return isMobile ? (
    <>
      <StyledSidebarAppBar position="fixed">
        <StyledTypography variant="body2" component="a" onClick={() => setOpen(!open)}>
          <ExpandLessIcon />
          {title}
        </StyledTypography>
      </StyledSidebarAppBar>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(!open)}>
        {sidebarElement}
      </Drawer>
    </>
  ) : (
    sidebarElement
  );
}

StyledSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  sidebarContent: PropTypes.any.isRequired,
  linkTo: PropTypes.string,
  breakpoint: PropTypes.string,
  className: PropTypes.string,
  scrollable: PropTypes.bool,
};

export { StyledSidebar };
