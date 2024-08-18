import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {cn} from '../../utils/commonFunctions/cn';
import CheckMark from './../../../assets/svg/CheckMark';
type CheckBoxProps = {
  checked: boolean;
  onPress?: () => void;
};
const CheckBox: React.FC<CheckBoxProps> = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={cn(
          'w-6 h-6 border-2 rounded-md border-gray-300 items-center justify-center',
          {'bg-[#7C69EF]': checked},
        )}>
        <View className=" w-3 h-3">
          <CheckMark fill={'white'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;
