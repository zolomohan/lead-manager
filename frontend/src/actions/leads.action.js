import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERROR, CREATE_MESSAGE } from "./types";

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: {
          status: err.response.status,
          message: err.response.data,
        },
      })
    );
};

export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch({
        type: CREATE_MESSAGE,
        payload: "Lead Added",
      });
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: {
          status: err.response.status,
          message: err.response.data,
        },
      });
    });
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}`)
    .then(() => {
      dispatch({ 
        type: CREATE_MESSAGE,
        payload: "Lead Deleted" 
      });
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: {
          status: err.response.status,
          message: err.response.data,
        },
      });
    });
};
