import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword/ForgotPasswordScreen';
import LoginScreen from '../screens/auth/Login/LoginScreen';
import QuestionScreen from '../screens/main/QuestionScreen';
import {AppStackParamList} from '../types/navigationType';
import {getToken} from '../utils/Auth/TokenMangement';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigationStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkToken();
    console.log('from app use effect');
  }, []);
  return (
    <AppStack.Navigator
      initialRouteName={isAuthenticated ? 'Question' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <>
          <AppStack.Screen name="Question" component={QuestionScreen} />
        </>
      ) : (
        <>
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </>
      )}
    </AppStack.Navigator>
  );
};
