// src/screens/SettingsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.settingsText}>Settings and Preferences</Text>
    {/* Add settings options here */}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  settingsText: { fontSize: 22 },
});

export default SettingsScreen;
