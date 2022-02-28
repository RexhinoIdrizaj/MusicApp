import React from 'react';
import { View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { useColorMode } from '../../hooks/useColorMode';
import { useSkeletonAnimation } from '../../hooks/useSkeleton';

interface TUISkeletonProps {
  numberOfItems: number;
  loaderStyle?: ViewStyle;
  direction?: 'row' | 'column';
}

const UISkeleton: React.FC<TUISkeletonProps> = ({
  loaderStyle,
  numberOfItems = 3,
  direction = 'row',
}) => {
  const activeMode = useColorMode();
  const animatedStyle = useSkeletonAnimation({
    speed: 1000,
    targetOpacityValue: 0.1,
  });

  return (
    <View style={{ flexDirection: direction, flexWrap: 'wrap' }}>
      {Array.from(Array(numberOfItems), (_, i) => (
        <Animated.View
          key={`s${i}`}
          style={[
            { backgroundColor: activeMode.grey },
            loaderStyle,
            animatedStyle,
          ]}
        />
      ))}
    </View>
  );
};

export default UISkeleton;
