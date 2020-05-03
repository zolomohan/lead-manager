import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import { returnError, returnSuccess } from './messages.action';
import { tokenConfig } from './auth.action';

export const getLeads = () => (dispatch, getState) => {
  axios
    .get('/api/leads/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};

export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post('/api/leads/', lead, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
      dispatch(returnSuccess('Lead Added'));
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};

export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(() => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
      dispatch(returnSuccess('Lead Deleted'));
    })
    .catch((err) => dispatch(returnError(err.response.data)));
};
