import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

const ITEM_HEIGHT = 156;

export const styles = StyleSheet.create({
  dashboardItemContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    marginVertical: SPACING.SMALL,
  },
  categoryRatioLabel: {
    color: COLOR.GRAY,
    fontSize: SIZES.font.label.SMALL,
  },
  labelContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  categortRatioHeading: {
    fontSize: SIZES.font.SMALL,
    color: COLOR.GRAY,
    marginTop: SPACING.SMALL,
    textAlign: 'center',
  },
});
