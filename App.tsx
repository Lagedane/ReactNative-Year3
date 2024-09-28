// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLogin,
  setIsLoading,
  setProfile,
} from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import CameraScreen from "./screens/CameraScreen";
import Toast from "react-native-toast-message";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
{
  /*  HomeStackScreen */
}

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarActiveBackgroundColor: "#D8F9FF",
        // tabBarInactiveBackgroundColor: "#A7C7E7"
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarLabel: "หน้าหลัก" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Camera"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </CameraStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: { backgroundColor: "#37CE" },
        // headerTintColor: "#FFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ title: "หน้าหลัก" }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#37CE" },
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

{
  /*  ProductStackScreen */
}
function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

{
  /*  LoginStackScreen */
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  // useuseAppSeleter for retrieve state from store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await getProfile();
      if (res?.data.data.user) {
        dispatch(setProfile(res.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkLogin;
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? ( // is true
          <Drawer.Navigator
            drawerContent={(props) => <MenuScreen {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
            <Drawer.Screen name="Login" component={LoginStackScreen} />
          </Drawer.Navigator>
        ) : (
          // is false
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
