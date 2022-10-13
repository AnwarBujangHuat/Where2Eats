import { ConstString } from '../Strings';
import {
  Home,
  Login,
  Register,
  Restaurant,
  SetupMenu,
  WheelOfFortune,
  Profile,
} from '../screens';
import BottomNavigationBar from './bottom/BottomNavigationBar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export const NavStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ConstString.HOME}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={ConstString.LOGIN} component={Login} />
      <Stack.Screen name={ConstString.BOTTOM} component={BottomNavigationBar} />
      <Stack.Screen name={ConstString.HOME} component={Home} />
      <Stack.Screen name={ConstString.REGISTER} component={Register} />
      <Stack.Screen name={ConstString.RESTAURANT} component={Restaurant} />
      <Stack.Screen name={ConstString.ROULETTE} component={WheelOfFortune} />
      <Stack.Screen name={ConstString.MENU} component={SetupMenu} />
      <Stack.Screen name={ConstString.PROFILE} component={Profile} />

    </Stack.Navigator>
  );
};
