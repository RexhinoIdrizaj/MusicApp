import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useColorMode } from "../hooks/useColorMode";
import { TNullable } from "../models/modelShared";
import { SPACINGS } from "../theme/sizes";
import { SCREEN_WIDTH } from "../utils/constants";
import { getYearsList } from "../utils/helpers";
import UIText from "./UI/UIText";

interface TYearBottomSheetContentProps {
  selectedValue: TNullable<string>;
  onPress: (value: TNullable<string>) => void;
}

const YearBottomSheetContent: React.FC<TYearBottomSheetContentProps> = ({
  selectedValue,
  onPress,
}) => {
  const activeMode = useColorMode();

  const [yearsList, setYearsList] = useState<TNullable<string>[]>([]);

  useEffect(() => {
    if (yearsList.length > 0) return;
    const wantedList = [null, ...getYearsList()];
    setYearsList(wantedList);
  }, [yearsList]);

  const renderItem = ({ item }: { item: TNullable<string> }) => (
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
      <UIText fontSize="XXXL">{item ?? "All"}</UIText>
    </TouchableOpacity>
  );

  console.log(`yearsList`, yearsList[0]);
  return (
    <View style={styles.container}>
      <FlatList
        data={yearsList}
        style={styles.listWrapper}
        contentContainerStyle={styles.contentWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
