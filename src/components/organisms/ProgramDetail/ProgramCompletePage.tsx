import React from 'react';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { COLOR } from '../../../constants/colors';
import { styles } from './styles';
import { View } from 'react-native';
import { LinearGradientButton } from '../../atoms/Button';
import { Title } from '../../atoms/TitleText';

type Props = {
  navigate: () => void;
};

export const ProgramCompletePage: React.FC<Props> = ({ navigate }) => {
  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      <View style={styles.completeMessageContainer}>
        <Title text="お疲れ様でした！" />
      </View>
      <View style={styles.startButtonContainer}>
        <LinearGradientButton
          color1={COLOR.bg.gradient.ORANGE}
          color2={COLOR.bg.gradient.YELLOW}
          title="終了する"
          style={styles.startButton}
          isShadow={true}
          onPress={navigate}
        />
      </View>
    </LinearGradientView>
  );
};
