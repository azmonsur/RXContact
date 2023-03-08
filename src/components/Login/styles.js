import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    paddingTop: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    paddingVertical: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: "row",
  },
  infoText: {
    fontSize: 17,
  },
  linkBtn: {
    paddingLeft: 8,
    fontSize: 16,
    color: colors.primary,
  },
});
