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
import { RecordHolderModel } from '../../../store/models/workout/recordHolder';

type Props = {
  program: ProgramType;
};

export const ProgramDetailContainer: React.FC<Props> = ({ program }) => {
  const [isStarted, setIsStarted] = useState(false);
  const { setProgramId, setProgress, setRecordHolder, setIndexOfRecord } =
    useContext(ProgramContext);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const opacity = useSharedValue(1);

  const onPress = (index: number) => {
    opacity.value = 0;
    setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  };

  const onCloseProgressList = () => {
    opacity.value = 1;
    setIsExpanded(false);
  };

  const start = () => {
    if (setProgramId && setRecordHolder && setIndexOfRecord && setProgress) {
      setProgramId(program.id);
      setProgress(RecordGroupModel.cerateRecordGroup());
      setRecordHolder(RecordHolderModel.create({ workoutId: program.workoutList[0].id }));
      setIndexOfRecord(0);
      setIsStarted(!isStarted);
    }
  };

  const goBack = () => {
    setIsStarted(false);
  };

  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      {!isStarted ? (
        <>
          <ProgramDetailHeader programName={program.name} />
          {!isExpanded && (
            <>
              <ProgramDetailSchedule schedule={program.schedule} programId={program.id} />
              <ProgramDetailQuantityDisplay quantity={program.workoutList.length} />
            </>
          )}
          <ProgramDetailWokroutDisplay
            workoutList={program.workoutList}
            isExpanded={isExpanded}
            onPress={onPress}
            onClose={onCloseProgressList}
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
