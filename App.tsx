import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppHeader fullName="Lada Watanadilogkul" msg="Message from App.tsx" />
      <Content msg="Message from App.tsx" name="Lada Watanadilogkul" />
      <AppFooter footerName="Thai-Nichi Institute of Technology" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
