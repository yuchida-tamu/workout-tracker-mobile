import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GradientBackdrop } from '../components/atoms/GradientBackdrop';
import { SetupWelcomePanel } from '../components/molecules/Setup/SetupWelcomePanel';
import { SetupForm } from '../components/organisms/Setup/SetupForm';
import { COLOR } from '../constants/colors';
import { setupOnLaunchThunk } from '../store/actions/app/thunks/setupOnLaunchThunk';

import { UserModelType } from '../store/models/user/user';

export enum VisiblePage {
  NAME = 'NAME',
  GOAL = 'GOAL',
  PROFILE = 'PROFILE',
}

export const pageList = [VisiblePage.NAME, VisiblePage.GOAL, VisiblePage.PROFILE];

export const SetupScreen = () => {
  const [index, setIndex] = useState(0);
  const [isFormOpen, setIsFormOpem] = useState(false);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    if (index + 1 < pageList.length) {
      setIndex(index + 1);
    }
  };

  const onSubmitHandler = (user: UserModelType) => {
    dispatch(setupOnLaunchThunk(user));
  };

  const openFormHandler = () => {
    setIsFormOpem(true);
  };

  return (
    <GradientBackdrop
      style={{ position: 'absolute', zIndex: 100, elevation: 10 }}
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.LIGHT_BLUE}>
      {isFormOpen ? (
        <SetupForm index={index} onPress={onPressHandler} onSubmit={onSubmitHandler} />
      ) : (
        <SetupWelcomePanel openForm={openFormHandler} />
      )}
    </GradientBackdrop>
  );
};
