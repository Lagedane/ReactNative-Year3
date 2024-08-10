import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import { stylesLogin } from "./styles/styles";
import Login from "./components/Login";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

const App = (): React.JSX.Element => {

  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample/> */}
      <FlatListcallBackend/>
    </View>
  );
};

export default App;
