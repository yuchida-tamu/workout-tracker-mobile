import React from 'react';
import { StyleProp, View, ViewStyle, Text } from 'react-native';
import { SIZES, windowWidth } from '../../../constants/sizes';
import { Category } from '../../../enums/categories';
import { LinearBarGraph } from '../../atoms/LinearBarGraph';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  data: { ratio: number; category: Category; color: string }[];
};

const HEIGHT = SIZES.graph.large;

export const HomeDashboardCategoryRatioGraph: React.FC<Props> = ({ data, style }) => {
  const renderGraph = data
    .filter((d) => d.ratio >= 0.001)
    .map((d, index) => {
      const graphHeight = windowWidth * 0.8 * d.ratio;

      return (
        <View key={`${d.category}_${d.ratio}_${index}`}>
          <LinearBarGraph
            horizontal={true}
            height={SIZES.font.REGULAR}
            width={graphHeight}
            color={d.color}
            strokeWidth={SIZES.font.REGULAR}
            style={{ justifyContent: 'flex-end' }}
          />
          {d.ratio >= 0.01 && <Text style={styles.categoryRatioLabel}>{d.category}</Text>}
        </View>
      );
    });

  return (
    <>
      <Text style={styles.categortRatioHeading}>種目比率</Text>
      <View style={[{ flexDirection: 'row' }, style]}>{renderGraph}</View>
    </>
  );
};
