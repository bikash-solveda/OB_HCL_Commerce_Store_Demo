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
//UI
import { StyledGrid, StyledContainer } from "../../elements";
//types
import { PageLayoutProps } from "../..";

/**
 * Category Landing Page Layout
 * @description Two rows layout.
 * @param cid Unique identifier for this component.
 * @param slots All the slots containing commerce widgets in this layout.
 */
export const CategoryLandingPageLayout: React.FC<PageLayoutProps> = ({ cid, slots = [], ...props }) => {
  const SlotOne = useCallback(() => {
    return (
      <>
        {slots["1"] && (
          <StyledGrid container>
            <StyledGrid item xs={12}>
              {slots["1"].map((e: any) => {
                const CurrentComponent = e.CurrentComponent;
                return <CurrentComponent key={e.key} />;
              })}
            </StyledGrid>
          </StyledGrid>
        )}
      </>
    );
  }, [slots]);

  const SlotTwo = useCallback(() => {
    return (
      <>
        {slots["2"] && (
          <StyledGrid container>
            {slots["2"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return (
                <StyledGrid item key={e.key} xs={12}>
                  <CurrentComponent />
                </StyledGrid>
              );
            })}
          </StyledGrid>
        )}
      </>
    );
  }, [slots]);

  return (
    <StyledContainer id={cid}>
      {slots["1"] ? <SlotOne /> : null}
      {slots["2"] ? <SlotTwo /> : null}
    </StyledContainer>
  );
};
