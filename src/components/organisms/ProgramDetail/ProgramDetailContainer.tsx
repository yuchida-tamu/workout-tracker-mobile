import React from 'react';
import { COLOR } from '../../../constants/colors';
import { ProgramType } from '../../../store/models/program/program';
import { LinearGradientButton } from '../../atoms/Button';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { ProgramDetailHeader } from './ProgramDetailHeader';
import { ProgramDetailSchedule } from './ProgramDetailSchedule';
import { styles } from './styles';

type Props = {
  program: ProgramType;
};

export const ProgramDetailContainer: React.FC<Props> = ({ program }) => {
  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      <ProgramDetailHeader programName={program.name} />
      <ProgramDetailSchedule schedule={program.schedule} programId={program.id} />
      <LinearGradientButton
        color1={COLOR.bg.gradient.ORANGE}
        color2={COLOR.bg.gradient.YELLOW}
        title="開始"
        style={styles.startButton}
        isShadow={true}
      />
    </LinearGradientView>
  );
};
