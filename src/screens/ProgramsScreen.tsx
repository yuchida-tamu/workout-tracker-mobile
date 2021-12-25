import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ProgramList } from '../components/organisms/Programs/ProgramList';
import { ProgramListFooter } from '../components/organisms/Programs/ProgramListFooter';
import { navigate } from '../navigation/RootNavigation';
import { RootStackParamList } from '../navigation/RootStack';

type Props = StackScreenProps<RootStackParamList, 'ProgramList'>;

export const ProgramsScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToProgramDetail = useCallback(
    (programId: string) => navigation.navigate('ProgramDetail', { programId }),
    [navigation],
  );

  const navigateToProgramAdd = () => navigation.navigate('ProgramAdd');

  return (
    <View>
      <ProgramList navigate={navigateToProgramDetail} />
      <ProgramListFooter navigate={navigateToProgramAdd} />
    </View>
  );
};
