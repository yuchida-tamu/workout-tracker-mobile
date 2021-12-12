import React, { useCallback } from 'react';
import { View } from 'react-native';
import { UserInfo } from '../components/organisms/User/UserInfo';
import { UserHeader } from '../components/organisms/User/UserHeader';
import { commonStyle } from '../styles/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'User'>;

export const UserScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToEdit = useCallback(() => navigation.navigate('UserEdit'), [navigation]);

  return (
    <View style={commonStyle.container}>
      <UserHeader navigate={navigateToEdit} />
      <UserInfo />
    </View>
  );
};
