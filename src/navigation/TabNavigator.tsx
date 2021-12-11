import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeDashboardScreen } from '../screens/HomeDashboardScreen';
import { UserScreen } from '../screens/UserScreen';
import { COLOR } from '../constants/colors';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: COLOR.PRIMARY,
    shadowColor: COLOR.BLACK,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 2,
    borderTopWidth: 0,
  },
  headerStyle: {
    backgroundColor: COLOR.PRIMARY,
  },
  tabBarActiveTintColor: COLOR.SECONDARY,
  tabBarInactiveTintColor: COLOR.WHITE,
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeDashboardScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
