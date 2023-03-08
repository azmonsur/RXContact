import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import errorMessages from "../../../constants/errorMessages";
import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({ userName: username, password }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : { error: errorMessages.networkError },
        });
      });
  };
