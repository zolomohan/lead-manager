import { combineReducers } from "redux";
import leadsReducer from "./leads.reducer";
import errorReducer from "./error.reducer";

export default combineReducers({
  leadsReducer,
  errorReducer,
});
