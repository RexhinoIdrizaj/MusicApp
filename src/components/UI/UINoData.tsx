import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { NO_DATA } from "../../../assets";
import UIText from "./UIText";

const UINoData = () => {
  return (
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.image} source={NO_DATA} />
      <UIText fontSize="XL">No data found</UIText>
    </View>
  );
};

export default UINoData;

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
