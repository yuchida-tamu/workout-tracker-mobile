import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { COLOR } from '../../constants/colors';
type Props = {
  height: number;
  strokeWidth: number;
  style?: StyleProp<ViewStyle>;
};

export const CircleGraphSkelton: React.FC<Props> = ({ height, strokeWidth, style }) => {
  return (
    <View style={style}>
      <Svg width={height} height={height}>
        <Circle
          cx={height / 2}
          cy={height / 2}
          r={height / 2 - strokeWidth}
          stroke={COLOR.GRAY}
          strokeWidth={strokeWidth}
        />
      </Svg>
    </View>
  );
};
