import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { FONT_SIZE, Title } from '../../atoms/TitleText';
import { LineTextInput } from '../../molecules/Input/LineInputField';
import { styles } from './styles';

type SetupFormPanelProps = {
  index: number;
  onPress: () => void;
};

const NUMBER_OF_PANEL = 2;

export const SetupForm: React.FC<SetupFormPanelProps> = ({ index = 0, onPress }) => {
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
        <TouchableOpacity style={styles.nextButtonContainer} onPress={onPress}>
          <Text style={styles.nextButtonText}>完了</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
