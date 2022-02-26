import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { useColorMode } from "../../hooks/useColorMode";
import { useSkeletonAnimation } from "../../hooks/useSkeleton";
import { SPACINGS } from "../../theme/sizes";
import { SCREEN_WIDTH_WITHOUT_SPACING } from "../../utils/constants";

interface TUISkeletonProps {
  numberOfItems: number;
  loaderStyle?: ViewStyle;
  direction?: "row" | "column";
}

const ITEMS_PER_COLUMN = 3;
const ITEM_WIDTH = SCREEN_WIDTH_WITHOUT_SPACING / ITEMS_PER_COLUMN;

const UISkeleton: React.FC<TUISkeletonProps> = ({
  loaderStyle,
  numberOfItems = 3,
  direction = "row",
}) => {
  const activeMode = useColorMode();
  const animatedStyle = useSkeletonAnimation({
    speed: 1000,
    targetOpacityValue: 0.2,
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
