import axios from "axios";
import { returnError } from "./messages.action";

import { AUTH_ERROR, USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";

export const tokenConfig = (getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = getState().authReducer.token;
  if (token) config.headers["Authorization"] = `Token ${token}`;
  return config;
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR });
      dispatch(returnError(err.response.data));
    });
};

export const loginUser = (username, password) => (dispatch) => {
  axios
    .post("/api/auth/login", JSON.stringify({ username, password }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
      dispatch(returnError(err.response.data));
    });
};

export const logoutUser = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then(() => dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => dispatch(returnError(err.response.data)));
};
