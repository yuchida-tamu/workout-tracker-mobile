import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { styles } from './styles';

export const HomeDashboardHeader = () => {
  const today = new Date();

  return (
    <LinearGradientView
      style={styles.headerContainer}
      color1={COLOR.PRIMARY}
      color2={COLOR.bg.gradient.TEAL}
      isBoxShadow={true}>
      <Text style={styles.headerText}>
        {`${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`}
      </Text>
    </LinearGradientView>
  );
};
