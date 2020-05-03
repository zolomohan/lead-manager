import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./types";

export const returnError = (message) => ({
  type: ERROR_MESSAGE,
  payload: { message },
});

export const returnSuccess = (message) => ({
    type: SUCCESS_MESSAGE,
    payload: { message },
})