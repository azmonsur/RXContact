import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  wrapper: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
