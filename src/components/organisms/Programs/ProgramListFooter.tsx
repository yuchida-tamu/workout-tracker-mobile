import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const ProgramListFooter = () => {
  return (
    <View style={styles.programListFooter}>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButtonBackground}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
