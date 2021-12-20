import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonContainter: {
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    marginVertical: SPACING.MEDIUM,
    paddingVertical: SPACING.XSMALL,
    paddingHorizontal: SPACING.SMALL,
    borderRadius: SIZES.BORDER_RADIUS,
  },
  nextButtonText: {
    color: COLOR.text.WHITE,
  },
});
