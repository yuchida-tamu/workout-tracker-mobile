import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { COLOR } from '../../../constants/colors';
import { ProgramType } from '../../../store/models/program/program';
import { LinearGradientButton } from '../../atoms/Button';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { ProgramDetailHeader } from './ProgramDetailHeader';
import { ProgramDetailQuantityDisplay } from './ProgramDetailQuantityDisplay';
import { ProgramDetailSchedule } from './ProgramDetailSchedule';
import { ProgramDetailWokroutDisplay } from './ProgramDetailWorkoutDisplay';
import { styles } from './styles';

type Props = {
  program: ProgramType;
};

export const ProgramDetailContainer: React.FC<Props> = ({ program }) => {
  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      <ProgramDetailHeader programName={program.name} />
      <ProgramDetailSchedule schedule={program.schedule} programId={program.id} />
      <ProgramDetailQuantityDisplay quantity={program.workoutList.length} />
      <ProgramDetailWokroutDisplay workoutList={program.workoutList} />
      <View style={styles.startButtonContainer}>
        <LinearGradientButton
          color1={COLOR.bg.gradient.ORANGE}
          color2={COLOR.bg.gradient.YELLOW}
          title="開始"
          style={styles.startButton}
          isShadow={true}
        />
      </View>
    </LinearGradientView>
  );
};
