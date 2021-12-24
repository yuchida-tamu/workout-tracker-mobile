import React, { useCallback, useEffect, useState } from 'react';
import { FlatListProps, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { shallowEqual, useDispatch } from 'react-redux';
import { updateProgramSchedule } from '../../../store/actions/user/actions';
import { SchdeuleModel, ScheduleType } from '../../../store/models/program/schedule';
import { styles } from './styles';

type Props = {
  schedule: ScheduleType;
  programId: string;
};

const week = ['日', '月', '火', '水', '木', '金', '土'];

export const ProgramDetailSchedule: React.FC<Props> = ({ programId, schedule }) => {
  const { days } = schedule;
  const [daysState, setDayState] = useState(days);

  const dispatch = useDispatch();

  const onDayPressHandler = useCallback(
    (index: number) => {
      const updated = days.map((d, i) => (index === i ? !d : d));
      setDayState(updated);
    },
    [days],
  );

  const renderItem = useCallback<NonNullable<FlatListProps<string>['renderItem']>>(
    ({ item, index }) => {
      return (
        <TouchableOpacity style={styles.dayContainer} onPress={() => onDayPressHandler(index)}>
          <View
            style={[styles.daySelected, days[index] ? styles.dayVisible : styles.dayInvisible]}
          />
          <Text style={styles.dayText}>{item}</Text>
        </TouchableOpacity>
      );
    },
    [days, onDayPressHandler],
  );

  const keyExtractor = useCallback<NonNullable<FlatListProps<string>['keyExtractor']>>(
    (day, index) => `${day}_${index}`,
    [],
  );

  useEffect(() => {
    if (shallowEqual(days, daysState)) {
      return;
    }
    dispatch(updateProgramSchedule(programId, SchdeuleModel.updateDays(schedule, daysState)));
  }, [days, daysState, dispatch, programId, schedule]);

  return (
    <FlatList
      data={week}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={styles.sheduleContainer}
      scrollEnabled={false}
    />
  );
};
