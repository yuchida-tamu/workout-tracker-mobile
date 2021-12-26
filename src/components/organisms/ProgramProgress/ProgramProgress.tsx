import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { ProgramType } from '../../../store/models/program/program';
import { ProgramDetailHeader } from '../ProgramDetail/ProgramDetailHeader';
import { ProgramProgressEmptyRecord } from './ProgramProgressEmptyRecord';
import { ProgramProgressRecordPicker } from './ProgramProgressRecordPicker';
import { styles } from './styles';

type Props = {
  program: ProgramType;
};

export const ProgramProgress: React.FC<Props> = ({ program }) => {
  const [position, setPosition] = useState(0);
  const [records, setRecords] = useState([]);
  return (
    <View style={{ flex: 1 }}>
      <ProgramDetailHeader programName={program.workoutList[position].name} />
      <ScrollView contentContainerStyle={styles.recordListContentContainer}>
        <ProgramProgressEmptyRecord numberOfRecord={records.length} />
      </ScrollView>
    </View>
  );
};
