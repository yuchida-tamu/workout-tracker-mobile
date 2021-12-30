import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { BUTTON_CONTAINER_SIZE, styles } from './styles';

type Props = {
  navigate: () => void;
  isShrunk: boolean;
};

export const ProgramListFooter: React.FC<Props> = ({ navigate, isShrunk }) => {
  const animtedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(isShrunk ? BUTTON_CONTAINER_SIZE : 0) }],
    };
  });

  return (
    <Animated.View style={[styles.programListFooter, animtedStyle]}>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButtonBackground} onPress={navigate}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>{isShrunk ? '-' : '+'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
