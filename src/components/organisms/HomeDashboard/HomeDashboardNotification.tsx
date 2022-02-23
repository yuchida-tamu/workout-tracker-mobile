import React, { useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, ListRenderItem } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { ProgramType } from '../../../store/models/program/program';
import { ProceedIcon } from '../../atoms/icons/ProceedIcon';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { styles } from './styles';

type Props = {
  programsForToday: ProgramType[];
};

export const HomeDashboardNotification: React.FC<Props> = ({ programsForToday }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasProgramsForToday = programsForToday.length > 0;

  const message = useMemo(() => {
    return hasProgramsForToday
      ? `今日は${programsForToday[0].category} day です！`
      : '今日はしっかり休みましょう';
  }, [hasProgramsForToday, programsForToday]);

  const colors: {
    a: string;
    b: string;
  } = useMemo(() => {
    return hasProgramsForToday
      ? { a: COLOR.bg.gradient.ORANGE, b: COLOR.bg.gradient.YELLOW }
      : { a: COLOR.bg.gradient.TEAL, b: COLOR.bg.gradient.LIGHT_GREEN };
  }, [hasProgramsForToday]);

  const start = {
    x: 0,
    y: 0.5,
  };

  const end = {
    x: 1,
    y: 0.5,
  };

  const renderItem = useCallback<ListRenderItem<ProgramType>>(({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.category}</Text>
      </View>
    );
  }, []);

  const onPressIcon = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <>
      <LinearGradientView
        style={styles.notificationContainer}
        color1={colors.a}
        color2={colors.b}
        start={start}
        end={end}
        isBoxShadow={true}>
        <View style={styles.numOfProgramLabel}>
          <Text style={styles.numOfProgramText}>{programsForToday.length}</Text>
        </View>
        <Text style={styles.notificationText}>{message}</Text>
        <TouchableOpacity style={styles.proceedIconContainer} onPress={onPressIcon}>
          <ProceedIcon color={COLOR.WHITE} size={SIZES.icon.small} />
        </TouchableOpacity>
      </LinearGradientView>
      {isExpanded && <FlatList data={programsForToday} renderItem={renderItem} />}
    </>
  );
};
