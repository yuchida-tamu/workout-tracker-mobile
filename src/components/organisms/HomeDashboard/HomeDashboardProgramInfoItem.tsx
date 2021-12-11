import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import {
  programIdSelector,
  programSelector,
} from '../../../store/selectors/program/programSelector';
import { numberOfProgramsSelector } from '../../../store/selectors/user/userSelector';
import { CircleGraphSkelton } from '../../atoms/CircleGraphSkelton';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { HomeDashboardItemWrapper } from '../../molecules/HomeDashboard/HomeDashboardWrapper';
import { ITEM_HEIGHT, styles } from './styles';

const strokeWidth = 20;

export const HomeDashboardProgramInfoItem: React.FC = () => {
  const programId = useSelector(programIdSelector);
  const numberOfPrograms = useSelector(numberOfProgramsSelector);

  return (
    <HomeDashboardItemWrapper>
      <>
        <TouchableOpacity onPress={() => console.log(programId)}>
          <LinearGradientView
            style={styles.dashboardItem}
            color1={COLOR.bg.gradient.PURPLE}
            color2={COLOR.bg.gradient.LIGHT_BLUE}
            isBoxShadow={true}>
            <>
              <Text style={[styles.dashboardItemText, styles.dashboardItemHeadingText]}>
                プログラムの数
              </Text>
              <Text style={[styles.dashboardItemText, styles.dashboardItemContentText]}>
                {numberOfPrograms}
              </Text>
            </>
          </LinearGradientView>
        </TouchableOpacity>
        <CircleGraphSkelton
          strokeWidth={strokeWidth}
          height={ITEM_HEIGHT}
          style={styles.dashboardItemGraphConatainer}
        />
      </>
    </HomeDashboardItemWrapper>
  );
};
