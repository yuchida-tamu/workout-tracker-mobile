import React, { useCallback } from 'react';
import { Button, View } from 'react-native';
import { UserInfo } from '../components/organisms/User/UserInfo';
import { UserHeader } from '../components/organisms/User/UserHeader';
import { commonStyle } from '../styles/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';
import { useDispatch } from 'react-redux';
import { initializeAppThunk } from '../store/actions/app/thunks/initializeAppThunk';

type Props = NativeStackScreenProps<RootStackParamList, 'User'>;

export const UserScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToEdit = useCallback(() => navigation.navigate('UserEdit'), [navigation]);
  const dispatch = useDispatch();
  const initialize = () => {
    dispatch(initializeAppThunk());
  };
  return (
    <View style={commonStyle.container}>
      <UserHeader navigate={navigateToEdit} />
      <UserInfo />
      {/* only for debug purpose, delete  */}
      <Button title="logout" onPress={initialize} />
    </View>
  );
};
