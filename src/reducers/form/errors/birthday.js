const initialState = require('../../../initial-state');
const moment = require('moment');
const SIXTEEN_YEARS_BEFORE = moment().subtract(18, 'years').startOf('day');

module.exports = (state, action) => {
  if (typeof state === 'undefined') {
    state = initialState.form.errors.birthday;
  }
  switch (action.type) {
    case 'INPUT_CHANGED':
      if (action.name === 'birthday') {
        if (moment(new Date(action.value)).isAfter(SIXTEEN_YEARS_BEFORE)) {
          return 'You have to be over 18!';
        } else {
          return '';
        }
      }
      return state;
    default:
      return state;
  }
};