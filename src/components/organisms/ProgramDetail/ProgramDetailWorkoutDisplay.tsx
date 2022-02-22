import React, { useCallback, useState } from 'react';
import { FlatList, FlatListProps, Text, View, TouchableOpacity } from 'react-native';
import { WorkoutModelType } from '../../../store/models/workout/workout';
import { styles } from './styles';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import {
  progressFilteredByWorkoutSelector,
  ProgressDisplayDataType,
} from '../../../store/selectors/user/userSelector';
import { SPACING } from '../../../constants/spacing';
import { COLOR } from '../../../constants/colors';

type Props = {
  workoutList: WorkoutModelType[];
  isExpanded: boolean;
  opacity: Animated.SharedValue<number>;
  onPress: (index: number) => void;
  onClose: () => void;
  programId: string;
};

export const ProgramDetailWokroutDisplay: React.FC<Props> = ({
  workoutList,
  onPress,
  opacity,
  isExpanded,
  programId,
  onClose,
}) => {
  const [selectedWorkout, setSelectedWorkout] = useState(workoutList[0]);
  const progressList: ProgressDisplayDataType[] | undefined = useSelector(
    progressFilteredByWorkoutSelector(programId, selectedWorkout.id),
  );

  const animatedStyle = useAnimatedStyle(() => {
    const translate = interpolate(opacity.value, [1, 0], [0, -100]);

    return {
      opacity: withTiming(opacity.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      transform: [
        {
          translateY: withTiming(translate, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });

  const onPressWorkoutItemHandler = useCallback(
    (index: number) => {
      onPress(index);
      if (index < workoutList.length) {
        setSelectedWorkout(workoutList[index]);
      }
    },
    [onPress, workoutList],
  );

  const renderItem = useCallback<NonNullable<FlatListProps<WorkoutModelType>['renderItem']>>(
    ({ item, index }) => {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => onPressWorkoutItemHandler(index)}>
          <Animated.View style={[styles.workoutItemContainer, animatedStyle]}>
            <View style={styles.workoutItemDescription}>
              <Text style={styles.workoutItemTitle}>{item.name}</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      );
    },
    [animatedStyle, onPressWorkoutItemHandler],
  );

  const renderProgressItem = useCallback<
    NonNullable<FlatListProps<ProgressDisplayDataType>['renderItem']>
  >(({ item }) => {
    const dateString = item.date.split('-');
    const date = `${dateString[0]} / ${dateString[1]} / ${dateString[2]}`;
    return <RecordItem item={item} date={date} />;
  }, []);

  return (
    <View style={styles.workoutListContainer}>
      {!isExpanded && (
        <FlatList
          data={workoutList}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={styles.displayContentContainer}
          showsHorizontalScrollIndicator={false}
        />
      )}
      {progressList && isExpanded && (
        <View style={{ flex: 1 }}>
          <View style={styles.progressDisplayCloseButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.progressDisplayCloseButton}>
              <Text style={styles.progressDisplayCloseText}>x</Text>
            </TouchableOpacity>
          </View>
          <FlatList data={progressList} renderItem={renderProgressItem} />
        </View>
      )}
    </View>
  );
};

const RecordItem = ({ item, date }: { item: ProgressDisplayDataType; date: string }) => {
  return (
    <View style={styles.progressItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.progressDate}>{date}</Text>
        <Text style={{ marginRight: SPACING.SMALL, color: COLOR.GRAY }}>
          体調：{item.condition.toString()}
        </Text>
      </View>
      <Labels />
      <View style={styles.progressContentRow}>
        <View style={styles.progressItemDataContainer}>
          <Text style={styles.progressItemDataText}>{item.loadPerRep.toFixed(2)}</Text>
          <Text style={styles.unitText}>回</Text>
        </View>
        <View style={styles.progressItemDataContainer}>
          <Text style={styles.progressItemDataText}>{item.max.toFixed(2)}</Text>
          <Text style={styles.unitText}>kg</Text>
        </View>
        <View style={styles.progressItemDataContainer}>
          <Text style={styles.progressItemDataText}>{item.total.toFixed(2)}</Text>
          <Text style={styles.unitText}>kg</Text>
        </View>
      </View>
    </View>
  );
};

const Labels = () => {
  return (
    <View style={styles.progressContentRow}>
      <View style={styles.progressItemDataContainer}>
        <View style={styles.progressItemDataLabel}>
          <Text style={styles.progressItemDataLabelText}>load/rep</Text>
        </View>
      </View>
      <View style={styles.progressItemDataContainer}>
        <View style={styles.progressItemDataLabel}>
          <Text style={styles.progressItemDataLabelText}>max</Text>
        </View>
      </View>
      <View style={styles.progressItemDataContainer}>
        <View style={styles.progressItemDataLabel}>
          <Text style={styles.progressItemDataLabelText}>total</Text>
        </View>
      </View>
    </View>
  );
};
