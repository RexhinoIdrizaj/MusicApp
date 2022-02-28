import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { useColorMode } from '../../hooks/useColorMode';
import { RADIUS, SPACINGS } from '../../theme/sizes';
import UIText from './UIText';

interface TUIButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const UIButton: React.FC<TUIButtonProps> = ({
  disabled,
  loading,
  title,
  style,
  ...props
}) => {
  const activeMode = useColorMode();

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.6}
      style={[
        styles.button,
        {
          backgroundColor:
            loading || disabled ? activeMode.disabledGrey : activeMode.primary,
        },
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {loading ? <ActivityIndicator /> : <UIText>{title}</UIText>}
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingHorizontal: SPACINGS.XXXL,
    borderRadius: RADIUS.M,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
