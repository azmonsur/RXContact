import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
  email,
  lastName: last_name,
  firstName: first_name,
  userName: username,
  password,
}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post("/auth/register", {
      email,
      last_name,
      first_name,
      username,
      password,
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: errorMessages.networkError },
      });
    });
};
