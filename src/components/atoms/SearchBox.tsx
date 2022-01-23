import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { SIZES } from '../../constants/sizes';
import { SPACING } from '../../constants/spacing';

export const SearchBox = () => {
  return <TextInput style={styles.textInput} />;
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: SIZES.font.SMALL,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: SPACING.XSMALL,
  },
});
