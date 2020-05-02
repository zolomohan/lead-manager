import { combineReducers } from "redux";
import leadsReducer from "./leads.reducer";
import errorReducer from "./error.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  leadsReducer,
  errorReducer,
  messageReducer
});
