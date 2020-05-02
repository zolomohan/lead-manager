import { GET_ERROR } from "../actions/types";

const initialState = {
  status: "",
  message: "",
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message
      }
    default:
      return state;
  }
}