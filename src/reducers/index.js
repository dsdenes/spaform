import { combineReducers } from 'redux';

import form from './form/';
import notification from './notification/';

export default combineReducers({
  form,
  notification
});
