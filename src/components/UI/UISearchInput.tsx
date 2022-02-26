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
    borderRadius: 7,
    padding: 10,
    borderWidth: 1,
  },
});
