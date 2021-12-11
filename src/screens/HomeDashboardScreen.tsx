import React from 'react';
import { HomeDashboardHeader } from '../components/organisms/HomeDashboard/HomeDashboardHeader';
import { HomeDashboardNotification } from '../components/organisms/HomeDashboard/HomeDashboardNotification';
import { HomeDashboardProgramInfoItem } from '../components/organisms/HomeDashboard/HomeDashboardProgramInfoItem';

export const HomeDashboardScreen = () => {
  return (
    <>
      <HomeDashboardHeader />
      <HomeDashboardNotification />
      <HomeDashboardProgramInfoItem />
    </>
  );
};
