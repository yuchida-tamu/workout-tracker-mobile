import React from 'react';
import Svg, { Path, Circle, Line } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const BadIcon: React.FC<Props> = ({ size = 44, color = '#FF5656' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="14" stroke={color} strokeWidth="2" />
      <Line
        x1="14.378"
        y1="16.682"
        x2="19.466"
        y2="19.862"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Line
        x1="24.3181"
        y1="19.8622"
        x2="29.4058"
        y2="16.6818"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M15.5 30C20.4912 25.5213 23.2245 25.6174 28 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
