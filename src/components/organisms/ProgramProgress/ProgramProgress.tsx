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
import { useDispatch, useSelector } from 'react-redux';
import { updateProgramProgress } from '../../../store/actions/user/actions';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { updateUserThunk } from '../../../store/actions/user/thunks/updateUserThunk';
import { navigate } from '../../../navigation/RootNavigation';

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
  const user = useSelector(userSelector);

  useEffect(() => {
    //initialize progress context

    if (setRecordHolder && setIndexOfRecord) {
      setRecordHolder(RecordHolderModel.create({ workoutId: program.workoutList[0].id }));
      setIndexOfRecord(0);
    }
  }, []);

  useEffect(() => {
    setIsLast(false);
    if (nextPosition >= program.workoutList.length) {
      setIsLast(true);
    }
  }, [nextPosition]);

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

  const next = useCallback(() => {
    if (setRecordHolder && setIndexOfRecord && setProgress) {
      if (nextPosition > program.workoutList.length - 1) {
        return;
      }
      const p = RecordGroupModel.cerateRecordGroup({ ...progress });
      const updatedRecordGroup = RecordGroupModel.cerateRecordGroup({
        recordHolders: [...p.recordHolders, recordHolder],
      });

      setProgress(updatedRecordGroup);

      setRecordHolder(
        RecordHolderModel.create({ workoutId: program.workoutList[nextPosition].id }),
      );
      setPosition(nextPosition);

      setIndexOfRecord(0);

      //update state in redux
      dispatch(updateProgramProgress(updatedRecordGroup, program.id));
    }
  }, []);
  const finish = useCallback(() => {
    console.log('save');
    dispatch(updateUserThunk(user));
  }, []);

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
          onPress={isLast ? finish : next}
          isDisable={isDisabled}
        />
      </View>
    </View>
  );
};
