import React from 'react';
import { View } from 'react-native';
import { WorkoutListHeader } from '../components/organisms/WorkoutList/WorkoutListHeader';
import { WorkoutList } from '../components/organisms/WorkoutList/WorkoutList';
import { commonStyle } from '../styles/styles';

export const WorkoutListScreen = () => {
  return (
    <View style={commonStyle.container}>
      <WorkoutList />
    </View>
  );
};
