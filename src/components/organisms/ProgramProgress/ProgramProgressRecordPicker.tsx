import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { BUTTON_SIZE } from '../../../constants/sizes';
import { closeModal } from '../../../store/actions/app/action';
import { Backdrop } from '../../atoms/Backdrop';
import { LinearGradientButton } from '../../atoms/Button';
import { styles } from './styles';

export const ProgramProgressRecordPicker = () => {
  const [selectedLoadValue, setLoadValue] = useState<number>();
  const [selectedRepValue, setRepValue] = useState<number>();

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
      const pickerItem = <Picker.Item label={i.toString()} value={i} />;
      loadPickerItems.push(pickerItem);
    }
    return loadPickerItems;
  }, []);

  const renderRepPickerItems = useMemo(() => {
    const refPickerItems: JSX.Element[] = [];
    for (let i = 0; i <= 30; i += 1) {
      const pickerItem = <Picker.Item label={i.toString()} value={i} />;
      refPickerItems.push(pickerItem);
    }
    return refPickerItems;
  }, []);

  const onPress = () => {
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
      />
    </Backdrop>
  );
};
