import React from 'react';
import { View } from 'react-native';
import { WorkoutListHeader } from '../components/organisms/WorkoutList/WorkoutListHeader';
import { WorkoutList } from '../components/organisms/WorkoutList/WorkoutList';
import { COLOR } from '../constants/colors';

export const WorkoutListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3 }}>
        <WorkoutListHeader />
      </View>
      <View style={{ flex: 2 }}>
        <WorkoutList />
      </View>
    </View>
  );
};
