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
  const user = useSelector(userSelector);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProgramDetail'>>();

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
      const p = RecordGroupModel.cerateRecordGroup({ ...progress });
      const updatedRecordGroup = RecordGroupModel.cerateRecordGroup({
        recordHolders: [...p.recordHolders, recordHolder],
      });

      setProgress(updatedRecordGroup);

      setPosition(nextPosition);
      if (nextPosition <= program.workoutList.length - 1) {
        setRecordHolder(
          RecordHolderModel.create({ workoutId: program.workoutList[nextPosition].id }),
        );
      }
      setIndexOfRecord(0);

      //update state in redux
      dispatch(updateProgramProgress(updatedRecordGroup, program.id));
    }
    if (isLast) {
      finish();
    }
  }, [recordHolder, setRecordHolder, setIndexOfRecord, setProgress]);
  const finish = useCallback(() => {
    dispatch(updateUserThunk(user));
    console.log('finish', user);
    goBack();
    navigation.reset({
      index: 1,
      routes: [
        { name: 'ProgramList' },
        { name: 'ProgramComplete', params: { programId: program.id } },
      ],
    });
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
          onPress={next}
          isDisable={isDisabled}
        />
      </View>
    </View>
  );
};
