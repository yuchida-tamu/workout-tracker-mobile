import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { COLOR } from '../../../constants/colors';

export const styles = StyleSheet.create({
  heartButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
