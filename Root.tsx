import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  ProgramContextProvider,
  programIdType,
  SELECTED_PROGRAM_STATE,
} from './src/context/program';

export default function Root() {
  const dispatch = useDispatch();
  const isBooting = useSelector(appIsBootingSelector);
  const needSetup = useSelector(appNeedSetupSelector);
  const openedModal = useSelector(appOpenedModalSelector);

  useEffect(() => {
    dispatch(onLaunchThunk());
  }, []);

  const modal = useMemo(() => {
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
      <ProgramContextProvider>
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
      </ProgramContextProvider>
      <StatusBar />
    </>
  );
}
