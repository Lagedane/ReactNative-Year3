import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import { stylesLogin } from "./styles/styles";
import Login from "./components/Login";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";

const App = (): React.JSX.Element => {

  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModalExample/> */}
      <WeatherApp/>
    </View>
  );
};

export default App;
