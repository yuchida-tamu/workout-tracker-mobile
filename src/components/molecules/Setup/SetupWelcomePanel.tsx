import React from 'react';
import { View } from 'react-native';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { styles } from './styles';

export const SetupWelcomePanel: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title text="ようこそ" size={FONT_SIZE.large} />
    </View>
  );
};
