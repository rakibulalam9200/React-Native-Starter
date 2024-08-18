import React from 'react';
import {Image, View} from 'react-native';

const AuthHeader: React.FC = () => {
  return (
    <View className="flex-row justify-center my-[8]">
      <Image
        className="h-[48] w-[152]"
        source={require('../../../assets/auth_header_image.png')}
      />
    </View>
  );
};

export default AuthHeader;
