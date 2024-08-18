import React, {FC} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  // Optional onPress handler
}

const PrimaryButton: FC<PrimaryButtonProps> = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      className="h-[44] flex-row justify-center items-center bg-primary rounded-lg my-4"
      onPress={onPress}>
      {!loading ? (
        <Text className="text-base text-white font-rubik-semi-bold">
          {title}
        </Text>
      ) : (
        <ActivityIndicator animating={true} color={'white'} />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
