// src/navigation/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeMain">
    <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ title: "Home" }}
    />
    <Stack.Screen
      name="Details"
      component={DetailScreen}
      options={{ title: "Detail" }}
    />
  </Stack.Navigator>
);

export default HomeStack;
