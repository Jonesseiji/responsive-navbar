import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
import { PAGES } from "../../constants/defaults";
import { ICONS } from "../../constants/icons";
import { PROJECTS_EXAMPLE } from "../../constants/projects-example";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Icon } from "../Icons/icons-styles";
import DefaultLogo from "../Logo/Logo";
import { MenuArea, MenuButton } from "./Mobile/navbar-mobile-styles";
import NavbarMobile from "./Mobile/NavbarMobile";
import {
  BackgroundNavbar,
  ContentArea,
  DesktopDropdownArea,
  DesktopDropdownContent,
  DesktopDropdownContentArea,
  NavbarArea,
  NavbarItems,
} from "./navbar-styles";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isColorChange, setIsColorChange] = useState(false);
  const { width } = useWindowDimensions();

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setIsColorChange(true);
    } else {
      setIsColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    width <= 992 ? setIsMobile(true) : setIsMobile(false);
  }, [width, isMobile, setIsMobile]);

  return (
    <BackgroundNavbar
      style={
        isColorChange
          ? {
              background: COLORS.BLUE,
              transition: ".7s",
            }
          : { background: "none", transition: ".7s" }
      }
    >
      <NavbarArea>
        <DefaultLogo />

        {isMobile ? (
          <MenuArea>
            <MenuButton onClick={() => setIsNavbarOpen(true)}>
              <Icon className={ICONS.MENU} />
            </MenuButton>
            {isNavbarOpen && (
              <NavbarMobile
                show={isNavbarOpen}
                closeMenu={() => setIsNavbarOpen(false)}
              />
            )}
          </MenuArea>
        ) : (
          <>
            <ContentArea>
              <NavbarItems>{PAGES.HOME}</NavbarItems>
              <NavbarItems>{PAGES.PHILOSOPHY}</NavbarItems>
              <DesktopDropdownArea>
                <NavbarItems
                  onClick={() =>
                    isDropdownOpen
                      ? setIsDropdownOpen(false)
                      : setIsDropdownOpen(true)
                  }
                >
                  {PAGES.PROJECTS}
                  <Icon
                    className={
                      isDropdownOpen ? ICONS.CARET_UP : ICONS.CARET_DOWN
                    }
                    style={{ marginLeft: 10 }}
                  />
                </NavbarItems>

                <DesktopDropdownContentArea
                  style={{ display: isDropdownOpen && "block" }}
                >
                  {PROJECTS_EXAMPLE.map((it) => (
                    <DesktopDropdownContent key={it}>
                      {it}
                    </DesktopDropdownContent>
                  ))}
                </DesktopDropdownContentArea>
              </DesktopDropdownArea>
              <NavbarItems>{PAGES.NEWS}</NavbarItems>
            </ContentArea>
          </>
        )}
      </NavbarArea>
    </BackgroundNavbar>
  );
};
export default Navbar;
