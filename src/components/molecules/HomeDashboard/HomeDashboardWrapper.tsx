import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
type Props = {
  children?: ReactElement;
};

export const HomeDashboardItemWrapper: React.FC<Props> = ({ children }) => {
  return <View style={styles.dashboardItemContainer}>{children}</View>;
};
