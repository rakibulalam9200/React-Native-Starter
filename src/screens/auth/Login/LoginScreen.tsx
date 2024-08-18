import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import GlobalStyle from '../../../../styles/globalStyles';
import AuthHeader from '../../../components/auth/AuthHeader';
import AuthHeaderText from '../../../components/auth/AuthHeaderText';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import TextButton from '../../../components/buttons/TextButton';
import InputTextField from '../../../components/common/InputTextField';
import PasswordInputTextField from '../../../components/common/PasswordInputTextField';
import {useSigninMutation} from '../../../features/auth/authSlice';
import {setAuthentication} from '../../../features/auth/authState';
import {LoginFormInputs} from '../../../types/formType';
import {RootStackParamList} from '../../../types/navigationType';
import {RtkRes} from '../../../types/serverResponse';
import {storeToken} from '../../../utils/Auth/TokenMangement';
import {setHookError} from '../../../utils/error/errroMsg';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}
const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  // console.log(navigation, 'navigation');
  const {handleSubmit, control, reset, setError} = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [login, {isLoading}] = useSigninMutation();
  // const [serverError, setServerError] = useState<string>('');

  const onSubmit = async (data: LoginFormInputs) => {
    // console.log(data, 'data........');
    try {
      const res = await login(data).unwrap();
      // console.log(res, 'res.......');
      if (res?.success) {
        // console.log(res?.data);
        // console.log(res?.token, 'res');
        dispatch(setAuthentication(true));
        storeToken(res?.token);
        // setServerError('');
        reset();
        // Navigate to the Question screen
        navigation.navigate('Question');
      }
    } catch (err: unknown) {
      console.log(err);
      // return;
      // console.log(err, 'err');
      // console.log(getErrorMessage(err));
      // setServerError(getErrorMessage(err));
      setHookError(err as RtkRes, setError);

      // error msg need to be updated
      // toast.error("Something went wrong!")
      // console.error('Failed to save form data:', error);
    }
  };
  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="px-[20] flex-1">
          <AuthHeader />
          <AuthHeaderText title={'Log In'} />
          <View className="border-b-light-gray border-b mb-2" />

          <InputTextField
            name="email"
            label="Email*"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email is invalid',
              },
              
            }}
            placeholder="Enter your email"
          />
          <PasswordInputTextField
            name="password"
            label="Password*"
            control={control}
            rules={{
              required: 'Password is required',
            }}
            placeholder="Enter your password"
          />
          {/* {serverError ? <FieldError error={serverError} /> : <></>} */}
          <TextButton
            title={'Forgot Password?'}
            onPress={() => navigation.navigate('ForgotPassword')}
          />

          <PrimaryButton
            title={'Login'}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
