import React from 'react';
import { View } from 'react-native';
import { UserInfo } from '../components/organisms/User/UserInfo';
import { UserHeader } from '../components/organisms/User/UserHeader';
import { commonStyle } from '../styles/styles';

export const UserScreen: React.FC = () => {
  return (
    <View style={commonStyle.container}>
      <UserHeader />
      <UserInfo />
    </View>
  );
};
