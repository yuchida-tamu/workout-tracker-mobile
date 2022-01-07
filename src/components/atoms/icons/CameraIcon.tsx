import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = {
  size: number;
  color: string;
};

const ratio = 28 / 35;

export const CameraIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <Svg width={size} height={size * ratio} viewBox="0 0 35 28" fill="none">
      <Path
        d="M12.8544 2.76689L14.1213 1.5H21.3787L22.6456 2.76688L24.0448 8.36382L24.3288 9.50001H25.5H27H28.5H33C33.2761 9.50001 33.5 9.72387 33.5 10V26C33.5 26.2762 33.2761 26.5 33 26.5H2.5C2.22386 26.5 2 26.2762 2 26V10C2 9.72387 2.22386 9.50001 2.5 9.50001H8H10H11.1712L11.4552 8.36382L12.8544 2.76689Z"
        stroke={color}
        strokeWidth={3}
      />
      <Circle cx={18} cy={17} r={4.5} stroke={color} strokeWidth={3} />
    </Svg>
  );
};
