import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword/ForgotPasswordScreen';
import LoginScreen from '../screens/auth/Login/LoginScreen';
import {AuthStackParamList} from '../types/navigationType';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigationStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};
