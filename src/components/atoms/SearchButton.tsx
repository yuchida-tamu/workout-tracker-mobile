import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  color?: string;
  size?: number;
};

export const SearchButton: React.FC<Props> = ({ color, size }) => {
  return (
    <View>
      <Icon name="search-circle-outline" color={color} size={size} />
    </View>
  );
};
