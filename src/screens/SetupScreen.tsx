import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GradientBackdrop } from '../components/atoms/GradientBackdrop';
import { SetupForm } from '../components/organisms/Setup/SetupForm';
import { COLOR } from '../constants/colors';

export const NUMBER_PANEL = 2;

export const SetupScreen = () => {
  const [index, setIndex] = useState(0);

  const onPressHandler = () => {
    if (index + 1 < NUMBER_PANEL) {
      setIndex(index + 1);
    }
  };

  return (
    <GradientBackdrop color1={COLOR.bg.gradient.PURPLE} color2={COLOR.bg.gradient.LIGHT_BLUE}>
      {/* <SetupWelcomePanel/> */}
      <SetupForm index={index} onPress={onPressHandler} />
    </GradientBackdrop>
  );
};
