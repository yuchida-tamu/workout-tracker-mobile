import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { boxShadow } from '../../styles/styles';

type LinneaGradientViewProps = {
  color1: string;
  color2: string;
  style?: StyleProp<ViewStyle>;
  isBoxShadow?: boolean;
  children?: JSX.Element | JSX.Element[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

export const LinearGradientView: React.FC<LinneaGradientViewProps> = ({
  color1,
  color2,
  isBoxShadow,
  style,
  children,
  start,
  end,
}) => {
  return (
    <View style={isBoxShadow && boxShadow}>
      <LinearGradient style={style} colors={[color1, color2]} start={start} end={end}>
        {children}
      </LinearGradient>
    </View>
  );
};
