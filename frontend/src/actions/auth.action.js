import axios from "axios";
import { returnError } from "./messages.action";

import { AUTH_ERROR, USER_LOADED, USER_LOADING } from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) config.headers["Authorization"] = token;

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
