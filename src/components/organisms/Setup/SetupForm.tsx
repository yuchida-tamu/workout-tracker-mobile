import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
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

export const SetupForm: React.FC<SetupFormPanelProps> = ({ index = 0, onPress, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      goal: '',
    },
  });

  const submitHandler = (data: SetupFormType) => {
    const user = UserModel.create({
      username: data.username,
      goal: GoalModel.create({ goal: data.goal }),
      //Delete only for development
      programs: mockUser.programs,
    });
    onSubmit(user);
  };

  const renderPanel = useMemo(() => {
    switch (index) {
    case 0:
      return (
        <>
          <Title text="あなたの名前は？" size={FONT_SIZE.regular} />
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <LineTextInput onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />
        </>
      );
    case 1:
      return (
        <>
          <Title text="あなたの目標は？" size={FONT_SIZE.regular} />
          <Controller
            name="goal"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <LineTextInput onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />
        </>
      );
    default:
      return (
        <>
          <Title text="あなたの名前は？" size={FONT_SIZE.regular} />
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <LineTextInput onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />
        </>
      );
    }
  }, [index, control]);

  return (
    <View style={styles.container}>
      <View>{renderPanel}</View>
      {index < NUMBER_OF_PANEL - 1 ? (
        <TouchableOpacity style={styles.nextButtonContainer} onPress={onPress}>
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
