import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { COLOR } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import { SPACING } from '../../constants/spacing';

export enum FONT_SIZE {
  small = SIZES.font.SMALL,
  regular = SIZES.font.REGULAR,
  large = SIZES.font.LARGE,
  xlarge = SIZES.font.XLARGE,
}

type Props = {
  text: string;
  size?: FONT_SIZE;
  style?: StyleProp<TextStyle>;
};

export const Title: React.FC<Props> = ({ text, size = FONT_SIZE.regular, style }) => {
  return <Text style={[{ fontSize: size }, styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: COLOR.text.WHITE,
    letterSpacing: SPACING.XSMALL,
    fontWeight: 'bold',
  },
});
