import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useColorMode } from "../../hooks/useColorMode";
import { SPACINGS } from "../../theme/sizes";
import UIText from "./UIText";
import UIView from "./UIView";

import { FontAwesome5 } from "@expo/vector-icons";

interface TUIFilterChipProps {
  text: string;
  onPress: () => void;
  selected?: boolean;
  withIcon?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

const UIFilterChip: React.FC<TUIFilterChipProps> = ({
  text,
  selected,
  style,
  withIcon,
  onPress,
}) => {
  const activeMode = useColorMode();
  return (
    <TouchableOpacity onPress={onPress}>
      <UIView
        style={[
          styles.wrapper,
          {
            borderColor: selected ? activeMode.primary : activeMode.grey,
            backgroundColor: selected
              ? activeMode.primary
              : activeMode.backgroundColor,
          },
          style,
        ]}
      >
        <UIText
          style={{ color: selected ? activeMode.white : activeMode.textColor }}
        >
          {text}
        </UIText>
        {withIcon && (
          <FontAwesome5
            style={styles.icon}
            name="caret-down"
            size={14}
            color={activeMode.textColor}
          />
        )}
      </UIView>
    </TouchableOpacity>
  );
};

export default UIFilterChip;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: SPACINGS.XS,
    paddingHorizontal: SPACINGS.M,
    marginRight: SPACINGS.M,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: SPACINGS.S,
  },
});
