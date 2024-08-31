import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({ route }: any) => {
  const { companyName, companyID } = route.params;

  return (
    <ImageBackground
      source={require("../assets/Images/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/Images/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />
        <Text>
          {companyName} {companyID}
        </Text>
        <Image
          source={{
            uri: "https://media.tenor.com/9IgA6IjB46YAAAAi/yippee.gif",
          }}
          resizeMode="contain"
          style={styles.myImage}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
