import React from 'react';
import { Image, View, StyleSheet, ViewStyle } from 'react-native';
import { NO_DATA, GENERAL_ERROR } from '../../../assets';
import UIText from './UIText';

const ERROR = {
  noData: {
    img: NO_DATA,
    text: 'No data found',
  },
  generalError: {
    img: GENERAL_ERROR,
    text: 'Something went wrong',
  },
};
interface TUINoDataProps {
  errorType?: 'noData' | 'generalError';
  wrapperStyle?: ViewStyle;
}

const UINoData: React.FC<TUINoDataProps> = ({
  errorType = 'generalError',
  wrapperStyle,
}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={ERROR[errorType].img}
      />
      {!!ERROR[errorType].text && (
        <UIText fontSize="XL">{ERROR[errorType].text}</UIText>
      )}
    </View>
  );
};

export default UINoData;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
