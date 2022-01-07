import React from 'react';
import { View } from 'react-native';
import { commonStyle } from '../styles/styles';
import { ProgramCompletePage } from '../components/organisms/ProgramDetail/ProgramCompletePage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../store/selectors/user/userSelector';
import { updateUserThunk } from '../store/actions/user/thunks/updateUserThunk';

type Props = StackScreenProps<RootStackParamList, 'ProgramComplete'>;

export const ProgramCompleteScreen: React.FC<Props> = ({
  navigation,
  route: {
    params: { programId },
  },
}) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigateToProgram = () => {
    dispatch(updateUserThunk(user));
    navigation.reset({
      index: 1,
      routes: [{ name: 'ProgramList' }, { name: 'ProgramDetail', params: { programId } }],
    });
  };
  return (
    <View style={commonStyle.container}>
      <ProgramCompletePage navigate={navigateToProgram} />
    </View>
  );
};
