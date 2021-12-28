import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ProgramContext } from '../../../context/program';
import { ProgramType } from '../../../store/models/program/program';
import {
  idOfFirstRecordHolderSelector,
  programByIdSelector,
  userSelector,
} from '../../../store/selectors/user/userSelector';
import { ProgramDetailHeader } from '../ProgramDetail/ProgramDetailHeader';
import { ProgramProgressEmptyRecord } from './ProgramProgressEmptyRecord';
import { styles } from './styles';

type Props = {
  program: ProgramType;
};

export const ProgramProgress: React.FC<Props> = ({ program }) => {
  const { setRecordHolderId, recordGroupId } = useContext(ProgramContext);
  const [position, setPosition] = useState(0);
  const [records, setRecords] = useState([]);
  const firstHolderId = useSelector(idOfFirstRecordHolderSelector(program.id));

  console.log(program.recordMap.filter((rm) => rm.id === recordGroupId)[0]);

  useEffect(() => {
    if (setRecordHolderId) {
      setRecordHolderId(firstHolderId);
    }
  }, [firstHolderId, setRecordHolderId]);

  return (
    <View style={{ flex: 1 }}>
      <ProgramDetailHeader programName={program.workoutList[position].name} />
      <ScrollView contentContainerStyle={styles.recordListContentContainer}>
        <ProgramProgressEmptyRecord
          numberOfRecord={records.length}
          workoutId={program.workoutList[position].id}
        />
      </ScrollView>
    </View>
  );
};
