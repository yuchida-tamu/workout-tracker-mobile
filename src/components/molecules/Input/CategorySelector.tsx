import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { Category } from '../../../enums/categories';

type Props = {
  onChange: (cateogry: Category) => void;
};

const categories = [
  Category.Abs,
  Category.Arms,
  Category.Back,
  Category.Chest,
  Category.FullBody,
  Category.Legs,
  Category.Other,
  Category.Shoulders,
];

export const CategorySelector: React.FC<Props> = ({ onChange }) => {
  const [selected, setSelected] = useState(categories[0]);
  const [position, setPosition] = useState(0);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(true);

  const goToLeft = () => {
    if (position <= 0) return setLeftActive(false);
    if (position === 1) {
      setLeftActive(false);
    } else {
      setLeftActive(true);
    }
    setRightActive(true);
    setSelected(categories[position - 1]);
    setPosition(position - 1);
  };
  const goToRight = () => {
    if (position >= categories.length - 1) return setRightActive(false);
    setLeftActive(true);
    setRightActive(true);
    setSelected(categories[position + 1]);
    setPosition(position + 1);
  };

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <>
      <Text style={styles.label}>カテゴリー</Text>
      <View style={styles.selectorContainer}>
        <TouchableOpacity onPress={goToLeft} style={styles.arrowContainer}>
          <Text style={[styles.arrowIcon, leftActive ? styles.activeIcon : styles.inactiveIcon]}>
            {'<'}
          </Text>
        </TouchableOpacity>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{`${selected[0]}${selected
            .slice(1)
            .toLowerCase()}`}</Text>
        </View>
        <TouchableOpacity onPress={goToRight} style={styles.arrowContainer}>
          <Text style={[styles.arrowIcon, rightActive ? styles.activeIcon : styles.inactiveIcon]}>
            {'>'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLOR.GRAY,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: windowWidth * 0.1,
  },
  selectorContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: SPACING.SMALL,
    borderTopWidth: 1,
    borderTopColor: COLOR.PRIMARY,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.PRIMARY,
    paddingVertical: SPACING.XSMALL,
  },
  arrowContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    fontSize: SIZES.font.REGULAR,
    fontWeight: 'bold',
  },
  activeIcon: {
    color: COLOR.PRIMARY,
  },
  inactiveIcon: {
    color: COLOR.GRAY,
  },
  categoryContainer: {
    width: 240,
  },
  categoryText: {
    textAlign: 'center',
    color: COLOR.BLACK,
    fontSize: SIZES.font.LARGE,
    fontWeight: 'bold',
  },
});
