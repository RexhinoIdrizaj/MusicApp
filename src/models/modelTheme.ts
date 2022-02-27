export interface TCommonColors {
  white: string;
  black: string;
  grey: string;
  disabledGrey: string;
  lightGrey: string;
}
export interface TThemeMode extends TCommonColors {
  primary: string;
  textColor: string;
  backgroundColor: string;
}
export interface TThemeModes {
  dark: TThemeMode;
  light: TThemeMode;
}
