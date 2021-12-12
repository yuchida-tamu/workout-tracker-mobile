import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { commonStyle } from '../styles/styles';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../store/selectors/user/userSelector';
import { createNewUserThunk } from '../store/actions/user/thunks/createNewUserThunk';
import { UserModel } from '../store/models/user/user';
import { InputField } from '../components/molecules/Input/InputField';
import { UploadInputField } from '../components/molecules/Input/UploadInputField';
import { SubmitButton } from '../components/molecules/Input/SubmitButton';

type UserEditFormType = {
  username: string;
  iconUrl: string;
};

export const UserEditScreen: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username,
      iconUrl: user.iconUrl,
    },
  });

  const onSubmit = (data: UserEditFormType) => {
    const update = {
      username: data.username,
      iconUrl: data.iconUrl,
    };

    dispatch(createNewUserThunk(UserModel.create(UserModel.create(update))));
  };

  return (
    <View style={commonStyle.container}>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField onBlur={onBlur} onChangeText={onChange} value={value} label="ユーザー名" />
        )}
      />
      {errors.username && <Text>ユーザー名を入力してください</Text>}

      <Controller
        name="iconUrl"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UploadInputField
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="プロフィール画像"
          />
        )}
      />

      <SubmitButton title="編集" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
