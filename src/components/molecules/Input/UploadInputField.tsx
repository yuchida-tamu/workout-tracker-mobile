import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { UploadIcon } from '../../atoms/icons/UploadIcon';
import { Row } from '../../atoms/Row';
import { TextInput } from '../../atoms/TextInput';

type Props = {
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  label: string;
};

const height = 70;

export const UploadInputField: React.FC<Props> = ({ onChangeText, onBlur, value, label }) => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <Row>
        <TextInput style={styles.input} onChangeText={onChangeText} onBlur={onBlur} value={value} />
        <TouchableOpacity style={styles.uploadButton}>
          <UploadIcon />
        </TouchableOpacity>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '80%',
    height: height,
    justifyContent: 'center',
    marginTop: SPACING.MEDIUM,
  },
  input: {
    flex: 1,
    fontSize: SIZES.font.SMALL,
  },
  label: {
    color: COLOR.GRAY,
  },
  uploadButton: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.GRAY,
    borderRadius: SIZES.BORDER_RADIUS,
    marginHorizontal: SPACING.XSMALL,
  },
});
