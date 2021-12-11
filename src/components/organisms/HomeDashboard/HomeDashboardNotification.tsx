import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { Category } from '../../../enums/categories';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { styles } from './styles';

type Props = {
  programCategory?: Category;
};

export const HomeDashboardNotification: React.FC<Props> = ({ programCategory }) => {
  const message = useMemo(() => {
    return programCategory ? `今日は${programCategory} day です！` : '今日はしっかり休みましょう';
  }, [programCategory]);

  const colors: {
    a: string;
    b: string;
  } = useMemo(() => {
    return programCategory
      ? { a: COLOR.bg.gradient.ORANGE, b: COLOR.bg.gradient.YELLOW }
      : { a: COLOR.bg.gradient.TEAL, b: COLOR.bg.gradient.LIGHT_GREEN };
  }, [programCategory]);

  const start = {
    x: 0,
    y: 0.5,
  };

  const end = {
    x: 1,
    y: 0.5,
  };
  return (
    <LinearGradientView
      style={styles.notificationContainer}
      color1={colors.a}
      color2={colors.b}
      start={start}
      end={end}
      isBoxShadow={true}>
      <Text style={styles.notificationText}>{message}</Text>
    </LinearGradientView>
  );
};
