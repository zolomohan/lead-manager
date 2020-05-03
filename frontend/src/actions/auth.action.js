import axios from "axios";
import { returnError } from "./messages.action";

import { AUTH_ERROR, USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) config.headers["Authorization"] = `Token ${token}`;

  axios
    .get("/api/auth/user", config)
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
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) config.headers["Authorization"] = `Token ${token}`;

  axios
    .post("/api/auth/logout", null, config)
    .then(() => dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => dispatch(returnError(err.response.data)));
};
