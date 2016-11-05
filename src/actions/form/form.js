import axios from 'axios';
import _ from 'lodash';
import { unchecked, allValid, checkAllFields } from './helpers';
import { apiRequestStart, apiRequestSuccessful, apiRequestFailed } from '../api/request';
import { showNotification } from '../notification';

export function validateForm(event) {
  if (event) event.preventDefault();
  return function(dispatch, getState) {
    let form = getState().form;
    const sent = dispatch(sendIfAllValid(form));
    dispatch(checkIfNotAllChecked(form, sent));
    form = getState().form;
    dispatch(sendIfAllValid(form, sent));
  }
}

export function sendIfAllValid(form, sent) {
  return function(dispatch, getState) {
    if (sent !== true && allValid(form)) {
      dispatch(sendForm(_.omitBy(form.values, _.isEmpty)));
      return true;
    }
  };
}

export function checkIfNotAllChecked(form, sent) {
  return function(dispatch, getState) {
    if (sent !== true && unchecked(form)) {
      dispatch(checkAllFields());
    }
  };
}

export function saveSuccessful() {
  return function(dispatch, getState) {
    dispatch(apiRequestSuccessful());
    dispatch(showNotification('form', true));
  }
}

export function saveFailed(error) {
  return function(dispatch, getState) {
    dispatch(apiRequestFailed(error));
    dispatch(showNotification('form', false));
  }
}

export function sendForm(values) {
  return function(dispatch, getState) {
    dispatch(apiRequestStart());
    axios.post('/api/form', values)
      .then(() => dispatch(saveSuccessful()))
      .catch(error => dispatch(saveFailed(error)));
  };
}
