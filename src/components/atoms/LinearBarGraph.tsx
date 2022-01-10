import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
type Props = {
  height: number;
  width: number;
  strokeWidth: number;
  style?: StyleProp<ViewStyle>;
  color: string;
  horizontal?: boolean;
};

export const LinearBarGraph: React.FC<Props> = ({
  height,
  width,
  color,
  strokeWidth,
  style,
  horizontal = false,
}) => {
  console.log(width);
  const x1 = horizontal ? 0 : width / 2;
  const x2 = horizontal ? width : width / 2;
  const y1 = horizontal ? height / 2 : height;
  const y2 = horizontal ? height / 2 : 0;
  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <Path
          d={`M ${x1} ${y1} ${x2} ${y2}`}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};
