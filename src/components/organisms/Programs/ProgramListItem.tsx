import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { ProgramType } from '../../../store/models/program/program';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { styles } from './styles';

type Props = {
  program: ProgramType;
  navigate: (programId: string) => void;
};

export const ProgramListItem: React.FC<Props> = ({ program, navigate }) => {
  const navigateToDetail = useCallback(() => navigate(program.id), [program.id, navigate]);

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <LinearGradientView
        isBoxShadow={true}
        color1={COLOR.bg.gradient.ORANGE}
        color2={COLOR.bg.gradient.YELLOW}
        style={styles.programListItemContainer}>
        <Title text={program.name} size={FONT_SIZE.small} style={styles.programListItemText} />
      </LinearGradientView>
    </TouchableOpacity>
  );
};
