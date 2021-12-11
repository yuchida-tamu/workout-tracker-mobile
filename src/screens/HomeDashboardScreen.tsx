import React from 'react';
import { View } from 'react-native';
import { HomeDashboardHeader } from '../components/organisms/HomeDashboard/HomeDashboardHeader';
import { HomeDashboardNotification } from '../components/organisms/HomeDashboard/HomeDashboardNotification';
import { HomeDashboardProgramInfoItem } from '../components/organisms/HomeDashboard/HomeDashboardProgramInfoItem';
import { commonStyle } from '../styles/styles';

export const HomeDashboardScreen = () => {
  return (
    <View style={commonStyle.container}>
      <HomeDashboardHeader />
      <HomeDashboardNotification />
      <HomeDashboardProgramInfoItem />
    </View>
  );
};
