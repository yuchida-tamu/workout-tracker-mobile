import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/actions/app/action';
import { ModalType } from '../../../store/models/app/app';
import { ProgramType } from '../../../store/models/program/program';
import { styles } from './styles';

type Props = {
  numberOfRecord: number;
};

export const ProgramProgressEmptyRecord: React.FC<Props> = ({ numberOfRecord }) => {
  const dispatch = useDispatch();
  const onPress = () => dispatch(openModal(ModalType.RECORD_PICKER));
  return (
    <TouchableOpacity style={styles.emptyRecordContainer} onPress={onPress}>
      <View style={styles.recordLabel}>
        <Text style={styles.recordLabelText}>{numberOfRecord + 1}</Text>
      </View>
      <View style={styles.emptyInput} />
    </TouchableOpacity>
  );
};
