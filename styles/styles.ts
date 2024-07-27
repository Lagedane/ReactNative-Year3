import { StyleSheet } from "react-native";
import React from "react";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "#ff6699",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    elevation: 5,
    marginTop: 30,
  },
  profileName: {
    fontWeight: "700",
    color: "#ff6699",
  },
});
