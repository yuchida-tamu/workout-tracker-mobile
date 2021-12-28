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

type Props = {
  program: ProgramType;
};

export const ProgramProgress: React.FC<Props> = ({ program }) => {
  const { setProgress, recordHolder, setRecordHolder, setIndexOfRecord, progress } =
    useContext(ProgramContext);
  const [position, setPosition] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const nextPosition = position + 1;
  useEffect(() => {
    //initialize progress context
    if (nextPosition + 1 > program.workoutList.length - 1) {
      setIsLast(true);
    }
    if (setRecordHolder && setIndexOfRecord) {
      setRecordHolder(RecordHolderModel.create({ workoutId: program.workoutList[0].id }));
      setIndexOfRecord(0);
    }
  }, []);

  const renderRecords = useMemo(() => {
    return recordHolder.records.map((record) => (
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
    ));
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
    }
    if (isLast) {
      //store the progress to the app
    }
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
        />
      </View>
    </View>
  );
};
