import React from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';
import { COLOR } from '../../../constants/colors';
type Props = {
  color?: string;
  size: number;
};

export const ProgramIcon: React.FC<Props> = ({ color = COLOR.WHITE, size }) => {
  return (
    <Svg width={size} height={(size * 47) / 44} viewBox="0 0 44 47" fill="none">
      <Rect x="15" y="4" width="16" height="6" rx="1" stroke={color} stroke-width="2" />
      <Path
        d="M13 5H9C6.79086 5 5 6.79086 5 9V41C5 43.2091 6.79086 45 9 45H36C38.2091 45 40 43.2091 40 41V9C40 6.79086 38.2091 5 36 5H33"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M12.2963 9H12C9.79086 9 8 10.7909 8 13V37C8 39.2091 9.79086 41 12 41H33C35.2091 41 37 39.2091 37 37V13C37 10.7909 35.2091 9 33 9H32.8571"
        stroke={color}
      />
      <Line x1="21" y1="16" x2="33" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Line x1="21" y1="33" x2="33" y2="33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Line x1="21" y1="24" x2="33" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Rect x="12.5" y="13.5" width="5" height="5" rx="0.5" stroke={color} />
      <Rect x="12.5" y="21.5" width="5" height="5" rx="0.5" stroke={color} />
      <Rect x="12.5" y="30.5" width="5" height="5" rx="0.5" stroke={color} />
      <Path
        d="M25 3C25 2.46957 24.7893 1.96086 24.4142 1.58579C24.0391 1.21071 23.5304 1 23 1C22.4696 1 21.9609 1.21071 21.5858 1.58579C21.2107 1.96086 21 2.46957 21 3L23 3H25Z"
        fill={color}
      />
    </Svg>
  );
};
