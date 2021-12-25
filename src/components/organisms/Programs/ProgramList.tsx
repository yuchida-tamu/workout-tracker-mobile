import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { windowHeight } from '../../../constants/sizes';
import { ProgramType } from '../../../store/models/program/program';
import { programsSelector } from '../../../store/selectors/user/userSelector';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { ProgramListItem } from './ProgramListItem';
import { styles } from './styles';

type Props = {
  navigate: (programId: string) => void;
  isShrunk: boolean;
};

export const ProgramList: React.FC<Props> = ({ navigate, isShrunk }) => {
  const programs = useSelector(programsSelector);
  const bottomTabHeight = useBottomTabBarHeight();
  const stackHeaderHeight = useHeaderHeight();
  const listHeight = useSharedValue(windowHeight - bottomTabHeight - stackHeaderHeight);
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isShrunk ? 0 : listHeight.value, config),
    };
  });

  const animatedFlatLisStyle = useAnimatedStyle(() => {
    return {
      opacity: isShrunk ? 0 : 1,
    };
  });

  const renderItem = useCallback(
    ({ item }: { item: ProgramType }) => {
      return <ProgramListItem program={item} navigate={navigate} />;
    },
    [navigate],
  );

  return (
    <Animated.View style={animatedStyle}>
      <LinearGradientView
        color1={COLOR.bg.gradient.PURPLE}
        color2={COLOR.SECONDARY}
        style={[styles.programListContainer, { height: '100%' }]}>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          data={programs}
          renderItem={renderItem}
          style={[styles.programList, animatedFlatLisStyle]}
        />
      </LinearGradientView>
    </Animated.View>
  );
};
