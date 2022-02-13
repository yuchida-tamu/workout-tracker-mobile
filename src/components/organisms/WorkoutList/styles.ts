import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { COLOR } from '../../../constants/colors';

export const styles = StyleSheet.create({
  fixedHeader: {
    height: SIZES.height.MLARGE,
    width: '100%', //TODO: use constants
    backgroundColor: COLOR.PRIMARY,
    shadowColor: COLOR.BLACK,
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: SIZES.height.XSMALL,
    },
  },
  categoryIcon: {
    position: 'absolute',
    marginTop: SPACING.LARGE,
    marginLeft: SPACING.XXLARGE,
    zIndex: 10,
  },

  workoutCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: SIZES.height.XLARGE,
    width: SIZES.width.XXLARGE,
    shadowColor: COLOR.BLACK,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: SIZES.width.XSMALL,
      height: SIZES.height.XSMALL,
    },
    backgroundColor: COLOR.WHITE,
    borderRadius: SIZES.BORDER_RADIUS,
    margin: SPACING.XSMALL,
    flexDirection: 'row',
  },
  workoutCover: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: SIZES.BORDER_RADIUS,
    borderBottomLeftRadius: SIZES.BORDER_RADIUS,
    backgroundColor: COLOR.bg.gradient.ORANGE,
    justifyContent: 'center',
  },
  workoutContentContainer: {
    display: 'flex',
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  workoutContent: {
    width: '100%',
    height: '100%',
    padding: SPACING.XSMALL,
    flex: 1,
  },
  workoutHeartButtonPosition: {
    width: '20%',
  },
  workoutNameAndDifficulty: {
    borderBottomWidth: SIZES.width.XXSMALE,
    borderBottomColor: COLOR.WHITE,
    marginBottom: SPACING.MEDIUM,
  },
  workoutName: {
    fontSize: SIZES.font.LARGE,
    color: COLOR.PRIMARY,
  },
  workoutDifficulty: {
    flexDirection: 'row',
  },
});
