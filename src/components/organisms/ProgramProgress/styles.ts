import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

const RECORD_LABEL_SIZE = 20;
const PICKER_WIDTH = SIZES.card.medium;

export const styles = StyleSheet.create({
  emptyRecordContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.8,
    marginVertical: SPACING.SMALL,
    paddingRight: SPACING.XSMALL,
  },
  recordLabel: {
    height: RECORD_LABEL_SIZE,
    width: RECORD_LABEL_SIZE,
    borderRadius: RECORD_LABEL_SIZE / 2,
    backgroundColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.SMALL,
  },
  recordLabelText: {
    color: COLOR.WHITE,
  },
  emptyInput: {
    flex: 1,
    borderBottomColor: COLOR.SECONDARY,
    borderBottomWidth: 3,
  },
  recordListContentContainer: {
    alignItems: 'center',
  },
  recordPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    width: windowWidth * 0.8,
    borderRadius: SIZES.BORDER_RADIUS,
  },
  recordPicker: {
    width: PICKER_WIDTH,
  },
  recordUnitTextContainer: {
    position: 'absolute',
    left: PICKER_WIDTH - 30,
    zIndex: 100,
    elevation: 10,
  },
  recordUnitText: {},
  backdrop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordPickerButton: {
    marginVertical: SPACING.MEDIUM,
  },
});
