import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

const BANNER_HEIGHT = 96;
const SCHEDULE_CONTAINER_HEIGHT = 72;
const DAY_MARKER_SIZE = 36;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  programDetailBanner: {
    height: BANNER_HEIGHT,
    justifyContent: 'center',
    width: windowWidth,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: windowWidth,
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    height: BANNER_HEIGHT,
    width: windowWidth,
    backgroundColor: COLOR.BLACK,
    opacity: 0.5,
  },
  sheduleContainer: {
    height: SCHEDULE_CONTAINER_HEIGHT,
    width: windowWidth,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  scheduleList: { height: SCHEDULE_CONTAINER_HEIGHT },
  dayContainer: {
    padding: SPACING.SMALL,
  },
  daySelected: {
    height: DAY_MARKER_SIZE,
    width: DAY_MARKER_SIZE,
    borderRadius: DAY_MARKER_SIZE / 2,
    borderWidth: 3,
    borderColor: COLOR.SECONDARY,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
  },
  dayVisible: {
    opacity: 1,
  },
  dayInvisible: {
    opacity: 0,
  },
  dayText: { color: COLOR.text.WHITE, textAlign: 'center', fontSize: SIZES.font.SMALL },
  workoutDisplayList: {},
  startButton: { marginVertical: SPACING.SMALL },
  quantityDisplayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth,
    alignItems: 'center',
  },
  quantityDisplayLabel: {
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  startButtonContainer: {},
  workoutListContainer: {
    flex: 1,
    width: windowWidth,
  },
  workoutItemContainer: {
    marginHorizontal: SPACING.SMALL,
    backgroundColor: COLOR.bg.DARK_PRIMARY,
    borderRadius: SIZES.BORDER_RADIUS,
    justifyContent: 'center',
    width: SIZES.card.large,
    height: SIZES.card.xsmall,
    ...boxShadow,
  },
  workoutImageContainer: {
    flex: 0.6,
    backgroundColor: COLOR.GRAY,
  },
  workoutItemDescription: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutItemTitle: {
    color: COLOR.WHITE,
    textAlign: 'center',
    fontSize: SIZES.font.REGULAR,
    letterSpacing: 4,
  },
  completeMessageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  progressItemContainer: {
    backgroundColor: COLOR.SECONDARY,
    borderRadius: SIZES.BORDER_RADIUS,
    ...boxShadow,
    paddingVertical: SPACING.SMALL,
    paddingHorizontal: SPACING.XSMALL,
  },
  progressContentRow: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  progressItemDataContainer: {},
  progressItemDataLabel: {
    backgroundColor: COLOR.bg.DARK_SECONDARY,
    width: 80,
    height: 24,
    borderRadius: 12,
  },
  progressItemDataLabelText: {
    color: COLOR.WHITE,
    textAlign: 'center',
  },
  progressItemDataText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: SIZES.font.LARGE,
  },
});
