import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { BUTTON_SIZE } from '../../constants/sizes';
import { LinearGradientView } from './LinearGradientView';
import { FONT_SIZE, Title } from './TitleText';

type Props = {
  color1: string;
  color2: string;
  style?: StyleProp<ViewStyle>;
  title: string;
  fontSize?: FONT_SIZE;
  size?: BUTTON_SIZE;
  isShadow?: boolean;
  onPress?: () => void;
};

export const LinearGradientButton: React.FC<Props> = ({
  color1,
  color2,
  style,
  title,
  fontSize = FONT_SIZE.regular,
  size = BUTTON_SIZE.MEDIUM,
  onPress,
  isShadow = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <LinearGradientView
        isBoxShadow={isShadow}
        color1={color1}
        color2={color2}
        style={[styles.button, { width: size }]}>
        <Title text={title} size={fontSize} />
      </LinearGradientView>
    </TouchableOpacity>
  );
};

const HEIGHT = 48;

const styles = StyleSheet.create({
  button: {
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    justifyContent: 'center',
  },
});
