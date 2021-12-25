import React, { useCallback } from 'react';
import { FlatList, FlatListProps, Text, View, Image } from 'react-native';
import { WorkoutModelType } from '../../../store/models/workout/workout';
import { styles } from './styles';

type Props = {
  workoutList: WorkoutModelType[];
};

export const ProgramDetailWokroutDisplay: React.FC<Props> = ({ workoutList }) => {
  const renderItem = useCallback<NonNullable<FlatListProps<WorkoutModelType>['renderItem']>>(
    ({ item, index }) => {
      return (
        <View style={styles.workoutItemContainer}>
          <View style={styles.workoutImageContainer}>
            <Image source={{ uri: item.imageUrl }} />
          </View>
          <View style={styles.workoutItemDescription}>
            <Text style={styles.workoutItemTitle}>{item.name}</Text>
          </View>
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.workoutListContainer}>
      <FlatList
        data={workoutList}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.displayContentContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
