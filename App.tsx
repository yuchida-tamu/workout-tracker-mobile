import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/TabNavigator';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
      <StatusBar />
    </>
  );
}
