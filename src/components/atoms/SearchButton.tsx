import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  color?: string;
  size?: number;
};

export const SearchButton: React.FC<Props> = ({ color, size }) => {
  return <Icon name="search-circle-outline" color={color} size={size} />;
};
