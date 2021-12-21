import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

export const UserIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 46 46" fill="none">
      <Circle cx={23} cy={23} r={21.5} stroke={color} strokeWidth={3} />
      <Circle cx={23} cy={13} r={7} fill={color} />
      <Path
        d="M14 28C14 24.6863 16.6863 22 20 22H26C29.3137 22 32 24.6863 32 28V43H14V28Z"
        fill={color}
      />
    </Svg>
  );
};
