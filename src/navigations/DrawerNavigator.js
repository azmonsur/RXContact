import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// Import components
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
      <Drawer.Screen name={"Pi Utility"} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
