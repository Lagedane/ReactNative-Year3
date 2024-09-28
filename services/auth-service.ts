import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";
import { http } from "./http-service";

export async function login(email: string, password: string) {
  const res = await http.post("https://api.codingthailand.com/api/login", {
    email: email,
    password: password,
  });

  // save token to storage
  // save data to ur device until the token is unvalid
  await AsyncStorage.setItem("@token", JSON.stringify(res.data));
  return res;
}

export async function logout() {
  await AsyncStorage.removeItem("@token");
}

export async function getProfile() {
  const tokenString = await AsyncStorage.getItem("@token");
  // don't have token
  if (!tokenString) {
    return null;
  }
  // have token
  const token = JSON.parse(tokenString);
  const res = await http("https://api.codingthailand.com/api/profile", {
    headers: { "Authorization": "Bearer " +token.access_token },
  });
  console.log(res.data);
  
  return res;
}
