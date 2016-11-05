import { combineReducers } from 'redux';

import form from './form/';
import api from './api/';
import notification from './notification/';

export default combineReducers({
  form,
  api,
  notification
});
