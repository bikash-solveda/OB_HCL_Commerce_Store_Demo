/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2021, 2022
 *
 *==================================================
 */
import React, { useCallback, useState, useEffect, useMemo } from "react";
import styled from "@mui/styled-engine-sc";
import MatButton from "@mui/material/Button";
import { debounce } from "lodash-es";

const CustomMatButton = React.forwardRef((props: any, ref: any) => {
  const { variant, className = "", color, testId, onClick, disabled, ...re } = props;
  const dataTestId = testId ? { "data-testid": `button-${testId}` } : {};
  const [iDisabled, setIDisabled] = useState<boolean>(false);

  const debounced = useMemo(
    () =>
      //debounce to prevent double click
      debounce(() => {
        setIDisabled(false);
      }, 2000),
    [setIDisabled]
  );

  const iClassName = useMemo(() => {
    return iDisabled ? `${className} Mui-disabled` : className;
  }, [iDisabled, className]);

  const onClickWrapper = useCallback(
    (event: any) => {
      if (!iDisabled) {
        setIDisabled(true);
        onClick && onClick(event);
        debounced();
      }
    },
    [onClick, iDisabled, debounced]
  );

  useEffect(() => {
    setIDisabled(false);
    //React virtual dom try to reuse the component,
    //if the component was reused, the unmount event/initialize is not happenning.
    //to fix the iDisabled state issue, we can
    //1. set it to false upon testId changes.
    //2. add `key` prop to the component(so that React know this is complete different component)
    //here we are using #1 approach.
  }, [testId]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MatButton
      {...dataTestId}
      {...re}
      ref={ref}
      variant={variant || "contained"}
      color={color || "primary"}
      className={iClassName}
      disabled={disabled}
      onClick={onClickWrapper}
    />
  );
});

const StyledButton = styled(CustomMatButton)`
  ${({ theme }) => `
    font-weight: 500;

    &.MuiButton-containedPrimary.Mui-disabled {
      background: ${theme.palette.primary.main};
      color: ${theme.palette.white};
      opacity: 0.5;
      &:hover {
         background: ${theme.palette.primary.main};
      }
    }

    &.accordion-show-expanded {
      display: none;
    }

    .MuiAccordionSummary-expandIconWrapper.Mui-expanded & {
      &.accordion-show-summary {
        display: none;
      }

      &.accordion-show-expanded {
        display:flex;
        transform: rotate(180deg);
      }
    }

    &.MuiButtonBase-root {
      border-radius: ${theme.shape.borderRadius}px;
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
      letter-spacing: 0.02rem;

      &:not(.MuiButton-text) {
        border-radius: ${theme.shape.borderRadius}px;
        padding: ${theme.spacing(1)} ${theme.spacing(2)};
        letter-spacing: 0.01rem;
        box-shadow: 0px 1px 2px 2px rgba(0,0,0,0.005);

        &:hover {
          box-shadow: 0px 1px 2px 2px rgba(0,0,0,0.0025);
        }
      }
    }

    &.secondary-color-text-button {
      color: ${theme.palette.text.secondary};
    }

    &.alert-color-text-button {
      color: ${theme.palette.text.alert};
    }

    &.MuiButton-text {
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0;
      box-shadow: none;
      min-width: unset;
      &:not(.Mui-disabled):not(.secondary-color-text-button):not(.alert-color-text-button) {
        color: ${theme.palette.primary.main};
      }
      background: none;
    }

    &.MuiButton-containedPrimary {
      border: 2px solid ${theme.palette.primary.main};

      &:hover {
        border: 2px solid ${theme.palette.primary.main};
        background: ${theme.palette.primary.main}
      }

      &.Mui-disabled {
        background: ${theme.palette.primary.main};
        border: 2px solid ${theme.palette.primary.main};
        color: white;
        opacity: 0.5;
      }
    }

    &.MuiButton-outlinedPrimary {
      &.Mui-disabled {
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        opacity: 0.5;
      }
    }

    &.MuiButton-containedSecondary {
      background: white;
      color: #002C75;
      border: 2px solid #002C75;
      padding: calc(${theme.spacing(1)} - 2px) calc(${theme.spacing(2)} - 2px);

      &:hover {
        border-color: #002C75;
        color: #002C75;
        background: ${theme.palette.grey[100]};
      }

      &.Mui-disabled {
        opacity: 0.5;
        border-color: ${theme.palette.grey[500]};
        color: ${theme.palette.grey[500]};
      }
    }

    @media screen and (max-width: 40em) {
      &.accordion-show-summary {
        display: none;
      }

      &.accordion-show-expanded {
        display: none;
      }
    }


    &.accordion-show-expanded {
      display: none;
    }

    .MuiAccordionSummary-expandIconWrapper.Mui-expanded &{
      &.accordion-show-summary {
        display: none;
      }

      &.accordion-show-expanded {
        display:flex;
        transform: rotate(180deg);
      }
    }

    &.border-solid-bold  {
      font-weight: bold;
      border: 1.35px solid;
    }

    &.confirm-action-button,
    &.cancel-action-button {
      background-color: ${theme.palette.background.paper};
      font-weight: 600;
    }

    &.confirm-action-button {
      border: ${theme.spacing(0.25)} solid ${theme.palette.border.alert};
      color: ${theme.palette.text.alert};
    }

    &.cancel-action-button {
      border: ${theme.spacing(0.25)} solid;
    }
    &.price-go {
      margin-top: ${theme.spacing(1)} ;
    }

    &.login-process-button {
      width: ${theme.spacing(31)};
      @media (max-width: 320px) {
        width: ${theme.spacing(25.5)};
      }
    }
    `}
`;

export { StyledButton };
