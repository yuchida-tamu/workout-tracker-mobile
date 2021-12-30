import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { ProgramAddForm } from '../components/organisms/Programs/ProgramAddForm';
import { ProgramList } from '../components/organisms/Programs/ProgramList';
import { ProgramListFooter } from '../components/organisms/Programs/ProgramListFooter';
import { RootStackParamList } from '../navigation/RootStack';

type Props = StackScreenProps<RootStackParamList, 'ProgramList'>;

export const ProgramsScreen: React.FC<Props> = ({ navigation }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const navigateToProgramDetail = useCallback(
    (programId: string) => navigation.navigate('ProgramDetail', { programId }),
    [navigation],
  );

  const navigateToProgramAdd = () => setIsShrunk(!isShrunk);
  const closeForm = () => setIsShrunk(false);

  return (
    <View>
      <ProgramList navigate={navigateToProgramDetail} isShrunk={isShrunk} />
      <ProgramListFooter navigate={navigateToProgramAdd} isShrunk={isShrunk} />
      {isShrunk && <ProgramAddForm close={closeForm} />}
    </View>
  );
};
