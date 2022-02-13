import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SIZES } from '../../../constants/sizes';
import { COLOR } from '../../../constants/colors';
import { FilledStar } from '../../atoms/icons/FilledStar';

type Props = {
  name: string;
  difficulty: number;
};

export const NameAndDifficulty: FC<Props> = ({ name, difficulty }) => {
  const makeDifficulty = () => {
    const levels = [];
    for (let i = 0; i < difficulty; i++) {
      levels.push(<FilledStar size={SIZES.icon.small} color={COLOR.SECONDARY} />);
    }
    return levels;
  };

  return (
    <>
      <View style={styles.workoutNameAndDifficulty}>
        <Text style={styles.workoutName}>{name}</Text>
      </View>
      <View style={styles.workoutDifficulty}>{makeDifficulty()}</View>
    </>
  );
};
