import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  color: string;
};

export const Heart2 = () => {
  return (
    <View>
      <Icon name="heart" color={'#505050'} size={30} />
    </View>
  );
};
