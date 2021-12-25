import React from 'react';
import { View, Text } from 'react-native';
import { Title } from '../../atoms/TitleText';
import { styles } from './styles';

type Props = {
  quantity: number;
};

export const ProgramDetailQuantityDisplay: React.FC<Props> = ({ quantity }) => {
  return (
    <View style={styles.quantityDisplayContainer}>
      <View>
        <Text style={styles.quantityDisplayLabel}>ワークアウトの数</Text>
      </View>
      <View>
        <Title text={quantity.toString()} />
      </View>
    </View>
  );
};
