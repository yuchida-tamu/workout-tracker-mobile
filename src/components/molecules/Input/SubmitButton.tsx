import React from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
  Text,
} from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { LinearGradientView } from '../../atoms/LinearGradientView';

type Props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

export const SubmitButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradientView
        isBoxShadow={true}
        style={styles.button}
        color1={COLOR.bg.gradient.TEAL}
        color2={COLOR.bg.gradient.LIGHT_GREEN}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradientView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginVertical: SPACING.LARGE,
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: SIZES.BORDER_RADIUS,
  },
  buttonText: {
    fontSize: SIZES.font.REGULAR,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
});
