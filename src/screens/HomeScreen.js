// src/screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to the Home Screen!</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("Details")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  welcome: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
