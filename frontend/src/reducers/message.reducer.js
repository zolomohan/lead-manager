import { CREATE_MESSAGE, GET_ERROR } from "../actions/types";

const initialState = {
  error: "",
  success: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        error: action.payload.message
      }
    case CREATE_MESSAGE:
      return {
        ...state,
        success: action.payload.message
      };
    default:
      return state;
  }
}
