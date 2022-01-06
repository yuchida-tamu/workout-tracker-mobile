import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
import { ProgramContext } from '../../../context/program';
import { useDispatch } from 'react-redux';
import { addNewRecordGroupToProgram } from '../../../store/actions/user/actions';
import { RecordGroupModel } from '../../../store/models/workout/recordGroup';
import { useSharedValue } from 'react-native-reanimated';

type Props = {
  program: ProgramType;
};

export const ProgramDetailContainer: React.FC<Props> = ({ program }) => {
  const [isStarted, setIsStarted] = useState(false);
  const { setProgramId, setProgress } = useContext(ProgramContext);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const opacity = useSharedValue(1);

  const onPress = (index: number) => {
    opacity.value = 0;
    setIsExpanded(true);
  };

  const start = () => {
    setIsStarted(!isStarted);
    if (setProgramId) {
      setProgramId(program.id);
    }
    dispatch(addNewRecordGroupToProgram(program.id));
  };

  const goBack = () => {
    setIsStarted(false);
  };

  useEffect(() => {
    if (setProgress) setProgress(RecordGroupModel.cerateRecordGroup());
  }, []);

  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      {!isStarted ? (
        <>
          <ProgramDetailHeader programName={program.name} />
          <ProgramDetailSchedule schedule={program.schedule} programId={program.id} />
          {!isExpanded && <ProgramDetailQuantityDisplay quantity={program.workoutList.length} />}
          <ProgramDetailWokroutDisplay
            workoutList={program.workoutList}
            isExpanded={isExpanded}
            onPress={onPress}
            opacity={opacity}
            programId={program.id}
          />
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
        </>
      ) : (
        <ProgramProgress program={program} goBack={goBack} />
      )}
    </LinearGradientView>
  );
};
