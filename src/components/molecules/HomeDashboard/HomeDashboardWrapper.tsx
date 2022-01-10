import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const HomeDashboardItemWrapper: React.FC<Props> = ({ children }) => {
  return <View style={styles.dashboardItemContainer}>{children}</View>;
};
