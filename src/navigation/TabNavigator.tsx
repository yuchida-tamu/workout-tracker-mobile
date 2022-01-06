import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { HomeDashboardScreen } from '../screens/HomeDashboardScreen';
import { UserScreen } from '../screens/UserScreen';
import { WorkoutListScreen } from '../screens/WorkoutListScreen';
import { COLOR } from '../constants/colors';
import { UserEditScreen } from '../screens/UserEditScreen';
import { RootStackParamList } from './RootStack';
import { HomeDashboardProgramInfoItem } from '../components/organisms/HomeDashboard/HomeDashboardProgramInfoItem';
import { DashbaordIcon } from '../components/atoms/icons/DashboardIcon';
import { UserIcon } from '../components/atoms/icons/UserIcon';
import { WorkoutListIcon } from '../components/atoms/icons/WorkoutListIcon';

const Tab = createBottomTabNavigator<RootStackParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
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
  headerTintColor: COLOR.WHITE,
  tabBarActiveTintColor: COLOR.SECONDARY,
  tabBarInactiveTintColor: COLOR.WHITE,
};

const stackNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLOR.PRIMARY,
  },
  headerTintColor: COLOR.WHITE,
};

export const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={stackNavigationOptions}>
      <HomeStack.Screen
        name="Dashboard"
        component={HomeDashboardScreen}
        options={{ title: 'ダッシュボード' }}
      />
    </HomeStack.Navigator>
  );
};

export const UserStack = createStackNavigator();
export const UserStackScreen = () => {
  return (
    <UserStack.Navigator initialRouteName="UserHome" screenOptions={stackNavigationOptions}>
      <UserStack.Screen name="UserHome" component={UserScreen} options={{ title: 'ユーザー' }} />
      <UserStack.Screen
        name="UserEdit"
        component={UserEditScreen}
        options={{ title: 'ユーザー編集' }}
      />
    </UserStack.Navigator>
  );
};

export const WorkoutListStack = createStackNavigator();
export const WorkoutListStackScreen = () => {
  return (
    <WorkoutListStack.Navigator initialRouteName="Workout" screenOptions={stackNavigationOptions}>
      <WorkoutListStack.Screen
        name="Workout"
        component={WorkoutListScreen}
        options={{ title: 'ワークアウト' }}
      />
    </WorkoutListStack.Navigator>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <DashbaordIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <UserIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutListStackScreen}
        options={{ tabBarIcon: ({ color, size }) => <WorkoutListIcon color={color} size={size} /> }}
      />
    </Tab.Navigator>
  );
};
