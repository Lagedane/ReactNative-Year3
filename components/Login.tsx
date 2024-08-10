import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return recheckEmail.test(email);
  };
  const handleSubmit = () => {
    // name === "" && email === ""
    //   ? Alert.alert("Alert", "Please Enter Name \nPlease Enter Email", [{text: "OK"}])
    //   : name === ""
    //   ? Alert.alert("Alert", "Please Enter Name", [{text: "OK"}])
    //   : email === ""
    //   ? Alert.alert("Alert", "Please Enter Email", [{text: "OK"}])
    //   : Alert.alert("Alert", "Success");

    let errorMessage = "";
    // if (!name && !email) {
    //   Alert.alert("ERROR", "Please Enter Name \nPlease Enter Email", [{ text: "OK" }]);
    //   return;
    // }
    if (!name) {
      // Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      // return;
      errorMessage += "Please Enter name\n";
    }
    if (!email) {
      // Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      // return;
      errorMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Invalid Email Format\n";
    }

    // Check Password
    if (!password) {
      errorMessage += "Please Enter Password";
    } else if (password.length < 6) {
      errorMessage += "Password must be at least 6 characters";
    }

    if (errorMessage) {
      Alert.alert("ERROR", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="SUBMIT" onPress={handleSubmit} color={"#ff6699"} />
    </View>
  );
};

export default Login;
