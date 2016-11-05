const initialState = require('../../../initial-state');
const joi = require('joi-browser');

module.exports = (state, action) => {
  if (typeof state === 'undefined') {
    state = initialState.form.errors.email;
  }
  switch (action.type) {
    case 'INPUT_CHANGED':
      if (action.name === 'email') {
        try {
          joi.assert(action.value, joi.string().email().required(), new Error('Oops, your e-mail seems invalid.'));
          return '';
        } catch(err) {
          return err.message;
        }
      }
      return state;
    default:
      return state;
  }
};