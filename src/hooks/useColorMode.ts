import { useColorScheme } from "react-native";
import { MODES } from "../theme/modes";

export const useColorMode = () => {
  const colorScheme = useColorScheme();
  const activeMode = colorScheme ? MODES[colorScheme] : MODES.light;
  return activeMode;
};
