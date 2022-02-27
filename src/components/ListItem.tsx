import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SPACINGS } from "../theme/sizes";
import {
  ITEMS_PER_COLUMN,
  SCREEN_WIDTH_WITHOUT_SPACING,
} from "../utils/constants";
import UIListImagePlaceholder from "./UI/UIListImagePlaceholder";
import UIText from "./UI/UIText";

const ITEM_WIDTH = SCREEN_WIDTH_WITHOUT_SPACING / ITEMS_PER_COLUMN;
interface TListItemProps {
  imageSrc: string | null;
  title: string;
  artist: string;
  onPress?: () => void;
}

const ListItem: React.FC<TListItemProps> = ({
  imageSrc,
  title,
  artist,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={!onPress}
    >
      {!!imageSrc && (
        <View style={styles.imageWrapper}>
          <UIListImagePlaceholder imgSource={imageSrc} />
        </View>
      )}
      <View style={styles.contentWrapper}>
        <UIText style={styles.artist} fontSize="M" fontWeight="bold">
          {artist}
        </UIText>
        <UIText style={styles.title} fontSize="S" fontWeight="normal">
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
