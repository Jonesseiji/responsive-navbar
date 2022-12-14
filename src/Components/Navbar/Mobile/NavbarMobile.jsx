import React, { useState } from "react";
import { PAGES } from "../../../constants/defaults";
import { ICONS } from "../../../constants/icons";
import { PROJECTS_EXAMPLE } from "../../../constants/projects-example";
import { ALIGN } from "../../../constants/styled-themes";
import { Icon } from "../../Icons/icons-styles";
import DefaultLogo from "../../Logo/Logo";
import {
  BackgroundNavbarOpen,
  ButtonCloseArea,
  DropdownArea,
  DropdownItems,
  DropdownItemsArea,
  NavbarMobileArea,
  NavbarMobileContentArea,
  NavbarMobileHeader,
  NavbarMobileHeaderItem,
  NavbarMobileItem,
} from "./navbar-mobile-styles";

const NavbarMobile = ({ show = false, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <BackgroundNavbarOpen style={{ right: show ? 0 : -300 }}>
      <NavbarMobileArea style={{ right: show ? 0 : -300 }}>
        <NavbarMobileContentArea>
          <NavbarMobileHeader>
            <NavbarMobileHeaderItem theme={ALIGN.ALIGN_ITEMS.START}>
              <DefaultLogo isDark />
            </NavbarMobileHeaderItem>
            <NavbarMobileHeaderItem theme={ALIGN.ALIGN_ITEMS.END}>
              <ButtonCloseArea onClick={closeMenu}>
                <Icon className={ICONS.CLOSE} />
              </ButtonCloseArea>
            </NavbarMobileHeaderItem>
          </NavbarMobileHeader>
          <NavbarMobileItem>{PAGES.HOME}</NavbarMobileItem>
          <NavbarMobileItem>{PAGES.PHILOSOPHY}</NavbarMobileItem>
          <DropdownArea>
            <NavbarMobileItem
              onClick={() =>
                isDropdownOpen
                  ? setIsDropdownOpen(false)
                  : setIsDropdownOpen(true)
              }
            >
              {PAGES.PROJECTS}
              <Icon
                className={isDropdownOpen ? ICONS.CARET_UP : ICONS.CARET_DOWN}
                style={{ marginLeft: 10 }}
              />
            </NavbarMobileItem>
            <DropdownItemsArea style={{ display: !isDropdownOpen && "none" }}>
              {PROJECTS_EXAMPLE.map((it) => (
                <DropdownItems key={it}>{it}</DropdownItems>
              ))}
            </DropdownItemsArea>
          </DropdownArea>
          <NavbarMobileItem>{PAGES.NEWS}</NavbarMobileItem>
        </NavbarMobileContentArea>
      </NavbarMobileArea>
    </BackgroundNavbarOpen>
  );
};
export default NavbarMobile;
