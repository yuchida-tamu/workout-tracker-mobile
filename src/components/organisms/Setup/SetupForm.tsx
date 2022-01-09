import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { UserModel, UserModelType } from '../../../store/models/user/user';
import { GoalModel } from '../../../store/models/user/goal';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { LineTextInput } from '../../molecules/Input/LineInputField';
import { styles } from './styles';
import { mockUser } from '../../../mock/user';

type SetupFormPanelProps = {
  index: number;
  onPress: () => void;
  onSubmit: (user: UserModelType) => void;
};

const NUMBER_OF_PANEL = 2;

type SetupFormType = {
  username: string;
  goal: string;
};

enum VisiblePage {
  NAME = 'NAME',
  GOAL = 'GOAL',
}

export const SetupForm: React.FC<SetupFormPanelProps> = ({ index = 0, onPress, onSubmit }) => {
  const [visiblePage, setVisiblePage] = useState<VisiblePage>(VisiblePage.NAME);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      goal: '',
    },
  });

  const next = () => {
    Keyboard.dismiss();
    setVisiblePage(VisiblePage.GOAL);
    onPress();
  };

  const submitHandler = (data: SetupFormType) => {
    const user = UserModel.create({
      username: data.username,
      goal: GoalModel.create({ goal: data.goal }),
      //Delete only for development
      programs: mockUser.programs,
    });
    onSubmit(user);
  };

  const usernameInput = useMemo(
    () => (
      <>
        <Title text="あなたの名前は？" size={FONT_SIZE.regular} />
        <Controller
          name="username"
          control={control}
          rules={{ required: true, minLength: 35 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <LineTextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          defaultValue=""
        />
      </>
    ),
    [control],
  );

  const goalInput = useMemo(
    () => (
      <>
        <Title text="あなたの目標は？" size={FONT_SIZE.regular} />
        <Controller
          name="goal"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <LineTextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          defaultValue=""
        />
      </>
    ),
    [control],
  );

  return (
    <View style={styles.container}>
      <View>
        {visiblePage === VisiblePage.NAME && usernameInput}
        {visiblePage === VisiblePage.GOAL && goalInput}
      </View>
      {index < NUMBER_OF_PANEL - 1 ? (
        <TouchableOpacity style={styles.nextButtonContainer} onPress={next}>
          <Text style={styles.nextButtonText}>次へ</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.nextButtonContainer} onPress={handleSubmit(submitHandler)}>
          <Text style={styles.nextButtonText}>完了</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
