import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileimage.jpg");
  const profileImage2 = require("../assets/profileimage2.jpg");
  const [name, setName] = useState("Lada Watanadilogkul");
  const [profile, setProfile] = useState(profileImage);
  const handleChangeName = () => {
    setName("Gene");
  };
  const handleChangeImage = () => {
    setProfile(profileImage2);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profile} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button
            title="CHANGE NAME"
            onPress={handleChangeName}
            color="#ff6699"
          />
          <Text>{"\n"}</Text>
          <Button
            title="CHANGE IMAGE"
            onPress={handleChangeImage}
            color="#ff6699"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
