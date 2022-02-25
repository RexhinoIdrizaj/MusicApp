import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useColorMode } from "../hooks/useColorMode";
import { SPACINGS } from "../theme/sizes";
import UIBottomSheet from "./UI/UIBottomSheet";
import UIFilterChip from "./UI/UIFilterChip";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const FiltersSections = () => {
  const activeMode = useColorMode();

  const renderItem = ({ item }) => (
    <UIFilterChip selected onPress={() => console.log("")} text={item} />
  );

  return (
    <>
      <View style={[styles.container]}>
        <FlatList
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={["Playlists", "Artists", "Podcasts & Shows"]}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default FiltersSections;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACINGS.XXXL,
    flex: 1,
  },
  content: {
    paddingLeft: SPACINGS.XXXL,
  },
});
