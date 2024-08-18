/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import GlobalStyle from '../../../../styles/globalStyles';
import AuthHeader from '../../../components/auth/AuthHeader';
import AuthHeaderSubText from '../../../components/auth/AuthHeaderSubText';
import AuthHeaderText from '../../../components/auth/AuthHeaderText';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import CheckBoxText from '../../../components/common/CheckBoxText';
import InputTextField from '../../../components/common/InputTextField';
import {useSendOtpMutation} from '../../../features/auth/authSlice';
import {RtkRes} from '../../../types/serverResponse';
import {setHookError} from '../../../utils/error/errroMsg';

interface FormInputs {
  email: string;
  accept_terms: boolean;
}

const ForgotPasswordScreen: React.FC = () => {
  const {handleSubmit, control, reset, setError} = useForm<FormInputs>({
    defaultValues: {
      email: '',
      accept_terms: false,
    },
  });
  const [sendOtp, {error, isLoading}] = useSendOtpMutation();
  setHookError(error as RtkRes, setError);
  const onSubmit = async (data: FormInputs) => {
    const res: RtkRes = await sendOtp(data);
    if (res.data?.success) {
      console.log('success');
    }
  };
  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="px-[20] flex-1">
          <AuthHeader />
          <AuthHeaderText title={'Forgot Password'} />
          <AuthHeaderSubText
            title="Just type in your email and we will send you a code to reset your
            password"
          />
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
            placeholder="Enter your email address"
          />
          <CheckBoxText
            rules={{
              required: 'Please accept all terms and conditions',
            }}
            name="accept_terms"
            label="I accept all terms and conditions."
            control={control}
          />
          <PrimaryButton
            title={'Send Code'}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
