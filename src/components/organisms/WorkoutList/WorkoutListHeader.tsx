import React from 'react';
import { View } from 'react-native';
import { SearchBox } from '../../atoms/SearchBox';
import { SearchButton } from '../../atoms/SearchButton';
import { styles } from './styles';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { CategoryIcon } from '../../atoms/icons/CategoryIcon';

export const WorkoutListHeader = () => {
  return (
    <View style={styles.headerFix}>
      <View style={styles.iconAndTextInput}>
        <View style={styles.icon}>
          <SearchButton color={COLOR.WHITE} size={SIZES.icon.medium} />
        </View>
        <View style={styles.textInput}>
          <SearchBox />
        </View>
      </View>
      <View style={styles.categoryIcon}>
        <CategoryIcon color={COLOR.PRIMARY} size={SIZES.icon.large * 1.7} />
      </View>
    </View>
  );
};
