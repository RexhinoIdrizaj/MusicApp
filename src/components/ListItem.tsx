import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SPACINGS } from "../theme/sizes";
import { SCREEN_WIDTH } from "../utils/constants";
import EnhancedImage from "./EnhancedImage";
import UIText from "./UI/UIText";

const ITEMS_PER_COLUMN = 3;
const ITEM_WIDTH =
  (SCREEN_WIDTH - SPACINGS.XXXL * 2 - SPACINGS.S * 2) / ITEMS_PER_COLUMN;
interface TListItemProps {
  imageSrc: string | null;
  title: string;
  artist: string;
  onPress: () => void;
}

const ListItem: React.FC<TListItemProps> = ({
  imageSrc,
  title,
  artist,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!!imageSrc && (
        <View style={styles.imageWrapper}>
          <EnhancedImage imgSource={imageSrc} />
        </View>
      )}
      <View style={styles.contentWrapper}>
        <UIText style={styles.artist} fontSize="M" fontWeight="bold">
          {artist}
        </UIText>
        <UIText style={styles.title} fontSize="M" fontWeight="normal">
          {title}
        </UIText>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginRight: SPACINGS.S,
    marginBottom: SPACINGS.XL,
  },
  imageWrapper: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  },
  contentWrapper: {
    marginTop: SPACINGS.XS,
    alignItems: "center",
  },
  artist: {
    textAlign: "center",
    marginBottom: SPACINGS.XS,
  },
  title: {
    textAlign: "center",
  },
});
