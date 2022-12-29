import {
  Home,
  Login,
  ModalScreen,
  Profile,
  Ratings,
  Register,
  Restaurant,
  SetupMenu,
  WheelOfFortune
} from "../screens";
import * as React from "react";
import { routes } from "../navigation/routes";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const NavStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName={ConstString.REGISTER}
      initialRouteName={routes.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
      <Stack.Screen name={routes.LOGIN} component={Login} options={{}} />
      <Stack.Screen
        name={routes.MODAL}
        component={ModalScreen}
        options={{
          presentation: "transparentModal"
        }}
      />
      {/*<Stack.Screen name={ConstString.BOTTOM} component={BottomNavigationBar} />*/}
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
      <Stack.Screen name={routes.RESTAURANT} component={Restaurant} />
      <Stack.Screen name={routes.ROULETTE} component={WheelOfFortune} />
      <Stack.Screen name={routes.MENU} component={SetupMenu} />
      <Stack.Screen name={routes.PROFILE} component={Profile} />
      <Stack.Screen name={routes.RATINGS} component={Ratings} />
    </Stack.Navigator>
  );
};
