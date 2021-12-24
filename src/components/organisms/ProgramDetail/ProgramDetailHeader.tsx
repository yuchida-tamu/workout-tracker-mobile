import React from 'react';
import { View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { styles } from './styles';

type Props = {
  programName: string;
};

export const ProgramDetailHeader: React.FC<Props> = ({ programName }) => {
  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.ORANGE}
      color2={COLOR.bg.gradient.YELLOW}
      style={styles.programDetailBanner}>
      <View style={styles.bannerOverlay} />
      <Title text={programName} size={FONT_SIZE.regular} />
    </LinearGradientView>
  );
};
