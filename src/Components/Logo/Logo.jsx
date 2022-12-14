import React from "react";
import { LogoArea, LogoLabel } from "./logo-styles";
import { DEFAULTS } from "../../constants/defaults";
import { COLORS } from "../../constants/colors";

const DefaultLogo = ({ isDark = false }) => {
  return (
    <LogoArea>
      <LogoLabel
        style={
          isDark ? { color: COLORS.BLUE } : { color: COLORS.DEFAULT_LIGHT }
        }
      >
        {DEFAULTS.LOGO}
      </LogoLabel>
    </LogoArea>
  );
};

export default DefaultLogo;
