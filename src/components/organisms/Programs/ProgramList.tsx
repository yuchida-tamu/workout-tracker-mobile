import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { mockUser } from '../../../mock/user';
import { ProgramType } from '../../../store/models/program/program';
import { programsSelector } from '../../../store/selectors/user/userSelector';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { ProgramListFooter } from './ProgramListFooter';
import { ProgramListItem } from './ProgramListItem';
import { styles } from './styles';

//DELETE
const mockPrograms = mockUser.programs;

export const ProgramList: React.FC = () => {
  const programs = useSelector(programsSelector);

  const renderItem = useCallback(
    ({ item }: { item: ProgramType }) => <ProgramListItem programName={item.name} id={item.id} />,
    [],
  );

  return (
    <View>
      <LinearGradientView
        color1={COLOR.bg.gradient.PURPLE}
        color2={COLOR.SECONDARY}
        style={styles.programListContainer}>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          data={mockPrograms}
          renderItem={renderItem}
          style={styles.programList}
        />
      </LinearGradientView>
      <ProgramListFooter />
    </View>
  );
};
