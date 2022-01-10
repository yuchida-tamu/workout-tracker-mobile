import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { numberOfProgramsSelector } from '../../../store/selectors/user/userSelector';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { HomeDashboardItemWrapper } from '../../molecules/HomeDashboard/HomeDashboardWrapper';
import { styles } from './styles';

type Props = {
  navigate: () => void;
};

export const HomeDashboardProgramInfoItem: React.FC<Props> = ({ navigate }) => {
  const numberOfPrograms = useSelector(numberOfProgramsSelector);

  return (
    <HomeDashboardItemWrapper>
      <>
        <TouchableOpacity onPress={navigate}>
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
      </>
    </HomeDashboardItemWrapper>
  );
};
