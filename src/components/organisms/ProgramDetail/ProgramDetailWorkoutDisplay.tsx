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

  const onPressWorkoutItemHandler = (index: number) => {
    onPress(index);
    if (index < workoutList.length) {
      setSelectedWorkout(workoutList[index]);
    }
  };

  const onCloseHandler = () => {};

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
    [isExpanded],
  );

  const renderProgressItem = useCallback<
    NonNullable<FlatListProps<ProgressDisplayDataType>['renderItem']>
  >(({ item, index }) => {
    return (
      <View style={styles.progressItemContainer}>
        <Text>{item.date}</Text>
        <View style={styles.progressContentRow}>
          <View style={styles.progressItemDataContainer}>
            <View style={styles.progressItemDataLabel}>
              <Text style={styles.progressItemDataLabelText}>load/rep</Text>
            </View>
            <Text style={styles.progressItemDataText}>{item.loadPerRep.toFixed(2)}</Text>
          </View>
          <View style={styles.progressItemDataContainer}>
            <View style={styles.progressItemDataLabel}>
              <Text style={styles.progressItemDataLabelText}>max</Text>
            </View>
            <Text style={styles.progressItemDataText}>{item.max.toFixed(2)}</Text>
          </View>
          <View style={styles.progressItemDataContainer}>
            <View style={styles.progressItemDataLabel}>
              <Text style={styles.progressItemDataLabelText}>total</Text>
            </View>
            <Text style={styles.progressItemDataText}>{item.total.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    );
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
