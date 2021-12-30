import React from 'react';
import { View } from 'react-native';
import { commonStyle } from '../styles/styles';
import { ProgramCompletePage } from '../components/organisms/ProgramDetail/ProgramCompletePage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = StackScreenProps<RootStackParamList, 'ProgramComplete'>;

export const ProgramCompleteScreen: React.FC<Props> = ({
  navigation,
  route: {
    params: { programId },
  },
}) => {
  const navigateToProgram = () => {
    navigation.reset({ index: 0, routes: [{ name: 'ProgramDetail', params: { programId } }] });
  };
  return (
    <View style={commonStyle.container}>
      <ProgramCompletePage navigate={navigateToProgram} />
    </View>
  );
};
