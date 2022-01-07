import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { BUTTON_SIZE } from '../../../constants/sizes';
import { ProgramContext } from '../../../context/program';
import { closeModal } from '../../../store/actions/app/action';
import { RecordModel } from '../../../store/models/workout/record';
import { RecordHolderModel } from '../../../store/models/workout/recordHolder';
import { Backdrop } from '../../atoms/Backdrop';
import { LinearGradientButton } from '../../atoms/Button';
import { styles } from './styles';

type ValueSet = {
  min: number;
  max: number;
  increment: number;
};

const loadSet: ValueSet = {
  min: 5.0,
  max: 200,
  increment: 0.25,
};

const repSet: ValueSet = {
  min: 1,
  max: 30,
  increment: 1,
};

export const ProgramProgressRecordPicker = () => {
  const dispatch = useDispatch();
  const [selectedLoadValue, setLoadValue] = useState<number>(loadSet.min);
  const [selectedRepValue, setRepValue] = useState<number>(repSet.min);
  const { workoutId, recordHolder, setRecordHolder, indexOfRecord, setIndexOfRecord } =
    useContext(ProgramContext);

  const onLoadValueChange = useCallback((itemValue: number) => {
    setLoadValue(itemValue);
  }, []);

  const onRepValueChange = useCallback((itemValue: number) => {
    setRepValue(itemValue);
  }, []);

  const renderLoadPickerItems = useMemo(() => {
    const loadPickerItems: JSX.Element[] = [];
    for (let i = loadSet.min; i <= loadSet.max; i += loadSet.increment) {
      const pickerItem = <Picker.Item label={i.toString()} value={i} key={`${i}_load`} />;
      loadPickerItems.push(pickerItem);
    }
    return loadPickerItems;
  }, []);

  const renderRepPickerItems = useMemo(() => {
    const refPickerItems: JSX.Element[] = [];
    for (let i = repSet.min; i <= repSet.max; i += repSet.increment) {
      const pickerItem = <Picker.Item label={i.toString()} value={i} key={`${i}_set`} />;
      refPickerItems.push(pickerItem);
    }
    return refPickerItems;
  }, []);

  const onPress = () => {
    if (
      selectedLoadValue === undefined ||
      !selectedRepValue === undefined ||
      !selectedLoadValue ||
      !selectedRepValue
    ) {
      return;
    }
    if (setRecordHolder && setIndexOfRecord) {
      const record = RecordModel.create({
        load: selectedLoadValue,
        reps: selectedRepValue,
        workoutId,
        indexOfSet: indexOfRecord,
      });

      const records = [...recordHolder.records, record];
      const updatedRecordHolder = RecordHolderModel.create({ ...recordHolder, records });
      setRecordHolder(updatedRecordHolder);
      setIndexOfRecord(indexOfRecord + 1);
    }
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
