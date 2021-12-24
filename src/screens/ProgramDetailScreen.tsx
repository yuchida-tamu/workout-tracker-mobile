import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ProgramDetailContainer } from '../components/organisms/ProgramDetail/ProgramDetailContainer';
import { RootStackParamList } from '../navigation/RootStack';
import { programByIdSelector } from '../store/selectors/user/userSelector';
import { commonStyle } from '../styles/styles';

type Props = StackScreenProps<RootStackParamList, 'ProgramDetail'>;

export const ProgramDetailScreen: React.FC<Props> = ({
  route: {
    params: { programId },
  },
}) => {
  const program = useSelector(programByIdSelector(programId));
  return (
    <View style={commonStyle.container}>
      <ProgramDetailContainer program={program} />
    </View>
  );
};
