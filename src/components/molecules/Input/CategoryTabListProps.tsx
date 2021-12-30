import React from 'react';
import { FlatList, FlatListProps, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { Category } from '../../../enums/categories';

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

type CategoryTabListProps = {
  onPress: (category: Category) => void;
  selected: Category;
};

export const CategoryTabList: React.FC<CategoryTabListProps> = ({
  onPress,
  selected = Category.Default,
}) => {
  const renderItem: NonNullable<FlatListProps<Category>>['renderItem'] = ({ item }) => {
    const onTabPress = () => onPress(item);
    const active = item === selected;
    return (
      <TouchableOpacity
        style={[styles.tabContainer, active && styles.activeContainer]}
        onPress={onTabPress}>
        <Text style={[styles.tabText, active && styles.activeText]}>
          {item === Category.Default ? 'ALL' : item}
        </Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor: NonNullable<FlatListProps<Category>>['keyExtractor'] = (item, index) =>
    `${item}_${index}`;

  return (
    <View style={styles.categoryTabContainer}>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.tabList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTabContainer: {
    height: 30,
    justifyContent: 'center',
  },
  tabList: {
    alignItems: 'center',
  },
  tabContainer: {
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    height: SIZES.font.SMALL,
    borderRadius: SIZES.font.SMALL / 2,
    paddingHorizontal: 4,
    marginHorizontal: 4,
  },
  tabText: {
    fontSize: SIZES.font.XSMALL,
    color: COLOR.GRAY,
  },
  activeContainer: {
    backgroundColor: COLOR.PRIMARY,
  },
  activeText: {
    color: COLOR.WHITE,
  },
});
