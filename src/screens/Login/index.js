import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import LoginComponent from "../../components/Login";
import { GlobalContext } from "../../context/Provider";
import login from "../../context/actions/auth/login";

const Login = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.username && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      loading={loading}
      error={error}
    />
  );
};

export default Login;
