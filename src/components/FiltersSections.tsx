import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useColorMode } from "../hooks/useColorMode";
import { SPACINGS } from "../theme/sizes";
import UIBottomSheet from "./UI/UIBottomSheet";
import UIFilterChip from "./UI/UIFilterChip";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const FiltersSections = () => {
  const activeMode = useColorMode();

  const renderItem = () => (
    <UIFilterChip onPress={() => console.log("")} text={"test"} />
  );

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderColor: activeMode.grey,
          },
        ]}
      >
        <FlatList
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default FiltersSections;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,

    paddingVertical: SPACINGS.S,
  },
  content: {
    paddingHorizontal: SPACINGS.XXXL,
  },
});
