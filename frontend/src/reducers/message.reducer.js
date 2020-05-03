import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../actions/types";

const initialState = {
  error: "",
  success: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload.message,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        success: action.payload.message,
      };
    default:
      return state;
  }
}
