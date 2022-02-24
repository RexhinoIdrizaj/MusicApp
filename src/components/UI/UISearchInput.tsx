import React from "react";
import {
  View,
  StyleSheet,
  TextInputProps,
  TextInput,
  ViewStyle,
} from "react-native";
import { useColorMode } from "../../hooks/useColorMode";
import { FONTS } from "../../theme/sizes";
import UIText from "./UIText";

interface TUISearchInputProps extends TextInputProps {
  wrapperStyle?: ViewStyle;
}

const UISearchInput: React.FC<TUISearchInputProps> = ({
  wrapperStyle,
  ...props
}) => {
  const activeMode = useColorMode();
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TextInput
        clearButtonMode="while-editing"
        placeholder="Search"
        style={[
          styles.input,
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
    borderRadius: 7,
    padding: 10,
    // borderWidth: 1,
    // flex: 1,
  },
  input: {
    // padding: 0,
  },
});
