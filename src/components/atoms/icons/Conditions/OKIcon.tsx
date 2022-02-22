import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const OkIcon: React.FC<Props> = ({ size = 44, color = '#FFDA56' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="14" stroke={color} strokeWidth="2" />
      <Circle cx="16.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="16.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="27.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="27.5" cy="17.5" r="1.5" fill={color} />
      <Line x1="16" y1="25" x2="28" y2="25" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};
