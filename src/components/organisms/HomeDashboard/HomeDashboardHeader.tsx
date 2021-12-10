import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { styles } from './styles';

export const HomeDashboardHeader = () => {
  const today = new Date();

  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        style={styles.headerBackground}
        colors={[COLOR.PRIMARY, COLOR.bg.gradient.TEAL]}>
        <Text style={styles.headerText}>
          {`${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`}
        </Text>
      </LinearGradient>
    </View>
  );
};
