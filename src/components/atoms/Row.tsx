import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

export const Row: React.FC<Props> = ({ style, children }) => {
  return <View style={[style, styles.row]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
