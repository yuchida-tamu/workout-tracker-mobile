import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  size: number;
  color: string;
};

export const Heart: React.FC<Props> = ({ size, color }) => {
  return <Icon name="heart" color={color} size={size} />;
};
