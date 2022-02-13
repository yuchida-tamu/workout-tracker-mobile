import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { SearchBox } from '../../atoms/SearchBox';
import { SearchButton } from '../../atoms/SearchButton';

export const SearchField = () => {
  return (
    <View style={searchFieldStyles.iconAndTextInput}>
      <View style={searchFieldStyles.icon}>
        <SearchButton color={COLOR.WHITE} size={SIZES.icon.medium} />
      </View>
      <View style={searchFieldStyles.textInput}>
        <SearchBox />
      </View>
    </View>
  );
};

const searchFieldStyles = StyleSheet.create({
  iconAndTextInput: {
    flexDirection: 'row',
    top: '10%',
    marginTop: -SPACING.MEDIUM,
  },
  icon: {
    width: SIZES.height.LARGE,
    marginLeft: SPACING.XSMALL,
  },
  textInput: {
    height: SIZES.height.MEDIUM,
    width: '80%',
    fontSize: SIZES.font.REGULAR,
    backgroundColor: '#F0F0F0',
    borderRadius: SIZES.BORDER_RADIUS,
  },
});
