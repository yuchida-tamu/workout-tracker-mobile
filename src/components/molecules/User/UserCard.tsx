import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  text: string | number;
  cardHeader: string;
  gradient1: string;
  gradient2: string;
};

export const UserCard: React.FC<Props> = ({ text, cardHeader, gradient1, gradient2 }) => {
  return (
    <TouchableOpacity style={styles.userCard}>
      <LinearGradient style={styles.userCardBackground} colors={[gradient1, gradient2]}>
        <View style={styles.userCardHeader}>
          <Text style={styles.userCardHeaderText}>{cardHeader}</Text>
        </View>
        <View style={styles.userCardContainer}>
          <Text style={styles.userCardText}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
