import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import { stylesLogin } from "./styles/styles";
import Login from "./components/Login";

const App = (): React.JSX.Element => {

  return (
    <View>
      <ProfileScreen />
      {/* <Login/> */}
    </View>
  );
};

export default App;
