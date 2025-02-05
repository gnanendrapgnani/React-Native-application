// src/navigation/RootNavigator.js
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./AuthStack";
import AppDrawer from "./AppDrawer";

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        let token = await AsyncStorage.getItem("userToken");
        setUserToken(token);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return userToken ? <AppDrawer /> : <AuthStack />;
};

export default RootNavigator;
