import React from 'react';
import { TextInput as Input, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { COLOR } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import { SPACING } from '../../constants/spacing';

type Props = {
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export const TextInput: React.FC<Props> = ({ onChangeText, onBlur, value, style }) => {
  return (
    <Input
      style={[styles.input, style]}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: COLOR.GRAY,
    borderRadius: SIZES.BORDER_RADIUS,
    paddingVertical: SPACING.XSMALL,
    paddingHorizontal: SPACING.SMALL,
    fontSize: SIZES.font.REGULAR,
  },
});
