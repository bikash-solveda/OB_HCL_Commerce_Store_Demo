/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2021
 *
 *==================================================
 */
//Standard libraries
import React, { useCallback } from "react";
//types
import { PageLayoutProps } from "../..";
//UI
import { StyledGrid, StyledContainer } from "../../elements";

/**
 * B2B product Page Layout.
 * @description Three rows with two columns left filter layout.
 * @param cid  Unique identifier for this component.
 * @param slots All the slots containing commerce widgets in this layout.
 */
export const B2BProductPageLayout: React.FC<PageLayoutProps> = ({ cid, slots = [], ...props }) => {
  const SlotOne = useCallback(() => {
    return (
      <>
        {slots["1"] && (
          <>
            {slots["1"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return <CurrentComponent key={e.key} />;
            })}
          </>
        )}
      </>
    );
  }, [slots]);

  const SlotTwo = useCallback(() => {
    return (
      <>
        {slots["2"] && (
          <StyledGrid item xs={12}>
            {slots["2"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return <CurrentComponent key={e.key} />;
            })}
          </StyledGrid>
        )}
      </>
    );
  }, [slots]);

  const SlotThree = useCallback(() => {
    return (
      <>
        {slots["3"] && (
          <StyledGrid item xs={12} md={3} className="sidebar">
            {slots["3"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return <CurrentComponent key={e.key} />;
            })}
          </StyledGrid>
        )}
      </>
    );
  }, [slots]);

  const SlotFour = useCallback(() => {
    return (
      <>
        {slots["4"] && (
          <StyledGrid item xs={12} md={9}>
            {slots["4"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return <CurrentComponent key={e.key} />;
            })}
          </StyledGrid>
        )}
      </>
    );
  }, [slots]);

  const SlotFive = useCallback(() => {
    return (
      <>
        {slots["5"] && (
          <>
            {slots["5"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return <CurrentComponent key={e.key} />;
            })}
          </>
        )}
      </>
    );
  }, [slots]);

  return (
    <StyledContainer id={cid}>
      {slots["1"] ? <SlotOne /> : null}
      <StyledGrid container spacing={3}>
        {slots["2"] ? <SlotTwo /> : null}
        {slots["3"] || slots["4"] ? (
          <>
            <SlotThree />
            <SlotFour />
          </>
        ) : null}
      </StyledGrid>
      {slots["5"] ? <SlotFive /> : null}
    </StyledContainer>
  );
};
