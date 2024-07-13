import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  const onCLickMe = () => {
    Alert.alert("Hello React.js");
  };

  const users = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Mary" },
  ];

  return (
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2018} />
      <AppHeader title="This is Header2" />
      <Text>Hello React Native</Text>
      {users.map((user, index) => {
        return (
          <Text key={user.id}>
            No. {index + 1} ID: {user.id} Name: {user.name}
          </Text>
        );
      })}
      <Button
        title="Click Me"
        onPress={onCLickMe}
        color="#7F00FF"
        // onPress={() => Alert.alert("Hi", "React Native is fun")}
      />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
