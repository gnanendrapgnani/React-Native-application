// src/components/CustomDrawerContent.js
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawerContent = (props) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    props.navigation.replace("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
