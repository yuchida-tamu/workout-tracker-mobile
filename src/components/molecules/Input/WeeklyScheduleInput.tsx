import React, { useState, useCallback } from 'react';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { FlatList, FlatListProps, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

type Props = {
  onChange: (value: boolean[]) => void;
};

const week = ['日', '月', '火', '水', '木', '金', '土'];
const defaultSelection = [false, false, false, false, false, false, false];

export const WeeklyScheduleInput: React.FC<Props> = ({ onChange }) => {
  const [daysState, setDayState] = useState<boolean[]>(defaultSelection);

  const onDayPressHandler = useCallback(
    (index: number) => {
      const updated = daysState.map((d, i) => (index === i ? !d : d));
      setDayState(updated);
      if (updated.filter((item) => item).length === 0) {
        return onChange([]);
      }
      onChange(updated);
    },
    [daysState, onChange],
  );

  const renderItem = useCallback<NonNullable<FlatListProps<string>['renderItem']>>(
    ({ item, index }) => {
      return (
        <TouchableOpacity style={styles.dayContainer} onPress={() => onDayPressHandler(index)}>
          <View
            style={[styles.daySelected, daysState[index] ? styles.dayVisible : styles.dayInvisible]}
          />
          <Text style={styles.dayText}>{item}</Text>
        </TouchableOpacity>
      );
    },
    [daysState, onDayPressHandler],
  );

  const keyExtractor = useCallback<NonNullable<FlatListProps<string>['keyExtractor']>>(
    (day, index) => `${day}_${index}`,
    [],
  );

  return (
    <View style={styles.scheduleList}>
      <Text style={styles.label}>スケジュール</Text>
      <FlatList
        data={week}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.sheduleContainer}
        scrollEnabled={false}
      />
    </View>
  );
};

const SCHEDULE_CONTAINER_HEIGHT = 72;
const DAY_MARKER_SIZE = 28;

export const styles = StyleSheet.create({
  sheduleContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },

  scheduleList: { height: SCHEDULE_CONTAINER_HEIGHT, width: '80%', marginTop: SPACING.SMALL },
  dayContainer: {
    height: DAY_MARKER_SIZE,
    width: DAY_MARKER_SIZE,
  },
  daySelected: {
    height: DAY_MARKER_SIZE,
    width: DAY_MARKER_SIZE,
    borderRadius: DAY_MARKER_SIZE / 2,
    borderWidth: 2,
    borderColor: COLOR.SECONDARY,
    position: 'absolute',
    top: DAY_MARKER_SIZE / 2,
    left: DAY_MARKER_SIZE / 2,
    transform: [{ translateX: -DAY_MARKER_SIZE / 2 }, { translateY: -DAY_MARKER_SIZE / 2 }],
  },
  dayVisible: {
    opacity: 1,
  },
  dayInvisible: {
    opacity: 0,
  },
  dayText: { color: COLOR.GRAY, textAlign: 'center', fontSize: SIZES.font.SMALL },
  label: {
    color: COLOR.GRAY,
  },
});
