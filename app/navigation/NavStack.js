import { ConstString } from '../Strings';
import {
  Home,
  Login,
  Profile,
  Register,
  Restaurant,
  SetupMenu,
  WheelOfFortune,
  ModalScreen
} from '../screens';
import BottomNavigationBar from './bottom/BottomNavigationBar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Animated,
  Easing
} from 'react-native';

const Stack = createStackNavigator();
export const NavStack = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName={ConstString.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled:false,
      }}>
      <Stack.Screen name={ConstString.LOGIN} component={Login} options={{
      }}/>
      <Stack.Screen
        name={ConstString.MODAL}
        component={ModalScreen}
        options={{ presentation: 'transparentModal',
          cardStyleInterpolator: forFade
        }}
      />
      <Stack.Screen name={ConstString.BOTTOM} component={BottomNavigationBar} />
      <Stack.Screen name={ConstString.HOME} component={Home} options={{ cardStyleInterpolator: forFade }} />
      <Stack.Screen name={ConstString.REGISTER} component={Register} />
      <Stack.Screen name={ConstString.RESTAURANT} component={Restaurant} />
      <Stack.Screen name={ConstString.ROULETTE} component={WheelOfFortune} />
      <Stack.Screen name={ConstString.MENU} component={SetupMenu} />
      <Stack.Screen name={ConstString.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};
