import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { UploadIcon } from '../../atoms/icons/UploadIcon';
import { Row } from '../../atoms/Row';
import * as ImagePicker from 'expo-image-picker';
import { CameraIcon } from '../../atoms/icons/CameraIcon';

type Props = {
  label: string;
  uri: string;
  setImage: (uri: string) => void;
};

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
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: uri }} />
        <Row>
          <TouchableOpacity
            style={[styles.uploadButton, styles.library]}
            onPress={openPhotoLibrary}>
            <UploadIcon size={SIZES.icon.small} color={COLOR.bg.gradient.ORANGE} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.uploadButton, styles.camera]} onPress={openCamera}>
            <CameraIcon size={SIZES.icon.small} color={COLOR.bg.gradient.TEAL} />
          </TouchableOpacity>
        </Row>
      </View>
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
    height: 30,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.BORDER_RADIUS,
    marginHorizontal: SPACING.XSMALL,
    borderWidth: 2,
  },
  camera: {
    borderColor: COLOR.bg.gradient.TEAL,
  },
  library: {
    borderColor: COLOR.bg.gradient.ORANGE,
  },
  image: {
    height: SIZES.ICON_HEIGHT,
    width: SIZES.ICON_HEIGHT,
    borderRadius: SIZES.ICON_HEIGHT / 2,
    backgroundColor: COLOR.GRAY,
    marginVertical: SPACING.SMALL,
  },
  container: {
    alignItems: 'center',
  },
});
