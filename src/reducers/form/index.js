import { combineReducers } from 'redux';
import errors from './errors/';
import values from './values/';

export default combineReducers({
  errors,
  values,
});