import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import leadsReducer from "./leads.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  authReducer,
  leadsReducer,
  messageReducer,
});
