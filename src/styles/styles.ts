import { COLOR } from '../constants/colors';
import { StyleSheet } from 'react-native';

export const boxShadow = {
  shadowColor: COLOR.BLACK,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowRadius: 2,
  shadowOpacity: 0.4,
  elevation: 2,
};

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
