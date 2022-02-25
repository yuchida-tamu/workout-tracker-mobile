import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

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
    width: windowWidth * 0.8,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: SPACING.MEDIUM,
    marginVertical: SPACING.MEDIUM,
    borderRadius: SIZES.BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  notificationExpanded: {},
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
  numOfProgramLabel: {
    height: SIZES.icon.medium,
    width: SIZES.icon.medium,
    borderRadius: SIZES.icon.medium / 2,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.XSMALL,
  },
  numOfProgramText: {
    color: COLOR.SECONDARY,
    fontWeight: 'bold',
    fontSize: SIZES.font.SMALL,
  },
  proceedIconContainer: {
    marginHorizontal: SPACING.SMALL,
  },
  programForTodayItemContainer: {
    width: SIZES.card.small,
    height: SIZES.card.xsmall,
    borderRadius: 4,
    ...boxShadow,
    backgroundColor: COLOR.bg.gradient.ORANGE,
    paddingTop: SPACING.XSMALL,
    paddingHorizontal: SPACING.XSMALL,
  },
  programForTodayName: {
    color: COLOR.WHITE,
    fontSize: SIZES.font.REGULAR,
    textAlign: 'center',
  },
  programForTodayDescription: {
    color: COLOR.WHITE,
  },
  programsForTodayListContainer: { height: SIZES.card.small },
  programsForTodayList: { borderBottomColor: COLOR.bg.gradient.YELLOW, borderBottomWidth: 2 },
  programsForTodayListContent: { width: windowWidth * 0.8, height: SIZES.card.small },
});
