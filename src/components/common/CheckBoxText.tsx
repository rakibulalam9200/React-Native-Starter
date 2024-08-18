import React from 'react';
import {useController} from 'react-hook-form';
import {Pressable, Text, View} from 'react-native';
import CheckBox from './CheckBox';
import FieldError from './FieldError';
type CheckBoxTextProps = {
  name: string;
  control: any;
  label: string;
  rules?: any;
};

const CheckBoxText: React.FC<CheckBoxTextProps> = ({
  name,
  control,
  label,
  rules,
}) => {
  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <Pressable onPress={() => onChange(!value)}>
      <View className="flex-row space-x-3 py-1">
        <CheckBox checked={value === true} onPress={() => onChange(!value)} />
        <Text className="font-rubik text-[#544F5A] text-[15px]">{label}</Text>
      </View>
      {error && <FieldError error={error?.message} />}
    </Pressable>
  );
};

export default CheckBoxText;
