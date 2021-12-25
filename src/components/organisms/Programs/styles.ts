import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { boxShadow } from '../../../styles/styles';

const CARD_DIMENSION_RATIO = 1.2;
const BUTTON_SIZE = 36;
export const BUTTON_CONTAINER_SIZE = BUTTON_SIZE + SPACING.XSMALL;

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
    // borderBottomLeftRadius: SIZES.BORDER_RADIUS,
    // borderBottomRightRadius: SIZES.BORDER_RADIUS,
    alignItems: 'center',
    // paddingVertical: SPACING.SMALL,
    // ...boxShadow,
    elevation: 10,
    zIndex: 100,
  },
  addButtonContainer: {
    position: 'absolute',
    top: -BUTTON_CONTAINER_SIZE,
    height: BUTTON_CONTAINER_SIZE,
    width: BUTTON_CONTAINER_SIZE,

    borderRadius: BUTTON_CONTAINER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    zIndex: 100,
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
  addFormContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: SPACING.LARGE,
  },
  addController: {
    marginTop: SPACING.SMALL,
  },
});
