import React, {useState} from 'react';
import {useController} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FieldError from './FieldError';

type PasswordInputTextFieldProps = {
  name: string;
  label: string;
  control: any;
  rules?: any;
  placeholder: string;
};

const PasswordInputTextField: React.FC<PasswordInputTextFieldProps> = ({
  name,
  label,
  control,
  rules,
  placeholder,
}) => {
  const [showText, setShowText] = useState(false);
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
      <View className="relative">
        <TextInput
          className="h-[44] text-[16] py-3 border border-border-color rounded-lg px-4 placeholder-secondary-text-color"
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
          secureTextEntry={!showText}
        />

        <View className="absolute right-3 flex top-0 bottom-0 justify-center">
          <FeatherIcon
            onPress={() => setShowText(!showText)}
            name={showText ? 'eye' : 'eye-off'}
            size={24}
            className="text-secondary-text-color"
          />
        </View>
      </View>
      {error && <FieldError error={error?.message} />}
    </View>
  );
};

export default PasswordInputTextField;
