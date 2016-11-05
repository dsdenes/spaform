import { apiRequestStart, apiRequestSuccessful, apiRequestFailed } from '../actions/api/request';
import 'whatwg-fetch';

export default function fetchAPI(path) {
  return (dispatch, getState) => {
    dispatch(apiRequestStart());
    return fetch(path)
      .then(apiResult => {
        dispatch(apiRequestSuccessful());
        return apiResult;
      }).catch(err => dispatch(apiRequestFailed(err)));
  };
}
