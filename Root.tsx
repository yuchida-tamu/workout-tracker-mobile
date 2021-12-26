import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/TabNavigator';
import { navigationRef } from './src/navigation/RootNavigation';
import {
  appIsBootingSelector,
  appNeedSetupSelector,
  appOpenedModalSelector,
} from './src/store/selectors/app/appSelector';
import { Text, View } from 'react-native';
import { onLaunchThunk } from './src/store/actions/app/thunks/onLaunchThunk';
import { SetupScreen } from './src/screens/SetupScreen';
import { ModalType } from './src/store/models/app/app';
import { ProgramProgressRecordPicker } from './src/components/organisms/ProgramProgress/ProgramProgressRecordPicker';
import { openModal } from './src/store/actions/app/action';

export default function Root() {
  const dispatch = useDispatch();
  const isBooting = useSelector(appIsBootingSelector);
  const needSetup = useSelector(appNeedSetupSelector);
  const openedModal = useSelector(appOpenedModalSelector);
  useEffect(() => {
    dispatch(onLaunchThunk());
  }, []);

  const modal = useMemo(() => {
    console.log(openedModal);
    switch (openedModal) {
    case ModalType.RECORD_PICKER:
      return <ProgramProgressRecordPicker />;
    default:
      return;
    }
  }, [openedModal]);

  return (
    <>
      {needSetup && <SetupScreen />}
      {isBooting ? (
        <View>
          <Text>Booting</Text>
        </View>
      ) : (
        <NavigationContainer ref={navigationRef}>
          <BottomTabNavigator />
        </NavigationContainer>
      )}
      {modal}
      <StatusBar />
    </>
  );
}
