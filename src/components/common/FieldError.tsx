import React from 'react';
import {Text} from 'react-native';

interface FieldErrorProps {
  error?: string;
}

const FieldError: React.FC<FieldErrorProps> = ({error}) => {
  return (
    <Text className="font-rubik text-sm mt-1 text-red-500 ml-1">{error}</Text>
  );
};
export default FieldError;
