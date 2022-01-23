import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Heart } from '../../atoms/icons/Heart';
import { FilledStar } from '../../atoms/icons/FilledStar';
import { SIZES } from '../../../constants/sizes';
import { COLOR } from '../../../constants/colors';

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
      levels.push(<FilledStar size={SIZES.icon.small} color={COLOR.SECONDARY} />);
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
          {isLiked ? (
            <Heart size={SIZES.icon.small} color={COLOR.PRIMARY} />
          ) : (
            <Heart size={SIZES.icon.small} color={COLOR.GRAY} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
