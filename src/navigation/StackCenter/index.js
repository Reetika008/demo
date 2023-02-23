import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Screens from "../../constants/Screens";
import Login from "../../components/Login";
import Home from "../../components/Home";
import Splash from "../../components/Splash";
import Register from "../../components/Register";

const Stack = createStackNavigator();

export const StackCenter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Screens.LOGIN_SCREEN} component={Login} />
        <Stack.Screen name={Screens.SPLASH_SCREEN} component={Splash} />
        <Stack.Screen name={Screens.HOME_SCREEN} component={Home} />
        <Stack.Screen name={Screens.REGISTER_SCREEN} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
