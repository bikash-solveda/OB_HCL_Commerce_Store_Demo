/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020,2021
 *
 *==================================================
 */
//Standard libraries
import React, { FC, useRef } from "react";
import { ClickAwayListener } from "@mui/material";
//style
import {
  StyledBox,
  StyledButton,
  StyledTypography,
  StyledPopper,
  StyledPaper,
} from "@hcl-commerce-store-sdk/react-component";
//custom
import AllCategoriesExpandedMenu from "./AllCategoriesExpandedMenu";
import { Menu } from "./Menu";
import { Category } from "_foundation/types/category";

type Props = {
  page: Category;
  [key: string]: any;
};
const PopperModifiers = [
  { name: "flip", enabled: false },
  { name: "preventOverflow", enabled: false },
  { name: "hide", enabled: false },
];

const MenubarMenuItem: FC<Props> = ({ page, selectMenuItem, selectedMenuItem }) => {
  const popperRef: React.RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const handleClickAway = (event) => {
    const target = event.target;
    if (
      (!popperRef.current || (!popperRef.current.contains(target) && popperRef.current !== target)) &&
      selectedMenuItem.id === page.id
    ) {
      selectMenuItem(null);
    }
  };

  const POPPER_ID = `MENU_POPPER_${page.id}`;
  //remove width update, since the menu title is repeated in menu item.
  const onMouseOver = () => selectMenuItem(page.id);

  return (
    <>
      <StyledBox mr={1} ml={1} className={selectedMenuItem?.id === page.id ? "expanded-menu-hover" : "expanded-menu"}>
        <StyledButton
          testId={`header-${page.id}`}
          variant="text"
          onMouseOver={onMouseOver}
          className="horizontal-padding-2 vertical-padding-1 nav-item nav-button"
          ref={popperRef}>
          <StyledTypography className="expanded-menu-text" data-testid="menubar-menuitem-button">
            {page.name}
          </StyledTypography>
        </StyledButton>
      </StyledBox>

      <StyledPopper
        id={POPPER_ID}
        data-testid={POPPER_ID}
        open={selectedMenuItem?.id === page.id}
        anchorEl={popperRef.current}
        placement="bottom-start"
        disablePortal
        modifiers={PopperModifiers}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <StyledBox>
            {page.id === "allCategories" ? (
              <AllCategoriesExpandedMenu pages={page.children}></AllCategoriesExpandedMenu>
            ) : (
              <StyledPaper className="expanded-menu-three-tier-submenu">
                <Menu page={page} />
              </StyledPaper>
            )}
          </StyledBox>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
};

export default MenubarMenuItem;
