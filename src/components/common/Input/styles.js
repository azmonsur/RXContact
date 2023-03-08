import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    paddingHorizontal: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    width: "100%",
    height: 42,
    flex: 1,
    marginHorizontal: 5,
  },
  inputError: {
    color: colors.danger,
    paddingTop: 5,
    fontSize: 12,
  },
});
