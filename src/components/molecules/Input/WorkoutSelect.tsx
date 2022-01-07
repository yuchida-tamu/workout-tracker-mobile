import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { Category } from '../../../enums/categories';
import { WorkoutModel, WorkoutModelType } from '../../../store/models/workout/workout';
import { boxShadow } from '../../../styles/styles';
import { CategoryTabList } from './CategoryTabListProps';

const categories = [
  Category.Default,
  Category.Abs,
  Category.Arms,
  Category.Back,
  Category.Chest,
  Category.Legs,
  Category.Other,
  Category.Shoulders,
];
type Props = {
  onChange: (value: WorkoutModelType[]) => void;
};
//delete
const workoutData = categories.map((c) => WorkoutModel.create({ category: c, name: c }));

export const WorkoutSelect: React.FC<Props> = ({ onChange }) => {
  //TODO: useSelector
  const workouts = workoutData;
  const [activeCategory, setActiveCategory] = useState(Category.Default);
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const [selectedList, setSelectedList] = useState<WorkoutModelType[]>([]);

  const onPressCategoryTab = (category: Category) => {
    setActiveCategory(category);
    if (category === Category.Default) return setFilteredWorkouts(workouts);
    const filtered = workouts.filter((w) => w.category === category);
    setFilteredWorkouts(filtered);
  };

  const onPressHandler = (workout: WorkoutModelType) => {
    const filtered = selectedList.filter((i) => workout.id !== i.id);
    const existsAlready = filtered.length !== selectedList.length;
    if (existsAlready) {
      setSelectedList(filtered);
      return onChange(filtered);
    }
    const updated = [...selectedList, workout];
    setSelectedList(updated);
    return onChange(updated);
  };
  const renderItem = ({ item }: { item: WorkoutModelType }) => {
    const filtered = selectedList.filter((i) => i.id === item.id);
    const isSelected = filtered.length > 0;

    return (
      <TouchableOpacity onPress={() => onPressHandler(item)} style={styles.itemCard}>
        <Text>{item.name}</Text>
        <Text>{isSelected ? 'CHECKED' : 'NOT'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>ワークアウト</Text>
        <View style={styles.numberIndicator}>
          <Text style={styles.numberIndicatorText}>{selectedList.length.toString()}</Text>
        </View>
      </View>
      <CategoryTabList onPress={onPressCategoryTab} selected={activeCategory} />
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          data={filteredWorkouts}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const LIST_HEIGHT = 200;
const NUMBER_INDICATOR_SIZE = 20;

const styles = StyleSheet.create({
  labelContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: COLOR.GRAY,
    textAlign: 'left',
  },
  formContainer: {
    height: LIST_HEIGHT,
    alignItems: 'center',
    width: windowWidth,
  },
  listContainer: { width: windowWidth },
  contentContainer: {
    paddingVertical: SPACING.XSMALL,
  },
  itemCard: {
    height: SIZES.card.small,
    width: SIZES.card.medium,
    borderRadius: SIZES.BORDER_RADIUS,
    marginHorizontal: SPACING.XSMALL,
    paddingVertical: SPACING.SMALL,
    paddingHorizontal: SPACING.XSMALL,
    backgroundColor: COLOR.WHITE,
    ...boxShadow,
  },
  numberIndicator: {
    // height: NUMBER_INDICATOR_SIZE,
    // width: NUMBER_INDICATOR_SIZE,
    borderRadius: NUMBER_INDICATOR_SIZE / 2,
    backgroundColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.SMALL,
    paddingHorizontal: SPACING.XSMALL,
  },
  numberIndicatorText: {
    color: COLOR.WHITE,
  },
});
