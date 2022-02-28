import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useColorMode } from '../../hooks/useColorMode';
import { TThemeMode } from '../../models/modelTheme';

interface TUIViewProps {
  backgroundColor?: keyof TThemeMode;
  style?: StyleProp<ViewStyle> | undefined;
}

const UIView: React.FC<TUIViewProps> = ({
  backgroundColor = 'backgroundColor',
  style,
  children,
}) => {
  const activeMode = useColorMode();

  return (
    <View style={[{ backgroundColor: activeMode[backgroundColor] }, style]}>
      {children}
    </View>
  );
};

export default UIView;
