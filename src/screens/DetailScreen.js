// src/screens/DetailScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = () => (
  <View style={styles.container}>
    <Text style={styles.detailText}>This is the Detail Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  detailText: { fontSize: 22 },
});

export default DetailScreen;
