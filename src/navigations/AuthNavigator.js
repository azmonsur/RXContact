import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER, SETTINGS } from "../constants/routeNames";

// Import components
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
