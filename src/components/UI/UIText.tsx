import React from "react";
import { Text, TextStyle, useColorScheme } from "react-native";
import { useColorMode } from "../../hooks/useColorMode";
import { TThemeMode } from "../../models/modelTheme";
import { MODES } from "../../theme/modes";

import { FONTS } from "../../theme/sizes";

interface TUITextProps {
  fontSize?: keyof typeof FONTS;
  color?: keyof TThemeMode;
  fontWeight?: "normal" | "bold";
  style?: TextStyle;
}

const UIText: React.FC<TUITextProps> = ({
  children,
  fontSize = "L",
  color = "textColor",
  fontWeight = "normal",
  style,
  ...props
}) => {
  const activeMode = useColorMode();

  return (
    <Text
      {...props}
      style={{
        fontSize: FONTS[fontSize!],
        color: activeMode[color],
        fontWeight,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default UIText;
