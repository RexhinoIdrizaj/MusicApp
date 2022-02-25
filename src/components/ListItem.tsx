import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SPACINGS } from "../theme/sizes";
import { SCREEN_WIDTH } from "../utils/constants";
import UIText from "./UI/UIText";

interface TListItemProps {
  imageSrc: string | null;
  title: string;
  onPress: () => void;
}

const ListItem: React.FC<TListItemProps> = ({ imageSrc, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!imageSrc && (
        <View style={styles.imageWrapper}>
          {/* <UIImage src={imageSrc} /> */}
        </View>
      )}
      <View style={styles.titleWrapper}>
        <UIText style={styles.title} fontWeight="bold">
          {title}
        </UIText>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: (SCREEN_WIDTH - SPACINGS.XXXL * 2 - SPACINGS.S * 2) / 3,
    marginRight: SPACINGS.S,
    marginBottom: SPACINGS.S,
  },
  imageWrapper: {
    borderWidth: 1,
    height: 110,
  },
  titleWrapper: {
    marginTop: SPACINGS.XS,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});
