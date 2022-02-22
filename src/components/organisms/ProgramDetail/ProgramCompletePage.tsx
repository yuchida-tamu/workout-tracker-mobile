import React, { useCallback, useContext, useMemo, useState } from 'react';
import { LinearGradientView } from '../../atoms/LinearGradientView';
import { COLOR } from '../../../constants/colors';
import { styles } from './styles';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradientButton } from '../../atoms/Button';
import { Title } from '../../atoms/TitleText';
import { useDispatch } from 'react-redux';
import { ProgramContext } from '../../../context/program';
import { updateProgramProgress } from '../../../store/actions/user/actions';
import { RecordGroupModel } from '../../../store/models/workout/recordGroup';
import { WorkoutConditionIcon } from '../../molecules/Program/WorkoutConditionIcon';

type Props = {
  navigate: () => void;
};

export const ProgramCompletePage: React.FC<Props> = ({ navigate }) => {
  const { progress, programId } = useContext(ProgramContext);
  const [condition, setCondition] = useState(0);
  const dispatch = useDispatch();

  const onPressChecker = useCallback(
    (index: number) => {
      setCondition(index + 1);
      const updatedRecordGroup = RecordGroupModel.cerateRecordGroup({
        ...progress,
        condition: index + 1,
      });
      dispatch(updateProgramProgress(updatedRecordGroup, programId));
    },
    [dispatch, programId, progress],
  );

  const data = useMemo(() => new Array<number>(5), []);

  const renderItem = useCallback(
    ({ index }: { index: number }) => {
      const isChecked = index + 1 === condition;

      return (
        <TouchableOpacity
          style={styles.checkerContainer}
          onPress={() => {
            onPressChecker(index);
          }}>
          <View style={[styles.checker, isChecked && styles.checked]}>
            <WorkoutConditionIcon condition={index + 1} />
          </View>
        </TouchableOpacity>
      );
    },
    [condition, onPressChecker],
  );
  const keyExtractor = useCallback((_, index: number) => index.toString(), []);

  return (
    <LinearGradientView
      color1={COLOR.bg.gradient.PURPLE}
      color2={COLOR.bg.gradient.TEAL}
      style={styles.contentContainer}>
      <View style={styles.completeMessageContainer}>
        <Title text="お疲れ様でした！" />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.message}>今日の体調はどうでしたか</Text>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          horizontal
          style={styles.list}
          contentContainerStyle={styles.listContent}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.startButtonContainer}>
        <LinearGradientButton
          color1={COLOR.bg.gradient.ORANGE}
          color2={COLOR.bg.gradient.YELLOW}
          title="終了する"
          style={styles.startButton}
          isShadow={true}
          onPress={navigate}
        />
      </View>
    </LinearGradientView>
  );
};
