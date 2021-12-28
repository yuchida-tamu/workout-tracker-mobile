import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { BUTTON_SIZE } from '../../../constants/sizes';
import { ProgramContext } from '../../../context/program';
import { closeModal } from '../../../store/actions/app/action';
import { updateRecord } from '../../../store/actions/program/actions';
import { updateUser } from '../../../store/actions/user/actions';
import { updateUserThunk } from '../../../store/actions/user/thunks/updateUserThunk';
import { UserModel } from '../../../store/models/user/user';
import { RecordModel } from '../../../store/models/workout/record';
import { userSelector, workoutIndexSelector } from '../../../store/selectors/user/userSelector';
import { Backdrop } from '../../atoms/Backdrop';
import { LinearGradientButton } from '../../atoms/Button';
import { styles } from './styles';

export const ProgramProgressRecordPicker = () => {
  const user = useSelector(userSelector);
  const [selectedLoadValue, setLoadValue] = useState<number>();
  const [selectedRepValue, setRepValue] = useState<number>();
  const { programId, workoutId, recordGroupId, recordHolderId } = useContext(ProgramContext);
  const indexOfCurrentRecord = useSelector(
    workoutIndexSelector(programId, workoutId, recordGroupId),
  );

  const dispatch = useDispatch();
  const onLoadValueChange = useCallback((itemValue: number) => {
    setLoadValue(itemValue);
  }, []);

  const onRepValueChange = useCallback((itemValue: number) => {
    setRepValue(itemValue);
  }, []);

  const renderLoadPickerItems = useMemo(() => {
    const loadPickerItems: JSX.Element[] = [];
    for (let i = 5.0; i <= 200; i += 0.25) {
      const pickerItem = <Picker.Item label={i.toString()} value={i} key={`${i}_load`} />;
      loadPickerItems.push(pickerItem);
    }
    return loadPickerItems;
  }, []);

  const renderRepPickerItems = useMemo(() => {
    const refPickerItems: JSX.Element[] = [];
    for (let i = 0; i <= 30; i += 1) {
      const pickerItem = <Picker.Item label={i.toString()} value={i} key={`${i}_set`} />;
      refPickerItems.push(pickerItem);
    }
    return refPickerItems;
  }, []);

  const onPress = () => {
    const record = RecordModel.create({
      load: selectedLoadValue,
      reps: selectedRepValue,
      workoutId,
      indexOfSet: indexOfCurrentRecord,
    });

    const update = UserModel.addRecordToProgram(user, record, programId, recordGroupId);

    dispatch(updateUser(update));

    dispatch(closeModal());
  };
  const close = () => {
    dispatch(closeModal());
  };

  return (
    <Backdrop style={styles.backdrop} onPress={close}>
      <View style={styles.recordPickerContainer}>
        <Picker
          style={styles.recordPicker}
          selectedValue={selectedLoadValue}
          onValueChange={onLoadValueChange}>
          {renderLoadPickerItems}
        </Picker>
        <View style={styles.recordUnitTextContainer}>
          <Text>kg</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
        <Picker
          style={styles.recordPicker}
          selectedValue={selectedRepValue}
          onValueChange={onRepValueChange}>
          {renderRepPickerItems}
        </Picker>
      </View>

      <LinearGradientButton
        size={BUTTON_SIZE.SMALL}
        color1={COLOR.PRIMARY}
        color2={COLOR.SECONDARY}
        title="入力"
        onPress={onPress}
        style={styles.recordPickerButton}
      />
    </Backdrop>
  );
};
