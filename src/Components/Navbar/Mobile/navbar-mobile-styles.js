import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const MenuArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: flex;
  border: none;
  background: inherit;
  color: inherit;

  :hover {
    cursor: pointer;
  }
`;

export const BackgroundNavbarOpen = styled.div`
  display: flex;
  position: absolute;
  z-index: 900;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  transition: all 2s;
`;

export const NavbarMobileArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  transition: all 4s;
  flex-direction: column;
  height: 99.9vh;
  width: 100%;
  max-width: 300px;
  background: ${COLORS.DEFAULT_LIGHT};
  opacity: 1;
  color: #000;
`;

export const NavbarMobileContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 16px 0 20px 0;
  color: ${COLORS.BLUE};
`;

export const NavbarMobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NavbarMobileHeaderItem = styled.div`
  display: flex;
  width: 50%;
  justify-content: ${(props) => props.theme};
  align-items: center;
`;

export const ButtonCloseArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY_VARIANT_1};
  width: 25px;
  height: 25px;
  font-size: 20px;
`;

export const NavbarMobileItem = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-top: 32px;
  color: inherit;
  font-weight: 700;
  font-size: 18px;
`;

export const DropdownArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownItemsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownItems = styled.span`
  display: flex;
  color: inherit;
  font-weight: 400;
  font-size: 18px;
  margin-top: 16px;
`;
