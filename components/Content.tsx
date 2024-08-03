import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesPractice } from "../styles/styles";

type ContentProps = {
  message: string;
  fullname: string;
};
const Content = ({ message, fullname }: ContentProps): React.JSX.Element => {
  const [displayFullname, setDisplayFullname] = useState("");
  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert(`'Hello', Input your fullname: ${fullname}`);
  };
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="Click Me" onPress={handleButtonClick} />
    </View>
  );
};

export default Content;
