import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { HomeDashboardHeader } from '../components/organisms/HomeDashboard/HomeDashboardHeader';
import { HomeDashboardNotification } from '../components/organisms/HomeDashboard/HomeDashboardNotification';
import { HomeDashboardProgramInfoItem } from '../components/organisms/HomeDashboard/HomeDashboardProgramInfoItem';
import { SIZES, windowHeight } from '../constants/sizes';
import { SPACING } from '../constants/spacing';
import { RootStackParamList } from '../navigation/RootStack';
import { programsForTodaySelector } from '../store/selectors/user/userSelector';
import { commonStyle } from '../styles/styles';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeDashboardScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToPrograms = useCallback(() => navigation.navigate('Programs'), [navigation]);
  const programsForToday = useSelector(programsForTodaySelector);

  return (
    <View style={commonStyle.container}>
      <HomeDashboardHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: windowHeight - SIZES.card.small,
          marginBottom: SPACING.LARGE,
        }}>
        <HomeDashboardNotification programsForToday={programsForToday} />
        <HomeDashboardProgramInfoItem navigate={navigateToPrograms} />
      </ScrollView>
    </View>
  );
};
