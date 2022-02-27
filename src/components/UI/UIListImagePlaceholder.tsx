import React from "react";
import { Image } from "react-native";
import { ITEM_PLACEHOLDER } from "../../../assets";

interface TUIListImagePlaceholderProps {
  imgSource: string;
}

const UIListImagePlaceholder: React.FC<TUIListImagePlaceholderProps> = ({
  imgSource,
}) => {
  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{ uri: imgSource }}
      defaultSource={ITEM_PLACEHOLDER}
    />
  );
};

export default UIListImagePlaceholder;
