import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/TabNavigator';
import { navigationRef } from './src/navigation/RootNavigation';
import { appIsBootingSelector } from './src/store/selectors/app/appSelector';
import { Text, View } from 'react-native';
import { onLaunchThunk } from './src/store/actions/app/thunks/onLaunchThunk';

export default function Root() {
  const dispatch = useDispatch();
  const isBooting = useSelector(appIsBootingSelector);
  useEffect(() => {
    dispatch(onLaunchThunk());
  }, []);

  return (
    <>
      {isBooting ? (
        <View>
          <Text>Booting</Text>
        </View>
      ) : (
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <BottomTabNavigator />
          </NavigationContainer>
        </Provider>
      )}
      <StatusBar />
    </>
  );
}
