import React from 'react';
import {
  View,
  StyleSheet,
  TextInputProps,
  TextInput,
  ViewStyle,
} from 'react-native';
import { useColorMode } from '../../hooks/useColorMode';
import { FONTS, RADIUS } from '../../theme/sizes';
import UIIconButton from './UIIconButton';

interface TUISearchInputProps extends TextInputProps {
  wrapperStyle?: ViewStyle;
  onClearInput?: (value: string) => void;
}

const UISearchInput: React.FC<TUISearchInputProps> = ({
  wrapperStyle,
  onClearInput,
  ...props
}) => {
  const activeMode = useColorMode();

  return (
    <View
      style={[styles.wrapper, { borderColor: activeMode.grey }, wrapperStyle]}
    >
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={activeMode.grey}
          style={[
            styles.input,
            {
              color: activeMode.textColor,
              backgroundColor: activeMode.backgroundColor,
            },
          ]}
          {...props}
        />
        {!!props.value && onClearInput && (
          <UIIconButton iconName="times" onPress={() => onClearInput('')} />
        )}
      </View>
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
  input: {
    fontSize: FONTS.L,
    flex: 1,
  },
});
