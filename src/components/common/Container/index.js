import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const Container = ({ children, style }) => {
  return (
    <ScrollView>
      <StatusBar
        animated={true}
        backgroundColor={colors.secondary}
        barStyle="light-content"
      />
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
