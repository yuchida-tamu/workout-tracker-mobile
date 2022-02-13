import React from 'react';
import { ScrollView, View, FlatList, FlatListProps, Dimensions } from 'react-native';
import { WorkoutListItem } from './WorkoutListItem';
import { useSelector } from 'react-redux';
import { workoutListSelector } from '../../../store/selectors/workout/workoutSelector';
import { WorkoutModelType } from '../../../store/models/workout/workout';
import { WorkoutListHeader } from './WorkoutListHeader';

const windowHeight = Dimensions.get('window').height;

export const WorkoutList: React.FC = () => {
  const workoutList = useSelector(workoutListSelector);

  const renderItem = ({ item }: { item: WorkoutModelType; index: number }) => (
    <WorkoutListItem
      key={item.id}
      id={item.id}
      photo={item.imageUrl}
      name={item.name}
      difficulty={item.difficulty}
    />
  );

  return (
    <View>
      <FlatList
        data={workoutList}
        renderItem={renderItem}
        ListHeaderComponent={<WorkoutListHeader />}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};
