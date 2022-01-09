import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { windowWidth } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: { fontSize: 30, color: COLOR.text.WHITE, textAlign: 'center' },
  nextButtonContainer: {
    marginTop: SPACING.MEDIUM,
  },
  inputContainer: {
    alignItems: 'center',
  },
  profileImageLabel: {
    width: windowWidth * 0.8,
  },
});
