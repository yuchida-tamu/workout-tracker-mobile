import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SPACING } from '../../../constants/spacing';
import { TextInput } from '../../atoms/TextInput';

type Props = {
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  label: string;
};

const height = 70;

export const InputField: React.FC<Props> = ({ onChangeText, onBlur, value, label }) => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={onChangeText} onBlur={onBlur} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '80%',
    height: height,
    justifyContent: 'center',
    marginTop: SPACING.LARGE,
  },
  label: {
    color: COLOR.GRAY,
  },
});
