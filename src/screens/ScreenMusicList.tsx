import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FiltersSections from "../components/FiltersSections";
import ListItem from "../components/ListItem";
import UIBottomSheet from "../components/UI/UIBottomSheet";
import UIFilterChip from "../components/UI/UIFilterChip";
import UISearchInput from "../components/UI/UISearchInput";
import UIText from "../components/UI/UIText";
import YearBottomSheetContent from "../components/YearBottomSheetContent";
import { useColorMode } from "../hooks/useColorMode";
import { SPACINGS } from "../theme/sizes";

const ScreenMusicList: React.FC = () => {
  const activeMode = useColorMode();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const renderItem = () => (
    <ListItem
      imageSrc={""}
      title="test"
      onPress={() => console.log("Navigate to details")}
    />
  );

  return (
    <>
      <View style={[styles.wrapper]}>
        <View style={[styles.searchContainer]}>
          <UISearchInput />
        </View>
        <View style={styles.filters}>
          <FiltersSections />
          <View style={styles.yearWrapper}>
            <UIFilterChip
              withIcon
              text="2022"
              onPress={() => bottomSheetModalRef.current?.present()}
            />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <FlatList
            contentContainerStyle={styles.contentList}
            numColumns={3}
            data={[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]}
            renderItem={renderItem}
          />
        </View>
      </View>
      <UIBottomSheet ref={bottomSheetModalRef}>
        <YearBottomSheetContent
          selectedValue="6655"
          onPress={(value) => console.log(value)}
        />
      </UIBottomSheet>
    </>
  );
};

export default ScreenMusicList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: SPACINGS.XXXL,
    paddingBottom: SPACINGS.XXXL,
  },
  contentWrapper: {
    flex: 1,
  },
  contentList: {
    padding: SPACINGS.XXXL,
  },
  yearWrapper: {
    paddingVertical: SPACINGS.XXXL,
    paddingHorizontal: SPACINGS.S,
  },
  filters: {
    flexDirection: "row",
  },
});
