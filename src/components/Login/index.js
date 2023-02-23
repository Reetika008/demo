import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";

import * as Screens from "../../constants/Screens";
import { CheckUserLogin } from "../../library/authentication";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterPress = () => {
    navigation.navigate(Screens.REGISTER_SCREEN);
  };

  const handleLogin = async () => {
    try {
      await CheckUserLogin(email, password);
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleRegisterPress();
        }}
      >
        <Text style={[styles.buttonOutlineText, { marginTop: 15 }]}>
          Click to Register
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    borderColor: "blue",
    borderWidth: 1,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "blue",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "blue",
    borderWidth: 1,
  },
  buttonOutlineText: {
    textAlign: "center",
  },
});
