import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { windowHeight, windowWidth } from '../../constants/sizes';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const Backdrop: React.FC<Props> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.backdrop, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    zIndex: 100,
    elevation: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
