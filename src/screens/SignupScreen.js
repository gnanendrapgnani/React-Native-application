// src/screens/SignupScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignupPress = () => {
    // Mock signup logic (In real app, connect to backend)
    alert("Account created successfully!");
    navigation.replace("Login");
  };

  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <Button title="Sign Up" onPress={onSignupPress} />
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink} onPress={onLoginPress}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 30 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 15,
    fontSize: 16,
  },
  loginText: { marginTop: 20, textAlign: "center", fontSize: 16 },
  loginLink: { color: "blue" },
});

export default SignupScreen;
