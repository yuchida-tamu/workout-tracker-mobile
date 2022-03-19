import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { UserModel, UserModelType } from '../../../store/models/user/user';
import { GoalModel } from '../../../store/models/user/goal';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { LineTextInput } from '../../molecules/Input/LineInputField';
import { styles } from './styles';
import { UploadInputField } from '../../molecules/Input/UploadInputField';
import { pageList, VisiblePage } from '../../../domain/setup/SetUpInfo';

type SetupFormPanelProps = {
  index: number;
  onPress: () => void;
  onSubmit: (user: UserModelType) => void;
};

type SetupFormType = {
  username: string;
  goal: string;
  profile: string;
};

export const SetupForm: React.FC<SetupFormPanelProps> = ({ index = 0, onPress, onSubmit }) => {
  const [canGoToNext, setCanGoToNext] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      goal: '',
      profile: '',
    },
  });

  const next = () => {
    if (!canGoToNext) return;
    Keyboard.dismiss();
    onPress();
    setCanGoToNext(true);
  };

  const submitHandler = (data: SetupFormType) => {
    const user = UserModel.create({
      username: data.username,
      goal: GoalModel.create({ goal: data.goal }),
      iconUrl: data.profile,
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
            <LineTextInput
              onBlur={onBlur}
              onChangeText={(text) => {
                if (text.length > 0) setCanGoToNext(true);
                onChange();
              }}
              value={value}
            />
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

  const uploadProfileImage = useMemo(
    () => (
      <>
        <Title text="プロフィール画像（任意）" size={FONT_SIZE.small} />
        <Controller
          name="profile"
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <UploadInputField uri={value} setImage={onChange} label={''} />
          )}
          defaultValue=""
        />
      </>
    ),
    [control],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {pageList[index] === VisiblePage.NAME && usernameInput}
        {pageList[index] === VisiblePage.GOAL && goalInput}
        {pageList[index] === VisiblePage.PROFILE && uploadProfileImage}
      </View>
      {index < pageList.length - 1 ? (
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
