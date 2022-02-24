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

interface TUIFilterChipProps {
  text: string;
  onPress: () => void;
  selected?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

const UIFilterChip: React.FC<TUIFilterChipProps> = ({
  text,
  selected,
  style,
  onPress,
}) => {
  const activeMode = useColorMode();
  return (
    <TouchableOpacity onPress={onPress}>
      <UIView
        style={[
          styles.wrapper,
          {
            paddingVertical: SPACINGS.S,
            paddingHorizontal: SPACINGS.M,
            marginRight: SPACINGS.XXS,
            borderColor: selected ? activeMode.primary : activeMode.textColor,
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
      </UIView>
    </TouchableOpacity>
  );
};

export default UIFilterChip;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    borderWidth: 1,
  },
});
