import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  navigate: () => void;
};

export const ProgramListFooter: React.FC<Props> = ({ navigate }) => {
  return (
    <View style={styles.programListFooter}>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButtonBackground} onPress={navigate}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
