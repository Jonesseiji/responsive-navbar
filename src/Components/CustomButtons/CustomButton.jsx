import React from "react";
import { COLORS } from "../../constants/colors";
import { ICONS } from "../../constants/icons";
import { Icon } from "../Icons/icons-styles";
import { Button, Text } from "./button-styles";

const CustomButton = ({
  text = "Digite seu texto",
  onClick,
  disabled = false,
  background = "",
  icon = "",
  isLoading = false,
  color = "",
  defaultLight = false,
  isLink = false,
  fontSize = "",
  margin = "",
}) => {
  const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    background: background ? background : COLORS.BLUE,
    color: color ? color : COLORS.DEFAULT_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    padding: "13px 32px 12px 32px",
    borderRadius: "100px",
    border: "none",
    fontWeight: 600,
    fontSize: fontSize ? fontSize : "16px",
    cursor: "pointer",
    margin: margin ? margin : 0,
  };

  if (disabled) {
    buttonStyle.opacity = 0.5;
    buttonStyle.cursor = "not-allowed";
  }

  if (defaultLight) {
    buttonStyle.background = COLORS.DEFAULT_LIGHT;
    buttonStyle.color = color ? color : COLORS.BLUE;
  }

  return (
    <Button style={buttonStyle} onClick={disabled ? "" : onClick}>
      {isLoading ? (
        <Icon
          className={ICONS.LOADING}
          style={{ fontSize: buttonStyle.fontSize, color: buttonStyle.color }}
        ></Icon>
      ) : (
        <Text
          style={{
            fontSize: buttonStyle.fontSize,
            color: buttonStyle.color,
            marginRight: 10,
            textDecoration: isLink ? "underline" : "none",
          }}
        >
          {text}
        </Text>
      )}
      {icon && !isLoading && (
        <Icon
          className={icon}
          style={{
            fontSize: buttonStyle.fontSize,
            color: buttonStyle.color,
          }}
        ></Icon>
      )}
    </Button>
  );
};

export default CustomButton;
