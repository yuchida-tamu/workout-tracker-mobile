import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

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
  },
});
