import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { styles } from './styles';

type Props = {
  id: string;
  programName: string;
};

export const ProgramListItem: React.FC<Props> = ({ id, programName }) => {
  return (
    <TouchableOpacity>
      <LinearGradientView
        isBoxShadow={true}
        color1={COLOR.bg.gradient.ORANGE}
        color2={COLOR.bg.gradient.YELLOW}
        style={styles.programListItemContainer}>
        <Title text={programName} size={FONT_SIZE.small} style={styles.programListItemText} />
      </LinearGradientView>
    </TouchableOpacity>
  );
};
