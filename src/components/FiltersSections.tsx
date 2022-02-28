import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SPACINGS } from '../theme/sizes';
import { TGenre } from '../models/modelData';
import UIFilterChip from './UI/UIFilterChip';

interface TFiltersSectionsProps {
  genres: TGenre[];
  selectedGenresId: number[];
  onSelectGenre: (genreId: number) => void;
}

const FiltersSections: React.FC<TFiltersSectionsProps> = ({
  genres,
  selectedGenresId,
  onSelectGenre,
}) => {
  const renderItem = ({ item }: { item: TGenre }) => (
    <UIFilterChip
      selected={!!selectedGenresId.find((id) => id === item.id)}
      onPress={() => onSelectGenre(item.id)}
      text={item.name}
    />
  );

  return (
    <View style={[styles.container]}>
      <FlatList
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={genres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
