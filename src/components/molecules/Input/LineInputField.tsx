import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, TextInput, View, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';

type Props = {
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
};

export const LineTextInput: React.FC<Props> = ({ onChangeText, onBlur, value, style, label }) => {
  return (
    <View style={lineTextStyles.container}>
      <Text>{label}</Text>
      <TextInput
        style={lineTextStyles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

const lineTextStyles = StyleSheet.create({
  label: {
    color: COLOR.text.WHITE,
    marginVertical: SPACING.MEDIUM,
  },
  container: {
    width: 250,
    height: 50,
    borderBottomWidth: 3,
    borderColor: COLOR.WHITE,
  },
  input: {
    color: COLOR.text.WHITE,
    fontSize: SIZES.font.REGULAR,
  },
});
