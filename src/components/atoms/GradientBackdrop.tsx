import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, Dimensions } from 'react-native';

type Props = {
  color1: string;
  color2: string;
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

export const GradientBackdrop: React.FC<Props> = ({
  color1,
  color2,
  children,
  start,
  end,
  style,
}) => {
  return (
    <LinearGradient
      style={[style, styles.backdrop]}
      colors={[color1, color2]}
      start={start}
      end={end}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
