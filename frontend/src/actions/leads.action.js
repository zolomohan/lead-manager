import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERROR } from "./types";
import { createMessage } from "./messages.action";

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
      dispatch(createMessage({ leadAdded: "Lead Added" }));
      dispatch({ type: ADD_LEAD, payload: res.data });
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
    .then((res) => {
      dispatch(createMessage({ leadDeleted: "Lead Deleted" }));
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
