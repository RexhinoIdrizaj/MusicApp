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
    primary: "#f56720",
    backgroundColor: "#21272c",
    textColor: "#ffffff",
  },
  dark: {
    ...COMMON_COLORS,
    primary: "#f56720",
    backgroundColor: "#21272c",
    textColor: "#ffffff",
  },
};
