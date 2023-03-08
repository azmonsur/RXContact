import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeNames";
import Contacts from "../screens/Contacts";
import ContactDetail from "../screens/ContactDetail";
import CreateContact from "../screens/CreateContact";
import Settings from "../screens/Settings";

const HomeStack = createStackNavigator();
const HomeBtnTab = createBottomTabNavigator();

const HomeNavigator = () => {
  console.log(Dimensions.get("screen"));

  return (
    <>
      <HomeStack.Navigator
        initialRouteName={CONTACT_LIST}
        screenOptions={{ headerShown: true }}
      >
        <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
        <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
        <HomeStack.Screen name={SETTINGS} component={Settings} />
      </HomeStack.Navigator>

      {/* <HomeBtnTab.Group>
        <HomeBtnTab.Screen>Hello</HomeBtnTab.Screen>
        <HomeBtnTab.Navigator>Hello</HomeBtnTab.Navigator>
      </HomeBtnTab.Group> */}
    </>
  );
};

export default HomeNavigator;
