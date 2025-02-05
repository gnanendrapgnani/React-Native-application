// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRoute();

  const onLoginPress = async () => {
    // Mock authentication logic
    if (email === "admin" && password === "password123") {
      await AsyncStorage.setItem("userToken", "loggedIn");
      router.replace("Home");
    } else {
      alert("Invalid email or password!");
    }
  };

  const onSignupPress = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={onLoginPress} />
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text style={styles.signupLink} onPress={onSignupPress}>
          Sign Up
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
  signupText: { marginTop: 20, textAlign: "center", fontSize: 16 },
  signupLink: { color: "blue" },
});

export default LoginScreen;
