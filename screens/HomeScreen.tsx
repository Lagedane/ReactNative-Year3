import { StyleSheet, View, Button, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AppLogo from "../components/AppLogo";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { logout } from "../services/auth-service";
import { selectAuthState, setIsLoading, setIsLogin } from "../auth/auth-slice";
import { Text } from "@rneui/base"; // use Text component from react native base

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { profile }= useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={async () => {
              await logout();
              dispatch(setIsLogin(false));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const goToAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyID: 100,
    });
  };
  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color="#A7C7E7" />
      {profile ? (
        <>
          <Text h3>Welcome {profile.name}</Text>
          <Text style={{paddingBottom:5}}>
            Email: {profile.email} ID: {profile.id} Role: {profile.role}
          </Text>
        </>
      ) : <Text>Test</Text>}
      <Button title="ABOUT US" onPress={goToAbout} />
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
