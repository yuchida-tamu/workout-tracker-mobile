import { Dimensions, StyleSheet } from 'react-native';
import { SPACING } from '../../../constants/spacing';

const ITEM_HEIGHT = 156;

export const styles = StyleSheet.create({
  dashboardItemContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    marginVertical: SPACING.SMALL,
  },
});
