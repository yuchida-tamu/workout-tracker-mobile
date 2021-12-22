import React from 'react';
import { View } from 'react-native';
import { SearchBox } from '../../atoms/SearchBox';
import { SearchButton } from '../../atoms/SearchButton';
import { styles } from './styles';

export const WorkoutListHeader = () => {
  return (
    <View style={styles.headerFix}>
      <View style={styles.iconAndTextInput}>
        <View style={styles.icon}>
          <SearchButton />
        </View>
        <View style={styles.textInput}>
          <SearchBox />
        </View>
      </View>
    </View>
  );
};
