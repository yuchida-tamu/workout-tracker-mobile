import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProgramContext } from '../../../context/program';
import { openModal } from '../../../store/actions/app/action';
import { ModalType } from '../../../store/models/app/app';
import { styles } from './styles';

type Props = {
  numberOfRecord: number;
  workoutId: string;
};

export const ProgramProgressEmptyRecord: React.FC<Props> = ({ numberOfRecord, workoutId }) => {
  const dispatch = useDispatch();
  const { setWorkoutId } = useContext(ProgramContext);
  const onPress = () => {
    if (setWorkoutId) {
      setWorkoutId(workoutId);
    }
    dispatch(openModal(ModalType.RECORD_PICKER));
  };
  return (
    <TouchableOpacity style={styles.emptyRecordContainer} onPress={onPress}>
      <View style={styles.recordLabel}>
        <Text style={styles.recordLabelText}>{numberOfRecord + 1}</Text>
      </View>
      <View style={styles.emptyInput} />
    </TouchableOpacity>
  );
};
