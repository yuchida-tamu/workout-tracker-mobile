import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size: number;
  color: string;
};

const ratio = 6 / 7;
export const UploadIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <Svg width={size} height={size * ratio} viewBox="0 0 35 30" fill="none">
      <Path
        d="M30 18.8V24C30 26.2091 28.2091 28 26 28H8C5.79086 28 4 26.2091 4 24V18.8M17.5488 5V18.8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M16.2022 1.1068C16.9499 0.469137 18.0501 0.469137 18.7978 1.1068L28.526 9.40331C29.9407 10.6098 29.0875 12.9251 27.2282 12.9251H7.77182C5.91254 12.9251 5.05935 10.6098 6.47403 9.40331L16.2022 1.1068Z"
        fill={color}
      />
    </Svg>
  );
};
