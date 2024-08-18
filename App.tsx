/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/features/store';
// import ForgotPasswordScreen from './src/screens/auth/ForgotPassword/ForgotPasswordScreen';
// import LoginScreen from './src/screens/auth/Login/LoginScreen';
// import QuestionScreen from './src/screens/main/QuestionScreen';
import MainStack from './src/navigations/MainStack';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
