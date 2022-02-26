import { Dimensions } from "react-native";
import { SPACINGS } from "../theme/sizes";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const ITEMS_PER_COLUMN = 3;
export const SCREEN_WIDTH_WITHOUT_SPACING =
  SCREEN_WIDTH - SPACINGS.XXXL * 2 - SPACINGS.S * 2;
