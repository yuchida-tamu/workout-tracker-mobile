import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  color: string;
};

export const Heart = () => {
  return (
    <View>
      <Icon name="heart" color={'#FF5656'} size={30} />
    </View>
  );
};
