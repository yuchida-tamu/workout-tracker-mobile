import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR } from '../../../constants/colors';
import { Category } from '../../../enums/categories';
import { updateUserThunk } from '../../../store/actions/user/thunks/updateUserThunk';
import { ProgramModel } from '../../../store/models/program/program';
import { SchdeuleModel } from '../../../store/models/program/schedule';
import { UserModel } from '../../../store/models/user/user';
import { WorkoutModelType } from '../../../store/models/workout/workout';
import { userSelector } from '../../../store/selectors/user/userSelector';
import { LinearGradientButton } from '../../atoms/Button';
import { CategorySelector } from '../../molecules/Input/CategorySelector';
import { InputField } from '../../molecules/Input/InputField';
import { WeeklyScheduleInput } from '../../molecules/Input/WeeklyScheduleInput';
import { WorkoutSelect } from '../../molecules/Input/WorkoutSelect';
import { styles } from './styles';

type ProgramFormType = {
  programName: string;
  days: boolean[];
  workoutList: WorkoutModelType[];
  category: Category;
};

type Props = {
  close: () => void;
};

export const ProgramAddForm: React.FC<Props> = ({ close }) => {
  const { control, handleSubmit } = useForm<ProgramFormType>();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const onSubmit = ({ programName, days, workoutList, category }: ProgramFormType) => {
    const update = UserModel.addProgram(
      user,
      ProgramModel.create({
        name: programName,
        schedule: SchdeuleModel.create({ days: days }),
        workoutList,
        category,
      }),
    );
    dispatch(updateUserThunk(update));
    close();
  };

  return (
    <ScrollView contentContainerStyle={styles.addFormContainer} pointerEvents="box-none">
      <Controller
        control={control}
        name="programName"
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField label="プログラム名" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      <Controller
        control={control}
        name="days"
        render={({ field: { onChange } }) => <WeeklyScheduleInput onChange={onChange} />}
      />
      <Controller
        control={control}
        name="workoutList"
        render={({ field: { onChange } }) => <WorkoutSelect onChange={onChange} />}
      />
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange } }) => <CategorySelector onChange={onChange} />}
      />
      <LinearGradientButton
        title="完了"
        onPress={handleSubmit(onSubmit)}
        color1={COLOR.bg.gradient.ORANGE}
        color2={COLOR.bg.gradient.YELLOW}
      />
    </ScrollView>
  );
};
