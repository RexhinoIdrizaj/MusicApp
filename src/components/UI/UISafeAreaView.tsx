import React from 'react';
import { ViewStyle } from 'react-native';
import { useColorMode } from '../../hooks/useColorMode';
import { TThemeMode } from '../../models/modelTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TUISafeAreaViewProps {
  backgroundColor?: keyof TThemeMode;
  style: ViewStyle;
}

const UISafeAreaView: React.FC<TUISafeAreaViewProps> = ({
  backgroundColor = 'backgroundColor',
  style,
  children,
}) => {
  const activeMode = useColorMode();

  return (
    <SafeAreaView
      style={[{ backgroundColor: activeMode[backgroundColor] }, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default UISafeAreaView;
