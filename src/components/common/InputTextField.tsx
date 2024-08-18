/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useController} from 'react-hook-form';

import {Text, TextInput, View} from 'react-native';
import FieldError from './FieldError';

type InputTextFieldProps = {
  name: string;
  label: string;
  control: any;
  rules?: any;
  placeholder: string;
  type?: string;
};

const InputTextField: React.FC<InputTextFieldProps> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  type = 'text',
}) => {
  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <View className="my-2">
      <Text className="font-rubik-medium text-base mb-2 text-text-color">
        {label}
      </Text>
      <TextInput
        className="h-[44] text-[16] py-3 border border-border-color rounded-lg px-4 placeholder-secondary-text-color"
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
      {error && <FieldError error={error?.message} />}
    </View>
  );
};

export default InputTextField;
