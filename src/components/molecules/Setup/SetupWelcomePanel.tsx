import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { styles } from './styles';

type Props = {
  openForm: () => void;
};

export const SetupWelcomePanel: React.FC<Props> = ({ openForm }) => {
  return (
    <View style={styles.container}>
      <Title text="ようこそ" size={FONT_SIZE.large} />
      <TouchableOpacity onPress={openForm} style={styles.nextButtonContainter}>
        <Text style={styles.nextButtonText}>はじめる</Text>
      </TouchableOpacity>
    </View>
  );
};
