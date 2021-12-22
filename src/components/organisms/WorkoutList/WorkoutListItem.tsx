import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Heart } from '../../atoms/Heart';
import { Heart2 } from '../../atoms/Heart2';
import { FilledStar } from '../../atoms/FilledStar';

type Props = {
  id: string;
  photo: string;
  name: string;
  level: number;
};

export const WorkoutListItem: FC<Props> = ({ id, photo, name, level }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  const makeLevel = () => {
    const levels = [];
    for (let i = 0; i < level; i++) {
      levels.push(<FilledStar />);
    }
    return levels;
  };

  return (
    <View style={styles.workoutCard}>
      <View style={styles.workoutCover}>
        <Text>{photo}</Text>
      </View>
      <View style={styles.workoutContentContainer}>
        <View style={styles.workoutContent}>
          <View style={styles.workoutNameAndLevel}>
            <Text style={styles.workoutName}>{name}</Text>
          </View>
          <View style={styles.workoutLevel}>{makeLevel()}</View>
        </View>
      </View>
      <View style={styles.workoutHeartButtonBack}>
        <TouchableOpacity onPress={likeHandler} style={styles.heartButton}>
          {isLiked ? <Heart /> : <Heart2 />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
