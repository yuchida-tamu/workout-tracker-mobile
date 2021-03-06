import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, FlatListProps } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { Category } from '../../../enums/categories';
import { WorkoutModel, WorkoutModelType } from '../../../store/models/workout/workout';
import { boxShadow } from '../../../styles/styles';
import { GoodIcon } from '../../atoms/icons/Conditions/GoodIcon';
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
    // TODO: replace the icon with the appropriate one later!!
    const difficulty = Array.from({ length: item.difficulty }).map((_, index) => (
      <GoodIcon key={index} size={22} />
    ));

    return (
      <TouchableOpacity
        onPress={() => onPressHandler(item)}
        style={[styles.itemCard, isSelected && styles.selected]}>
        <View style={styles.itemCardHeader}>
          <Text style={styles.itemCardTitleText}>{item.name}</Text>
          <View style={styles.difficultyIconContainer}>{difficulty}</View>
        </View>

        <View style={styles.itemDesctiptionContainer}>
          <Text style={styles.itemCardText}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSelectedItem = useCallback(({ item }: { item: WorkoutModelType }) => {
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.selectedItemText}>{item.name}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.formContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>??????????????????</Text>
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
        <FlatList
          data={selectedList}
          renderItem={renderSelectedItem}
          contentContainerStyle={styles.selectedWorkoutList}
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
    alignItems: 'center',
    width: windowWidth,
  },
  listContainer: { width: windowWidth },
  contentContainer: {
    paddingVertical: SPACING.XSMALL,
    paddingHorizontal: SPACING.MEDIUM,
  },
  itemCard: {
    minHeight: SIZES.card.medium,

    borderRadius: SIZES.BORDER_RADIUS,
    marginHorizontal: SPACING.XSMALL,
    paddingVertical: SPACING.SMALL,
    paddingHorizontal: SPACING.XSMALL,
    backgroundColor: COLOR.WHITE,
    ...boxShadow,
  },
  itemCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.XSMALL,
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
  selected: {
    borderWidth: 2,
    borderColor: COLOR.SECONDARY,
  },
  selectedItemContainer: {
    backgroundColor: COLOR.SECONDARY,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: SPACING.XSMALL,

    marginVertical: 2,
    borderRadius: SIZES.BORDER_RADIUS,
    ...boxShadow,
  },
  selectedItemText: {
    color: COLOR.WHITE,
  },
  selectedWorkoutList: {
    marginVertical: SPACING.SMALL,
    paddingHorizontal: SPACING.LARGE,
  },
  itemCardText: {
    color: COLOR.GRAY,
  },
  itemCardTitleText: {
    color: COLOR.text.BLACK,
  },
  itemDesctiptionContainer: {
    width: SIZES.card.medium,
  },
  difficultyIconContainer: {
    flexDirection: 'row',
  },
});
