import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useColorMode } from "../hooks/useColorMode";
import { SPACINGS } from "../theme/sizes";
import { SCREEN_WIDTH } from "../utils/constants";
import UIText from "./UI/UIText";

interface TYearBottomSheetContentProps {
  selectedValue: string;
  onPress: (value: string) => void;
}

const YearBottomSheetContent: React.FC<TYearBottomSheetContentProps> = ({
  selectedValue,
  onPress,
}) => {
  const activeMode = useColorMode();

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.itemWrapper,
        {
          backgroundColor:
            item === selectedValue ? activeMode.primary : "transparent",
        },
      ]}
    >
      <UIText fontSize="XXXL">2020</UIText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={["2020", "2021", "2022", "1111", "1234", "4321", "5444", "6655"]}
        style={styles.listWrapper}
        contentContainerStyle={styles.contentWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default YearBottomSheetContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  listWrapper: {
    paddingVertical: SPACINGS.XXL,
  },
  contentWrapper: {
    paddingHorizontal: SPACINGS.XXXL,
    paddingBottom: SPACINGS.XB,
  },
  itemWrapper: {
    width: SCREEN_WIDTH - SPACINGS.XXXL * 2,
    marginBottom: SPACINGS.M,
    paddingVertical: SPACINGS.M,
    borderRadius: 20,
    alignItems: "center",
  },
});
