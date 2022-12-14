import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const BackgroundNavbar = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background: none;
  color: ${COLORS.DEFAULT_LIGHT};
`;

export const NavbarArea = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 36px;
  color: inherit;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 50px;
  width: 80%;
`;

export const NavbarItems = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: inherit;
  margin-right: 36px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DesktopDropdownArea = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid white;
`;

export const DesktopDropdownContentArea = styled.div`
  display: none;
  position: absolute;
  justify-content: flex-start;
  background: ${COLORS.DEFAULT_LIGHT};
  color: ${COLORS.BLUE};
  z-index: 10;
  border-radius: 3px;
  min-width: 100px;
  width: 100%;
  max-width: 300px;
  margin-top: 25px;
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const DesktopDropdownContent = styled.span`
  display: flex;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: inherit;
  padding: 8px;
  padding-left: 16px;
  //border: 1px solid;

  :hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 3px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
