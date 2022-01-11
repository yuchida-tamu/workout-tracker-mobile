import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR } from '../../../constants/colors';

type Props = {
  color?: string;
  size: number;
};

export const CategoryIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <Svg width={size} height={size * 1.1} viewBox="0 0 106 54" fill="none">
      <Path
        d="M30.5 32.4964C29.3121 12.6401 24.4683 4.4012 0 0.491008H30.5V32.4964Z"
        fill={color}
      />
      <Path
        d="M30.5 0.491008C30.5 -0.613747 30.5 4.99176 30.5 0.491008H60L94 0.491013C94 -0.613742 95.1046 0.491013 94 0.491013V29.996C94 43.253 83.2548 54 70 54H54C40.7452 54 30 43.253 30 29.996L30.5 0.491008Z"
        fill={color}
      />
      <Path d="M94 0.491013V15.9936C94.4785 6.4997 96.5667 2.24876 106 0.491013H94Z" fill={color} />
      <Path d="M51 36H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 36H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 36H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 28H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 28H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 28H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 21H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 21H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path d="M51 21H76" stroke={COLOR.WHITE} stroke-width="2" stroke-linecap="round" />
      <Path
        d="M60.3333 20.8C60.3333 22.3464 59.1394 23.6 57.6667 23.6C56.1939 23.6 55 22.3464 55 20.8C55 19.2536 56.1939 18 57.6667 18C59.1394 18 60.3333 19.2536 60.3333 20.8Z"
        fill={COLOR.WHITE}
      />
      <Path
        d="M65.6667 36.2C65.6667 37.7464 64.4728 39 63 39C61.5272 39 60.3333 37.7464 60.3333 36.2C60.3333 34.6536 61.5272 33.4 63 33.4C64.4728 33.4 65.6667 34.6536 65.6667 36.2Z"
        fill={COLOR.WHITE}
      />
      <Path
        d="M73 28.5C73 30.0464 71.8061 31.3 70.3333 31.3C68.8606 31.3 67.6667 30.0464 67.6667 28.5C67.6667 26.9536 68.8606 25.7 70.3333 25.7C71.8061 25.7 73 26.9536 73 28.5Z"
        fill={COLOR.WHITE}
      />
    </Svg>
  );
};
