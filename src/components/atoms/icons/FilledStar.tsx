import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  size: number;
  color: string;
};
export const FilledStar: React.FC<Props> = ({ size, color }) => {
  return <Icon name="star" color={color} size={size} />;
};
