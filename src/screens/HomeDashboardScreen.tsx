import React from 'react';
import { HomeDashboardHeader } from '../components/organisms/HomeDashboard/HomeDashboardHeader';
import { HomeDashboardNotification } from '../components/organisms/HomeDashboard/HomeDashboardNotification';

export const HomeDashboardScreen = () => {
  return (
    <>
      <HomeDashboardHeader />
      <HomeDashboardNotification />
    </>
  );
};
