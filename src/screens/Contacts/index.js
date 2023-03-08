import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { CONTACT_DETAIL } from "../../constants/routeNames";
import Container from "../../components/common/Container";
import styles from "../../components/Login/styles";

const Contacts = () => {
  const { navigate } = useNavigation();
  const { landscape } = useDeviceOrientation();

  return (
    <Container style={inStyles.container}>
      <Text>All contacts</Text>
      <TouchableOpacity onPress={() => navigate(CONTACT_DETAIL)}>
        <View>
          <Text>Contact List</Text>
        </View>
      </TouchableOpacity>
      <View
        style={[inStyles.dimension, { height: landscape ? "100%" : "30%" }]}
      ></View>
    </Container>
  );
};

export default Contacts;

const inStyles = StyleSheet.create({
  dimension: {
    width: "100%",

    backgroundColor: "tomato",
  },

  container: {
    height: "78vh",
  },
});
