import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text } from 'react-native';
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProgramFormType>();
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
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <ScrollView contentContainerStyle={styles.addFormContainer} pointerEvents="box-none">
      <Controller
        control={control}
        name="programName"
        rules={{
          required: true,
          maxLength: 60,
          min: 1,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField label="プログラム名" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      {errors.programName && <Text style={styles.errorText}>名前を入力してください</Text>}

      <Controller
        control={control}
        name="days"
        rules={{
          required: true,
          minLength: 1,
        }}
        render={({ field: { onChange } }) => <WeeklyScheduleInput onChange={onChange} />}
      />
      {errors.days && <Text style={styles.errorText}>曜日を設定してください</Text>}
      <Controller
        control={control}
        name="workoutList"
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => <WorkoutSelect onChange={onChange} />}
      />
      {errors.workoutList && (
        <Text style={styles.errorText}>ワークアウト種目を選択してください</Text>
      )}
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
