import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList, RootStackParamTypes } from './RootStack';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (screen: keyof RootStackParamList, params?: RootStackParamTypes): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate<keyof RootStackParamList>(screen, params);
  }
};
