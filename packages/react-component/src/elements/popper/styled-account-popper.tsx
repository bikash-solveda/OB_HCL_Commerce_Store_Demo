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
import React from "react";
import styled from "@mui/styled-engine-sc";
import { StyledPopper } from "./styled-popper";

const CustomAccountPopper = React.forwardRef((props: any, ref: any) => {
  return <StyledPopper disablePortal={true} {...props} ref={ref} />;
});

const StyledAccountPopper = styled(CustomAccountPopper)`
  ${({ theme }) => `
    &.account-popper {
      .MuiPaper-root {
        min-width: 300px;
        border: 1px solid ${theme.palette.action.active};
      }

      .MuiListItem-root {
        padding: ${theme.spacing(1)} 0;
      }

      .MuiListItemIcon-root {
        margin-right: ${theme.spacing(1)};
        min-width: 0;

        svg {
          color: ${theme.palette.text.secondary};
          font-size: 20px;
        }
      }

      a {
        display: block;

        &:hover {

          svg {
            color: #3A4980;
          }

          span {
            font-weight: 500;
            color: #3A4980;
          }
        }
      }
    }

    &.mini-cart-popper {
      margin-top: ${theme.spacing(2)};
      text-align: left;

      & > .MuiPaper-root {
        width: 300px;
      }

      .MuiDivider-root.heading {
        background-color: ${theme.palette.border.dark};
        height: 1.5px;
      }

      &[x-placement*="bottom"] .arrow{
        border-left: ${theme.spacing(2)} solid transparent;
        border-right: ${theme.spacing(2)} solid transparent;
        border-bottom: ${theme.spacing(2)} solid ${theme.palette.background.paper};
        margin-top: -${theme.spacing(2)};
      }

      .arrow {
        position: absolute;
      }
    }
    `}
`;

export { StyledAccountPopper };
