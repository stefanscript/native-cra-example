import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen/MainScreen';
import LoginScreen from './src/screens/LoginScreen/index';

export type RootStack = {
  MainScreen: undefined;
  LoginScreen: undefined;
};

const MainStack = createNativeStackNavigator<RootStack>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          gestureEnabled: true,
          headerHideShadow: true,
        }}>
        <MainStack.Screen component={MainScreen} name="MainScreen" />
        <MainStack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{
            headerShown: false,
            stackPresentation: 'modal',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
