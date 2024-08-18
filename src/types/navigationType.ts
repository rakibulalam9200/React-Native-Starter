// export type AuthStackParamList = {
//   Login: undefined;
//   ForgotPassword: undefined;
// };

import {ComponentType} from 'react';

export type AppStackParamList = {
  App: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Question: undefined;
};

export interface RouteType<Key extends keyof RootStackParamList> {
  name: Key;
  component: ComponentType<any>; // This can be more specific if you have props
}
