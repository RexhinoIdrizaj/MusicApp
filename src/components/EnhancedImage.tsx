import React, { useCallback, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { ITEM_PLACEHOLDER } from "../../assets";

interface TEnhancedImageProps {
  imgSource: string;
}

const EnhancedImage: React.FC<TEnhancedImageProps> = ({ imgSource }) => {
  return (
    <>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: imgSource, cache: "reload" }}
        defaultSource={ITEM_PLACEHOLDER}
      />
    </>
  );
};

export default EnhancedImage;

const styles = StyleSheet.create({});
