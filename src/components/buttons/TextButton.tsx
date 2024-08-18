import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

interface TextButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void; // Optional onPress handler
}

const TextButton: React.FC<TextButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity className="my-2 w-fit self-end px-1" onPress={onPress}>
      <Text className="text-base text-primary font-rubik-medium">{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
