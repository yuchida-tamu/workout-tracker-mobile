import { COLOR } from '../constants/colors';
import { StyleSheet } from 'react-native';
import { SIZES } from '../constants/sizes';

export const boxShadow = {
  shadowColor: COLOR.BLACK,
  shadowOffset: {
    width: 0,
    height: SIZES.height.XXSMALL,
  },
  shadowRadius: 2,
  shadowOpacity: 0.4,
  elevation: 2,
};

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
  },
});
