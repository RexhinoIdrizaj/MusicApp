import React from "react";
import {
  View,
  StyleSheet,
  TextInputProps,
  TextInput,
  ViewStyle,
} from "react-native";
import { useColorMode } from "../../hooks/useColorMode";
import { FONTS, RADIUS } from "../../theme/sizes";

interface TUISearchInputProps extends TextInputProps {
  wrapperStyle?: ViewStyle;
}

const UISearchInput: React.FC<TUISearchInputProps> = ({
  wrapperStyle,
  ...props
}) => {
  const activeMode = useColorMode();

  return (
    <View
      style={[styles.wrapper, { borderColor: activeMode.grey }, wrapperStyle]}
    >
      <TextInput
        clearButtonMode="while-editing"
        placeholder="Search"
        placeholderTextColor={activeMode.grey}
        style={[
          {
            fontSize: FONTS.L,
            color: activeMode.textColor,
            backgroundColor: activeMode.backgroundColor,
          },
        ]}
        {...props}
      />
    </View>
  );
};

export default UISearchInput;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: RADIUS.XL,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
});
