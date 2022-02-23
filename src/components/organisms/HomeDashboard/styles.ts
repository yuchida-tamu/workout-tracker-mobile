import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

const width = Dimensions.get('screen').width;
export const ITEM_HEIGHT = 156;

export const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    paddingVertical: SPACING.LARGE,
  },
  headerText: {
    textAlign: 'center',
    color: COLOR.text.WHITE,
    fontSize: SIZES.font.LARGE,
    fontWeight: 'bold',
    marginVertical: SPACING.MEDIUM,
    letterSpacing: 1.5,
  },
  notificationContainer: {
    width: '100%',
    paddingHorizontal: SPACING.LARGE,
    paddingVertical: SPACING.MEDIUM,
    marginVertical: SPACING.MEDIUM,
    borderRadius: SIZES.BORDER_RADIUS,
  },
  notificationText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: SIZES.font.SMALL,
  },
  dashboardItemContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    marginVertical: SPACING.SMALL,
  },
  dashboardItem: {
    justifyContent: 'center',
    borderRadius: SIZES.BORDER_RADIUS,
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.XSMALL,
  },
  dashboardItemText: {
    color: COLOR.text.WHITE,
    textAlign: 'center',
  },
  dashboardItemHeadingText: {
    fontSize: SIZES.font.SMALL,
  },
  dashboardItemContentText: {
    marginVertical: SPACING.XSMALL,
    fontSize: SIZES.font.LARGE,
    fontWeight: 'bold',
  },
  dashboardItemGraphConatainer: {
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
  },
  categoryRatioGraph: {
    justifyContent: 'flex-start',
  },
});
