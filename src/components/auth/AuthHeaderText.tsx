import React from 'react';
import {Text} from 'react-native';

interface AuthHeaderTextProps {
  title: string; // Define the type for the `title` prop
}

const AuthHeaderText: React.FC<AuthHeaderTextProps> = ({title}) => {
  return (
    <Text className="text-text-color text-2xl font-rubik-medium my-4">
      {title}
    </Text>
  );
};

export default AuthHeaderText;
