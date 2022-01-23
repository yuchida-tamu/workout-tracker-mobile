import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
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
    marginTop: -20,
  },
  icon: {
    width: 50,
    marginLeft: 10,
  },
  textInput: {
    height: 30,
    width: '80%',
    fontSize: SIZES.font.REGULAR,
    backgroundColor: '#F0F0F0',
    borderRadius: SIZES.BORDER_RADIUS,
  },
});
