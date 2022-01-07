import React, { useState } from 'react';
import { Text, View } from 'react-native';
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
  const [image, setImage] = useState(user.iconUrl);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username,
    },
  });

  const onSubmit = (data: UserEditFormType) => {
    const update = {
      ...user,
      username: data.username,
      iconUrl: image,
    };

    dispatch(createNewUserThunk(UserModel.create(update)));
  };

  const onPickImageHandler = (uri: string) => {
    setImage(uri);
  };

  return (
    <View style={commonStyle.container}>
      <UploadInputField uri={image} label="プロフィール画像" setImage={onPickImageHandler} />
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField onBlur={onBlur} onChangeText={onChange} value={value} label="ユーザー名" />
        )}
      />
      {errors.username && <Text>ユーザー名を入力してください</Text>}

      <SubmitButton title="編集" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
