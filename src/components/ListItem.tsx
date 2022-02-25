import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SPACINGS } from "../theme/sizes";
import { SCREEN_WIDTH } from "../utils/constants";
import UIText from "./UI/UIText";

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
      {!imageSrc && (
        <View style={styles.imageWrapper}>
          {/* <UIImage src={imageSrc} /> */}
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
    width: (SCREEN_WIDTH - SPACINGS.XXXL * 2 - SPACINGS.S * 2) / 2,
    marginRight: SPACINGS.S,
    marginBottom: SPACINGS.XL,
  },
  imageWrapper: {
    borderWidth: 1,
    height: 110,
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
