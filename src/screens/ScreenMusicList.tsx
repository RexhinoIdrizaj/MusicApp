import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import requests from "../api/config";
import FiltersSections from "../components/FiltersSections";
import ListItem from "../components/ListItem";
import UIBottomSheet from "../components/UI/UIBottomSheet";
import UIFilterChip from "../components/UI/UIFilterChip";
import UISearchInput from "../components/UI/UISearchInput";
import UISkeleton from "../components/UI/UISkeleton";
import YearBottomSheetContent from "../components/YearBottomSheetContent";
import { useColorMode } from "../hooks/useColorMode";
import useDataList from "../hooks/useDataList";
import { TGenre, TVideo } from "../models/modelData";
import { TNullable } from "../models/modelShared";
import { SPACINGS } from "../theme/sizes";
import {
  ITEMS_PER_COLUMN,
  SCREEN_WIDTH_WITHOUT_SPACING,
} from "../utils/constants";

const ScreenMusicList: React.FC = () => {
  const activeMode = useColorMode();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [selectedGenresId, setSelectedGenresId] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<TNullable<string>>(null);
  const [textQuery, setTextQuery] = useState<string>("");

  const { dataList, genreList, error, loading } = useDataList();

  const renderItem = useCallback(({ item }: { item: TVideo }) => {
    return (
      <ListItem
        imageSrc={item.image_url}
        title={item.title}
        artist={item.artist}
        onPress={() => console.log("Navigate to details")}
      />
    );
  }, []);

  const handleGenreSelect = useCallback(
    (genreId: number) => {
      const currentGenresId = [...selectedGenresId];
      const genreExists = currentGenresId.find((el) => el === genreId);
      const newGenres = genreExists
        ? currentGenresId.filter((el) => el !== genreId)
        : [...selectedGenresId, genreId];
      setSelectedGenresId(newGenres);
    },
    [selectedGenresId]
  );

  const onSelectYear = useCallback(
    (value) => {
      bottomSheetModalRef.current?.close();
      setSelectedYear(value);
    },
    [bottomSheetModalRef]
  );

  const handleUserInput = useCallback((value) => {
    setTextQuery(value);
  }, []);

  const getFilteredData = useCallback(() => {
    const getFilter = (el: TVideo) => {
      let filter = true;
      if (selectedYear) {
        filter =
          filter &&
          !!el.release_year &&
          el.release_year === Number(selectedYear);
      }

      if (selectedGenresId.length > 0) {
        filter = filter && selectedGenresId.includes(el.genre_id);
      }
      if (textQuery) {
        const lowerCaseQuery = textQuery.toLowerCase();
        const title = el?.title ? el.title.toString().toLowerCase() : "";
        const artist = el?.artist ? el.artist.toLowerCase() : "";
        filter =
          filter &&
          (title.includes(lowerCaseQuery) || artist.includes(lowerCaseQuery));
      }
      return filter;
    };
    const wantedData = dataList.length > 0 ? dataList.filter(getFilter) : [];
    return wantedData;
  }, [selectedGenresId, dataList, selectedYear, textQuery]);

  return (
    <>
      <View style={[styles.wrapper]}>
        <View style={[styles.searchContainer]}>
          <UISearchInput value={textQuery} onChangeText={handleUserInput} />
        </View>
        <View style={styles.filters}>
          <FiltersSections
            genres={genreList}
            selectedGenresId={selectedGenresId}
            onSelectGenre={handleGenreSelect}
          />
          <View style={styles.yearWrapper}>
            <UIFilterChip
              withIcon
              text={selectedYear ?? "Year"}
              onPress={() => bottomSheetModalRef.current?.present()}
            />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          {loading ? (
            <View style={styles.contentList}>
              <UISkeleton
                loaderStyle={{
                  width:
                    (SCREEN_WIDTH_WITHOUT_SPACING - SPACINGS.S) /
                    ITEMS_PER_COLUMN,
                  height:
                    (SCREEN_WIDTH_WITHOUT_SPACING - SPACINGS.S) /
                    ITEMS_PER_COLUMN,
                  marginRight: SPACINGS.S,
                  marginBottom: SPACINGS.XL,
                }}
                numberOfItems={20}
              />
            </View>
          ) : (
            <FlatList
              contentContainerStyle={styles.contentList}
              numColumns={3}
              data={getFilteredData()}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </View>
      <UIBottomSheet ref={bottomSheetModalRef}>
        <YearBottomSheetContent
          selectedValue={selectedYear}
          onPress={onSelectYear}
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
