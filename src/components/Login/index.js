import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { REGISTER } from "../../constants/routeNames";
import Container from "../common/Container";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import Message from "../common/Message";
import styles from "./styles";

const LoginComponent = ({ error, onSubmit, onChange, loading }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        style={[styles.logoImage]}
        source={require("../../assets/images/logo-red.png")}
      />
      <View>
        <Text style={[styles.title]}>Welcome to RNContacts</Text>
        <Text style={[styles.subTitle]}>Please login here</Text>

        {error && !error?.error && (
          <Message danger onDismiss={() => {}} message="Invalid credentials" />
        )}

        <View style={[styles.form]}>
          {error && !error?.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid credentials"
            />
          )}

          {error?.error && (
            <Message danger onDismiss={() => {}} message={error.error} />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />
          <CustomButton
            error={error}
            loading={loading}
            onPress={onSubmit}
            primary
            title="Login"
            disabled={loading}
          />
          <View style={[styles.createSection]}>
            <Text style={[styles.infoText]}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={[styles.linkBtn]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
