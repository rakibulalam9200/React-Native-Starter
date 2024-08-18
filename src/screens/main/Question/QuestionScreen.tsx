import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAuthentication} from '../../../features/auth/authState';
import {RootStackParamList} from '../../../types/navigationType';
import {deleteToken} from '../../../utils/Auth/TokenMangement';

type QuestionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Question'
>;

interface Props {
  navigation: QuestionScreenNavigationProp;
}
const QuestionScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const logout = async () => {
    await deleteToken();
    dispatch(setAuthentication(false));
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <Text>Quesiton page</Text>
      <TouchableOpacity
        onPressIn={logout}
        className="bg-green-500 py-2 mx-4 justify-center items-center rounded">
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuestionScreen;
