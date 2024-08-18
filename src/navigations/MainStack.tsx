import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthentication} from '../features/auth/authState';
import {RootStackParamList} from '../types/navigationType';
import {getToken} from '../utils/Auth/TokenMangement';

import {RootState} from '../features/store';
import SplashScreen from '../screens/splash/SplashScreen';
import {authRoutes} from './../utils/routes/authRoutes';
import {mainRoutes} from './../utils/routes/mainRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MainStack = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state: RootState) => state.authState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task like fetching user data, etc.
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
      const token = await getToken();
      if (token) {
        // setIsAuthenticated(true);
        dispatch(setAuthentication(true));
      } else {
        dispatch(setAuthentication(false));
      }
      setIsLoading(false);
    };

    prepare();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Question' : 'Login'}
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <>
            {mainRoutes?.map((route, key) => {
              const {name, component} = route;
              return (
                <Stack.Screen key={key} name={name} component={component} />
              );
            })}
          </>
        ) : (
          <>
            {authRoutes?.map((route, key) => {
              const {name, component} = route;
              return (
                <Stack.Screen key={key} name={name} component={component} />
              );
            })}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
