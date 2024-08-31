import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {
  const goToAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyID: 100,
    });
  };

  const goToPost = () => {
    navigation.navigate("CreatePost");
  };

  return (
    <View>
      <MaterialIcon name="home" size={40} color="#A7C7E7" />
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="ABOUT US" onPress={goToAbout} />
      <View style={styles.postContainer}>
        <Button title="CREATE POST" onPress={goToPost} />
        <Text style={styles.postText}>
          Post: <Text style={styles.postContent}>{route.params?.post}</Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});
