import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

const CARD_DIMENSION_RATIO = 1.2;
const BUTTON_SIZE = 36;

export const styles = StyleSheet.create({
  programListContainer: {
    alignContent: 'center',
  },
  programList: {
    paddingVertical: SPACING.MEDIUM,
  },
  programListItemContainer: {
    ...boxShadow,
    height: SIZES.card.small,
    width: SIZES.card.small * CARD_DIMENSION_RATIO,
    borderRadius: SIZES.BORDER_RADIUS,
    marginTop: SPACING.XSMALL,
    marginHorizontal: SPACING.MEDIUM,
    justifyContent: 'center',
  },
  programListItemText: {
    letterSpacing: 0,
  },
  programListFooter: {
    backgroundColor: COLOR.SECONDARY,
    borderBottomLeftRadius: SIZES.BORDER_RADIUS,
    borderBottomRightRadius: SIZES.BORDER_RADIUS,
    alignItems: 'center',
    paddingVertical: SPACING.SMALL,
    ...boxShadow,
  },
  addButton: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 3,
    borderColor: COLOR.PRIMARY,
  },
  addButtonText: {
    color: COLOR.PRIMARY,
    fontSize: SIZES.font.REGULAR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
