import React from 'react';
import Svg, { Circle, Path, Mask, Line } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const GreatIcon: React.FC<Props> = ({ size = 44, color = '#1BE223' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <Circle cx="22" cy="22" r="14" stroke={color} strokeWidth="2" />
      <Mask id="path-2-inside-1_1489_28" fill="white">
        <Path d="M31 24C31 25.0506 30.7672 26.0909 30.3149 27.0615C29.8626 28.0321 29.1997 28.914 28.364 29.6569C27.5282 30.3997 26.5361 30.989 25.4442 31.391C24.3522 31.7931 23.1819 32 22 32C20.8181 32 19.6478 31.7931 18.5558 31.391C17.4639 30.989 16.4718 30.3997 15.636 29.6569C14.8003 28.914 14.1374 28.0321 13.6851 27.0615C13.2328 26.0909 13 25.0506 13 24L22 24H31Z" />
      </Mask>
      <Path
        d="M31 24C31 25.0506 30.7672 26.0909 30.3149 27.0615C29.8626 28.0321 29.1997 28.914 28.364 29.6569C27.5282 30.3997 26.5361 30.989 25.4442 31.391C24.3522 31.7931 23.1819 32 22 32C20.8181 32 19.6478 31.7931 18.5558 31.391C17.4639 30.989 16.4718 30.3997 15.636 29.6569C14.8003 28.914 14.1374 28.0321 13.6851 27.0615C13.2328 26.0909 13 25.0506 13 24L22 24H31Z"
        stroke={color}
        strokeWidth="4"
        mask="url(#path-2-inside-1_1489_28)"
      />
      <Line
        x1="15.3833"
        y1="15.706"
        x2="19.7537"
        y2="18.5441"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Line
        x1="15.0239"
        y1="18.9636"
        x2="20.235"
        y2="18.9636"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Line
        x1="24.294"
        y1="18.5442"
        x2="28.6644"
        y2="15.706"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Line
        x1="24.0239"
        y1="18.9636"
        x2="29.235"
        y2="18.9636"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
