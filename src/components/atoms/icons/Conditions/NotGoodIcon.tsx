import React from 'react';
import Svg, { Path, Circle, Line } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const NotGoodIcon: React.FC<Props> = ({ size = '44', color = '#FF8B49' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="14" stroke={color} strokeWidth="2" />
      <Line
        x1="13.2309"
        y1="19.2061"
        x2="18.8691"
        y2="17.154"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Line
        x1="24.915"
        y1="17.1543"
        x2="30.5531"
        y2="19.2064"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M15 26C19.3297 26 22.1986 26 28 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
