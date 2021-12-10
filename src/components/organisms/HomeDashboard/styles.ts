import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    ...boxShadow,
  },
  headerBackground: {
    width: '100%',
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
});
