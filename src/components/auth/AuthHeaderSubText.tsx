import React from 'react';
import {Text} from 'react-native';

interface AuthHeaderSubTextProps {
  title: string;
}

const AuthHeaderSubText: React.FC<AuthHeaderSubTextProps> = ({title}) => {
  return (
    <Text className="font-rubik text-[#344054] text-[15px] leading-6 py-2">
      {title}
    </Text>
  );
};

export default AuthHeaderSubText;
