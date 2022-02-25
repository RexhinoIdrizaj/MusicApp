import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FiltersSections from "../components/FiltersSections";
import ListItem from "../components/ListItem";
import UISearchInput from "../components/UI/UISearchInput";
import { useColorMode } from "../hooks/useColorMode";
import { SPACINGS } from "../theme/sizes";

const ScreenMusicList: React.FC = () => {
  const activeMode = useColorMode();

  const renderItem = () => (
    <ListItem
      imageSrc={""}
      title="test"
      onPress={() => console.log("Navigate to details")}
    />
  );
  return (
    <View style={[styles.wrapper]}>
      <View
        style={[
          styles.searchContainer,
          {
            borderColor: activeMode.grey,
          },
        ]}
      >
        <UISearchInput />
      </View>
      <FiltersSections />
      <View style={styles.contentWrapper}>
        <FlatList
          contentContainerStyle={styles.contentList}
          numColumns={3}
          data={[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default ScreenMusicList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  searchContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: SPACINGS.XXXL,
    paddingBottom: SPACINGS.S,
  },
  contentWrapper: {
    flex: 1,
  },
  contentList: {
    padding: SPACINGS.XXXL,
  },
});
