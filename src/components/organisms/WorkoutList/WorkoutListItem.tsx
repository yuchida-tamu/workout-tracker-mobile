import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { HeartButton } from '../../molecules/Workout/HeartButton';
import { NameAndDifficulty } from '../../molecules/Workout/NameAndDifficulty';

type Props = {
  id: string;
  photo: string;
  name: string;
  difficulty: number;
};

export const WorkoutListItem: FC<Props> = ({ id, photo, name, difficulty }) => {
  return (
    <View style={styles.workoutCard}>
      <View style={styles.workoutCover}>
        <Text>{photo}</Text>
      </View>
      <View style={styles.workoutContentContainer}>
        <View style={styles.workoutContent}>
          <NameAndDifficulty name={name} difficulty={difficulty} />
        </View>
      </View>
      <View style={styles.workoutHeartButtonPosition}>
        <HeartButton />
      </View>
    </View>
  );
};
