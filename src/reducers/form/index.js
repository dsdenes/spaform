import { combineReducers } from 'redux';
import errors from './errors/';
import values from './values/';
import occupations from './occupations/';

export default combineReducers({
  errors,
  values,
  occupations
});