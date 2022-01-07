import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { ProgramContext } from '../../../context/program';
import { ProgramType } from '../../../store/models/program/program';
import { RecordGroupModel } from '../../../store/models/workout/recordGroup';
import { RecordHolderModel } from '../../../store/models/workout/recordHolder';
import { LinearGradientButton } from '../../atoms/Button';
import { Title } from '../../atoms/TitleText';
import { ProgramDetailHeader } from '../ProgramDetail/ProgramDetailHeader';
import { ProgramProgressEmptyRecord } from './ProgramProgressEmptyRecord';
import { styles } from './styles';
import { RecordType } from '../../../store/models/workout/record';
import { useDispatch } from 'react-redux';
import { updateProgramProgress } from '../../../store/actions/user/actions';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/RootStack';

type RecordItemProp = {
  record: RecordType;
};

const RecordItem: React.FC<RecordItemProp> = ({ record }) => {
  return (
    <View key={record.id} style={styles.emptyRecordContainer}>
      <View style={styles.recordLabel}>
        <Text style={styles.recordLabelText}>{record.indexOfSet + 1}</Text>
      </View>
      <View style={styles.recordTextContainer}>
        <Text style={[styles.recordText, styles.recordValText]}>
          {record.load.toString() + 'kg'}
        </Text>
        <Text style={[styles.recordText, styles.recordUnitText]}>x</Text>
        <Text style={[styles.recordText, styles.recordRepText]}>{record.reps.toString()}</Text>
      </View>
    </View>
  );
};

type Props = {
  program: ProgramType;
  goBack: () => void;
};

export const ProgramProgress: React.FC<Props> = ({ program, goBack }) => {
  const { setProgress, recordHolder, setRecordHolder, setIndexOfRecord, progress } =
    useContext(ProgramContext);
  const [position, setPosition] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const nextPosition = position + 1;
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProgramDetail'>>();

  useEffect(() => {
    setIsLast(false);
    if (nextPosition >= program.workoutList.length) {
      setIsLast(true);
    }
  }, [nextPosition, program.workoutList.length]);

  const isDisabled = useMemo(() => recordHolder.records.length <= 0, [recordHolder.records.length]);

  const renderRecords = useMemo(() => {
    return recordHolder.records.map((record) => <RecordItem key={record.id} record={record} />);
  }, [recordHolder]);

  const totalWeight = useMemo(() => {
    let total = 0;
    for (const record of recordHolder.records) {
      total += record.load * record.reps;
    }
    return total.toString();
  }, [recordHolder.records]);

  const finish = useCallback(() => {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'ProgramList' },
        { name: 'ProgramComplete', params: { programId: program.id } },
      ],
    });
    setTimeout(() => goBack(), 200);
  }, [goBack, navigation, program.id]);

  const next = useCallback(() => {
    if (setRecordHolder && setIndexOfRecord && setProgress) {
      const updatedRecordGroup = RecordGroupModel.cerateRecordGroup({
        id: progress.id,
        recordHolders: [...progress.recordHolders, recordHolder],
      });
      setProgress(updatedRecordGroup);
      setPosition(isLast ? nextPosition - 1 : nextPosition);
      if (nextPosition <= program.workoutList.length - 1) {
        setRecordHolder(
          RecordHolderModel.create({ workoutId: program.workoutList[nextPosition].id }),
        );
      }
      setIndexOfRecord(0);

      // //update state in redux
      dispatch(updateProgramProgress(updatedRecordGroup, program.id));
    }
    if (isLast) {
      finish();
    }
  }, [
    setRecordHolder,
    setIndexOfRecord,
    setProgress,
    isLast,
    progress,
    recordHolder,
    nextPosition,
    program.workoutList,
    program.id,
    dispatch,
    finish,
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ProgramDetailHeader programName={program.workoutList[position].name} />
      <ScrollView contentContainerStyle={styles.recordListContentContainer}>
        {renderRecords}
        <ProgramProgressEmptyRecord
          numberOfRecord={recordHolder.records.length}
          workoutId={program.workoutList[position].id}
        />
      </ScrollView>
      <View>
        <Title text={`${totalWeight} kg`} />
      </View>
      <View style={styles.buttonContainer}>
        <LinearGradientButton
          color1={COLOR.bg.gradient.PURPLE}
          color2={COLOR.bg.gradient.TEAL}
          title={isLast ? 'FINISH' : '次へ'}
          style={styles.nextButton}
          isShadow={true}
          onPress={next}
          isDisable={isDisabled}
        />
      </View>
    </View>
  );
};
