import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LOGIN, REGISTER } from "../../constants/routeNames";
import { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import Container from "../common/Container";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import Message from "../common/Message";
import styles from "./styles";

const RegisterComponent = ({
  form,
  errors,
  loading,
  error,
  onChange,
  onSubmit,
}) => {
  const { navigate } = useNavigation();
  const { authDispatch } = useContext(GlobalContext);

  return (
    <Container>
      <Image
        style={[styles.logoImage]}
        source={require("../../assets/images/logo-red.png")}
      />
      <View style={{ marginBottom: 10 }}>
        <Text style={[styles.title]}>Welcome to RNContacts</Text>
        <Text style={[styles.subTitle]}>Create a new Acoount</Text>
        <View style={[styles.form]}>
          {error?.error && (
            <Message retry retryFn={() => {}} danger message={error?.error} />
          )}

          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => onChange({ name: "userName", value })}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="Firt name"
            placeholder="Enter First name"
            onChangeText={(value) => onChange({ name: "firstName", value })}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last name"
            s
            placeholder="Enter Last name"
            onChangeText={(value) => onChange({ name: "lastName", value })}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter email"
            onChangeText={(value) => onChange({ name: "email", value })}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(value) => onChange({ name: "password", value })}
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            primary
            loading={loading}
            title="Register"
            onPress={onSubmit}
            disabled={loading}
          />
          <View style={[styles.createSection]}>
            <Text style={[styles.infoText]}>Have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
                clearAuthState()(authDispatch);
              }}
            >
              <Text style={[styles.linkBtn]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
