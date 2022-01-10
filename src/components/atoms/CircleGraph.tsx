import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { COLOR } from '../../constants/colors';
type Props = {
  height: number;
  strokeWidth: number;
  style?: StyleProp<ViewStyle>;
  color: string;
  radius: number;
  startAngle: number;
  endAngle: number;
};

export const CircleGraph: React.FC<Props> = ({
  height,
  color,
  strokeWidth,
  style,
  radius,
  startAngle,
  endAngle,
}) => {
  const cx = height / 2;
  const cy = height / 2;

  const d = describeArc(cx, cy, radius, startAngle, endAngle);

  return (
    <View style={style}>
      <Svg width={height} height={height}>
        <Path d={d} stroke={color} strokeWidth={strokeWidth} />
        <Circle
          cx={height / 2}
          cy={height / 2}
          r={height / 2 - strokeWidth}
          fill={COLOR.GRAY}
          strokeWidth={strokeWidth}
        />
      </Svg>
    </View>
  );
};

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

  const d = ['M', start.x, start.y, 'A', radius, radius, 0, arcSweep, 0, end.x, end.y].join(' ');

  return d;
}
