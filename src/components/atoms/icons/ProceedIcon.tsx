import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const ProceedIcon: React.FC<Props> = ({ size = 44, color = '#1BE223' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M12.1314 6L25 16.4467M12 27L24.8686 16.5533"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M18.002 15.7143C18.5106 16.1147 18.5106 16.8853 18.002 17.2857L12.3686 21.7209C11.7126 22.2373 10.75 21.7701 10.75 20.9352L10.75 12.0648C10.75 11.2299 11.7126 10.7627 12.3686 11.2791L18.002 15.7143Z"
        fill={color}
      />
      <Circle cx="16" cy="16" r="15" stroke={color} strokeWidth="2" />
    </Svg>
  );
};
