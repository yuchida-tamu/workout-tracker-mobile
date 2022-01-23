import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { CategoryIcon } from '../../atoms/icons/CategoryIcon';
import { SearchField } from '../../molecules/Input/SearchField';

export const WorkoutListHeader = () => {
  return (
    <View style={styles.headerFix}>
      <SearchField />
      <View style={styles.categoryIcon}>
        <CategoryIcon color={COLOR.PRIMARY} size={SIZES.icon.large * 1.7} />
      </View>
    </View>
  );
};
