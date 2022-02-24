import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UISearchInput from "../components/UI/UISearchInput";
import { SPACINGS } from "../theme/sizes";

const ScreenMusicList: React.FC = () => {
  return (
    <View style={[styles.wrapper, { paddingHorizontal: SPACINGS.XXXL }]}>
      <UISearchInput />
    </View>
  );
};

export default ScreenMusicList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
