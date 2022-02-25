import { TCommonColors, TThemeModes } from "../models/modelTheme";

export const COMMON_COLORS: TCommonColors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#acadb3",
  lightGrey: "#f4f5f8",
  disabledGrey: "#dedee0",
};

export const MODES: TThemeModes = {
  light: {
    ...COMMON_COLORS,
    primary: "#5048fe",
    backgroundColor: "#f4f5f8",
    textColor: "#0e1823",
  },
  dark: {
    ...COMMON_COLORS,
    primary: "#5048fe",
    backgroundColor: "#37373e",
    textColor: "#ffffff",
  },
};
