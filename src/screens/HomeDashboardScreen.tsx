import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { HomeDashboardHeader } from '../components/organisms/HomeDashboard/HomeDashboardHeader';
import { HomeDashboardNotification } from '../components/organisms/HomeDashboard/HomeDashboardNotification';
import { HomeDashboardProgramInfoItem } from '../components/organisms/HomeDashboard/HomeDashboardProgramInfoItem';
import { RootStackParamList } from '../navigation/RootStack';
import { commonStyle } from '../styles/styles';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeDashboardScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToPrograms = useCallback(() => navigation.navigate('Programs'), [navigation]);

  return (
    <View style={commonStyle.container}>
      <HomeDashboardHeader />
      <ScrollView>
        <HomeDashboardNotification />
        <HomeDashboardProgramInfoItem navigate={navigateToPrograms} />
      </ScrollView>
    </View>
  );
};
