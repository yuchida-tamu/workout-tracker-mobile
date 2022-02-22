import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const GoodIcon: React.FC<Props> = ({ size = 44, color = '#1DDEC7' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="14" stroke={color} strokeWidth="2" />
      <Circle cx="16.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="16.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="27.5" cy="17.5" r="1.5" fill={color} />
      <Circle cx="27.5" cy="17.5" r="1.5" fill={color} />
      <Path
        d="M16 25C21.3897 29.7186 23.9209 29.0787 28 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
