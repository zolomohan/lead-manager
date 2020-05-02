import { combineReducers } from "redux";
import leads from './leads.reducer';

export default combineReducers({
  leadsReducer: leads
});
