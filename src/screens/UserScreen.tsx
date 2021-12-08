import React from 'react';
import { View } from 'react-native';
import { UserInfo } from '../components/organisms/User/UserInfo';
import { UserHeader } from '../components/organisms/User/UserHeader';

export const UserScreen: React.FC = () => {
  return (
    <>
      <UserHeader />
      <UserInfo />
    </>
  );
};
