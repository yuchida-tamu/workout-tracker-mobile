import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { UploadIcon } from '../../atoms/icons/UploadIcon';
import { Row } from '../../atoms/Row';
import * as ImagePicker from 'expo-image-picker';
import { boxShadow } from '../../../styles/styles';

type Props = {
  label: string;
  uri: string;
  setImage: (uri: string) => void;
};

const height = 70;

export const UploadInputField: React.FC<Props> = ({ label, uri, setImage }) => {
  const openPhotoLibrary = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }, [setImage]);

  const openCamera = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }, [setImage]);

  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <Row style={styles.row}>
        <Image style={styles.image} source={{ uri: uri }} />
        <TouchableOpacity style={[styles.uploadButton, styles.library]} onPress={openPhotoLibrary}>
          <UploadIcon />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.uploadButton, styles.camera]} onPress={openCamera}>
          <UploadIcon />
        </TouchableOpacity>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '80%',

    justifyContent: 'center',
    marginTop: SPACING.MEDIUM,
  },
  input: {
    flex: 1,
    fontSize: SIZES.font.SMALL,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: SPACING.MEDIUM,
  },
  label: {
    color: COLOR.GRAY,
  },
  uploadButton: {
    flex: 0.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.BORDER_RADIUS,
    marginHorizontal: SPACING.XSMALL,
    ...boxShadow,
  },
  camera: {
    backgroundColor: COLOR.bg.gradient.TEAL,
  },
  library: {
    backgroundColor: COLOR.bg.gradient.ORANGE,
  },
  image: {
    height: SIZES.ICON_HEIGHT,
    width: SIZES.ICON_HEIGHT,
    borderRadius: SIZES.ICON_HEIGHT / 2,
  },
});
