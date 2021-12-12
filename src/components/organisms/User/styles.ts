import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

const CARD_HEIGHT = 128;

export const styles = StyleSheet.create({
  userHeader: {
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: SIZES.BORDER_RADIUS,
    paddingVertical: SPACING.MEDIUM,
  },
  iconContainer: { marginVertical: SPACING.MEDIUM },
  iconImage: {
    height: SIZES.ICON_HEIGHT,
    width: SIZES.ICON_HEIGHT,
    borderRadius: SIZES.ICON_HEIGHT / 2,
  },
  usernameConatiner: {},
  usernameText: {
    color: COLOR.text.WHITE,
    fontSize: SIZES.font.LARGE,
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: CARD_HEIGHT,
    width: '90%',
    borderRadius: SIZES.BORDER_RADIUS,
  },
  userCardHeader: {
    height: '100%',
    justifyContent: 'center',
    flex: 0.4,
  },
  userCardHeaderText: {
    color: COLOR.text.WHITE,
    fontSize: SIZES.font.REGULAR,
    textAlign: 'center',
  },
  userCardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userCardText: {
    fontSize: SIZES.font.SMALL,
    color: COLOR.text.WHITE,
    textAlign: 'center',
  },
  userEditIcon: {
    position: 'absolute',
    top: SPACING.SMALL,
    right: SPACING.SMALL,
  },
});
