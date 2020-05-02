import { combineReducers } from "redux";
import leadsReducer from "./leads.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  leadsReducer,
  messageReducer
});
