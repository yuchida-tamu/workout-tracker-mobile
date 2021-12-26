import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { COLOR } from '../../../constants/colors';
import { ProgramType } from '../../../store/models/program/program';
import { LinearGradientButton } from '../../atoms/Button';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { ProgramDetailHeader } from './ProgramDetailHeader';
import { ProgramDetailQuantityDisplay } from './ProgramDetailQuantityDisplay';
import { ProgramProgress } from '../ProgramProgress/ProgramProgress';
import { ProgramDetailSchedule } from './ProgramDetailSchedule';
import { ProgramDetailWokroutDisplay } from './ProgramDetailWorkoutDisplay';
import { styles } from './styles';

type Props = {
  program: ProgramType;
};

export const ProgramDetailContainer: React.FC<Props> = ({ program }) => {
  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(!isStarted);
  };
  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      {!isStarted ? (
        <>
          <ProgramDetailHeader programName={program.name} />
          <ProgramDetailSchedule schedule={program.schedule} programId={program.id} />
          <ProgramDetailQuantityDisplay quantity={program.workoutList.length} />
          <ProgramDetailWokroutDisplay workoutList={program.workoutList} />
        </>
      ) : (
        <ProgramProgress program={program} />
      )}
      <View style={styles.startButtonContainer}>
        <LinearGradientButton
          color1={COLOR.bg.gradient.ORANGE}
          color2={COLOR.bg.gradient.YELLOW}
          title="開始"
          style={styles.startButton}
          isShadow={true}
          onPress={start}
        />
      </View>
    </LinearGradientView>
  );
};
