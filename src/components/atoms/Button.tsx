import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { BUTTON_SIZE } from '../../constants/sizes';
import { LinearGradientView } from './LinearGradientView';
import { FONT_SIZE, Title } from './TitleText';
import { COLOR } from '../../constants/colors';

type Props = {
  color1: string;
  color2: string;
  style?: StyleProp<ViewStyle>;
  title: string;
  fontSize?: FONT_SIZE;
  size?: BUTTON_SIZE;
  isShadow?: boolean;
  onPress?: () => void;
  isDisable?: boolean;
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
  isDisable = false,
}) => {
  const innerButton = isDisable ? (
    <LinearGradientView
      isBoxShadow={isShadow}
      color1={COLOR.GRAY}
      color2={COLOR.GRAY}
      style={[styles.button, { width: size }]}>
      <Title text={title} size={fontSize} style={{ color: COLOR.LIGHT_GRAY }} />
    </LinearGradientView>
  ) : (
    <LinearGradientView
      isBoxShadow={isShadow}
      color1={color1}
      color2={color2}
      style={[styles.button, { width: size }]}>
      <Title text={title} size={fontSize} />
    </LinearGradientView>
  );

  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={isDisable}>
      {innerButton}
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
