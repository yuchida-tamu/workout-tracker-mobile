import React from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';
import { COLOR } from '../../../constants/colors';

type Props = {
  color?: string;
  size?: number;
};

export const DashbaordIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 43 46" fill="none">
      <Path d="M23 16L24.5 11L28 12.5L32 11.5L34 6L36 14" stroke={color} stroke-linecap="round" />
      <Rect x="1.5" y="1.5" width={40} height={30} rx={2.5} stroke={color} stroke-width={3} />
      <Path
        d="M19.3978 31.1444C20.1977 30.0738 21.8023 30.0738 22.6022 31.1444L28.1375 38.5529C29.123 39.8718 28.1818 41.75 26.5354 41.75H15.4646C13.8182 41.75 12.877 39.8718 13.8625 38.5529L19.3978 31.1444Z"
        fill={color}
      />
      <Path
        d="M19 16C19 15.2121 18.8448 14.4319 18.5433 13.7039C18.2417 12.9759 17.7998 12.3145 17.2426 11.7574C16.6855 11.2002 16.0241 10.7583 15.2961 10.4567C14.5681 10.1552 13.7879 10 13 10L13 16H19Z"
        fill={color}
      />
      <Path
        d="M19 17C19 18.3845 18.5895 19.7378 17.8203 20.889C17.0511 22.0401 15.9579 22.9373 14.6788 23.4672C13.3997 23.997 11.9922 24.1356 10.6344 23.8655C9.2765 23.5954 8.02922 22.9287 7.05025 21.9497C6.07128 20.9708 5.4046 19.7235 5.1345 18.3656C4.86441 17.0078 5.00303 15.6003 5.53284 14.3212C6.06266 13.0421 6.95986 11.9489 8.11101 11.1797C9.26215 10.4105 10.6155 10 12 10L12 17H19Z"
        fill={color}
      />
      <Line x1="24.5" y1="25" x2="24.5" y2="20" stroke={color} stroke-width="3" />
      <Line x1="29.5" y1="25" x2="29.5" y2="18" stroke={color} stroke-width="3" />
      <Line x1="34.5" y1="25" x2="34.5" y2="17" stroke={color} stroke-width="3" />
    </Svg>
  );
};
