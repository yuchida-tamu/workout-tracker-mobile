import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

const CARD_DIMENSION_RATIO = 1.2;
const BUTTON_SIZE = 36;
const BUTTON_CONTAINER_SIZE = BUTTON_SIZE + SPACING.MEDIUM;

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
    // backgroundColor: COLOR.SECONDARY,
    // borderBottomLeftRadius: SIZES.BORDER_RADIUS,
    // borderBottomRightRadius: SIZES.BORDER_RADIUS,
    alignItems: 'center',
    // paddingVertical: SPACING.SMALL,
    // ...boxShadow,
  },
  addButtonContainer: {
    position: 'absolute',
    top: -BUTTON_CONTAINER_SIZE / 2,
    height: BUTTON_CONTAINER_SIZE,
    width: BUTTON_CONTAINER_SIZE,

    borderRadius: BUTTON_CONTAINER_SIZE / 2,
    backgroundColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonBackground: {
    height: BUTTON_CONTAINER_SIZE,
    width: BUTTON_CONTAINER_SIZE,
    borderRadius: BUTTON_CONTAINER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    borderWidth: 3,
    borderColor: COLOR.PRIMARY,
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
  },
  addButtonText: {
    color: COLOR.PRIMARY,
    fontSize: SIZES.font.REGULAR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
