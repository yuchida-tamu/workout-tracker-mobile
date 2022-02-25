import React, { useCallback, useEffect, useState } from 'react';
import { FlatListProps, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateUserThunk } from '../../../store/actions/user/thunks/updateUserThunk';
import { SchdeuleModel, ScheduleType } from '../../../store/models/program/schedule';
import { UserModel } from '../../../store/models/user/user';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { styles } from './styles';

type Props = {
  schedule: ScheduleType;
  programId: string;
};

const week = ['日', '月', '火', '水', '木', '金', '土'];

export const ProgramDetailSchedule: React.FC<Props> = ({ programId, schedule }) => {
  const { days } = schedule;
  const [daysState, setDayState] = useState(days);
  const user = useSelector(userSelector);

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
      const onPress = () => onDayPressHandler(index);
      return (
        <TouchableOpacity style={styles.dayContainer} onPress={onPress}>
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

    const updatedUser = UserModel.updateProgramSchedule(
      user,
      programId,
      SchdeuleModel.updateDays(schedule, daysState),
    );
    dispatch(updateUserThunk(updatedUser));
  }, [days, daysState, dispatch, programId, schedule, user]);

  return (
    <View style={styles.scheduleList}>
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
