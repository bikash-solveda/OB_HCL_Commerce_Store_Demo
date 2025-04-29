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
 * Home Page Layout
 * @description The layout has two slots and SlotOne is a full screen slot
 * @param cid Unique identifier for this component.
 * @param slots All the slots containing commerce widgets in this layout.
 */
export const HomePageLayout: React.FC<PageLayoutProps> = ({ cid, slots = [], ...props }) => {
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
          <StyledGrid container>
            {slots["2"].map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return (
                <StyledGrid key={e.key} item xs={12}>
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
    <div id={cid}>
      {slots["1"] ? <SlotOne /> : null}
      {slots["2"] ? (
        <StyledContainer>
          <SlotTwo />
        </StyledContainer>
      ) : null}
    </div>
  );
};
