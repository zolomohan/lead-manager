import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, ERROR_MESSAGE, SUCCESS_MESSAGE } from "./types";
import { returnError, returnSuccess } from "./messages.action";

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};

export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
      dispatch(returnSuccess("Lead Added"));
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
      dispatch(returnSuccess("Lead Deleted"));
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};
