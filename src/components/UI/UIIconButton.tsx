import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useColorMode } from '../../hooks/useColorMode';

interface TUIIconButtonProps extends TouchableOpacityProps {
  iconName: keyof typeof FontAwesome.glyphMap;
}

const UIIconButton: React.FC<TUIIconButtonProps> = ({ iconName, ...props }) => {
  const activeMode = useColorMode();
  return (
    <TouchableOpacity
      hitSlop={{
        bottom: 10,
        top: 10,
        left: 10,
        right: 10,
      }}
      style={styles.iconContainer}
      {...props}
    >
      <FontAwesome
        style={{ color: activeMode.textColor }}
        size={14}
        name={iconName}
      />
    </TouchableOpacity>
  );
};

export default UIIconButton;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
