import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

const CARD_HEIGHT = 128;

export const styles = StyleSheet.create({
  userCard: {
    width: '90%',
    ...boxShadow,
  },
  userCardBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: CARD_HEIGHT,
    width: '100%',
    borderRadius: SIZES.BORDER_RADIUS,
    marginTop: SPACING.SMALL,
    paddingHorizontal: SPACING.SMALL,
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
});
