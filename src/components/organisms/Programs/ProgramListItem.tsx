import React, { useCallback, useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { COLOR } from '../../../constants/colors';
import { SIZES } from '../../../constants/sizes';
import { SPACING } from '../../../constants/spacing';
import { ProgramType } from '../../../store/models/program/program';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { CARD_DIMENSION_RATIO, styles } from './styles';

type Props = {
  program: ProgramType;
  navigate: (programId: string) => void;
  deleteProgram: () => void;
};
const WIDTH = SIZES.card.small * CARD_DIMENSION_RATIO;
export const ProgramListItem: React.FC<Props> = ({ program, navigate, deleteProgram }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigateToDetail = useCallback(() => navigate(program.id), [program.id, navigate]);
  const expandToShowDeleteButton = () => {
    setIsExpanded(!isExpanded);
  };
  const animatedWidth = useSharedValue(WIDTH);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(isExpanded ? animatedWidth.value + SPACING.LARGE : animatedWidth.value),
      marginTop: SPACING.SMALL,
    };
  });
  const animatedDeleteButtonStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(isExpanded ? SPACING.LARGE : 0),
      opacity: withTiming(isExpanded ? 1 : 0),
    };
  });

  const itemContainer: StyleProp<ViewStyle> = {
    justifyContent: isExpanded ? 'space-between' : 'center',
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        onPress={navigateToDetail}
        onLongPress={expandToShowDeleteButton}
        style={{ flex: 1 }}>
        <LinearGradientView
          isBoxShadow={true}
          color1={COLOR.bg.gradient.ORANGE}
          color2={COLOR.bg.gradient.YELLOW}
          style={[styles.programListItemContainer, itemContainer]}>
          <Title text={program.name} size={FONT_SIZE.small} style={styles.programListItemText} />
          <Animated.View style={[styles.deleteButton, animatedDeleteButtonStyle]}>
            <TouchableOpacity style={styles.deleteTouchArea} onPress={deleteProgram}>
              <Text style={styles.deleteButtonText}>x</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradientView>
      </TouchableOpacity>
    </Animated.View>
  );
};
