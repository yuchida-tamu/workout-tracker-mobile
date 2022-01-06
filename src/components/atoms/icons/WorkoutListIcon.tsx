import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  color?: string;
  size?: number;
};

export const WorkoutListIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <View>
      <Icon name="book-open" color={color} size={size} />
    </View>
  );
};
