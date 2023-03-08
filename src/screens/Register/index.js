import React, { useContext, useState } from "react";

// Other dependencies
import { useFocusEffect, useNavigation } from "@react-navigation/core";

import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

// Constants
import errorMessages from "../../constants/errorMessages";
import { LOGIN } from "../../constants/routeNames";

// Components
import RegisterComponent from "../../components/Register";

const Register = () => {
  const { navigate } = useNavigation();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  React.useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data])
  );

  //console.log(authState);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    // validate form
    if (value !== "") {
      if (name === "password") {
        if (value.length < 8) {
          setErrors((prev) => {
            return { ...prev, [name]: errorMessages.minOfEightChar };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: errorMessages.emptyField };
      });
    }
  };

  const onSubmit = () => {
    // Validate form
    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: errorMessages.emptyField };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: errorMessages.emptyField };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: errorMessages.emptyField };
      });
    }

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: errorMessages.emptyField };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: errorMessages.emptyField };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      error={error}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
