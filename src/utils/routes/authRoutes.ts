import {RootStackParamList, RouteType} from '../../types/navigationType';

import ForgotPasswordScreen from './../../screens/auth/ForgotPassword/ForgotPasswordScreen';
import LoginScreen from './../../screens/auth/Login/LoginScreen';
export const authRoutes: RouteType<keyof RootStackParamList>[] = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPasswordScreen,
  },
];
