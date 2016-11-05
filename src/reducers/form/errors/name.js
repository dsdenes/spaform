const initialState = require('../../../initial-state');
const joi = require('joi-browser');

module.exports = (state, action) => {
  if (typeof state === 'undefined') {
    state = initialState.form.errors.name;
  }
  switch (action.type) {
    case 'INPUT_CHANGED':
      if (action.name === 'name') {
        try {
          joi.assert(action.value, joi.string().required(), new Error('Your name is required.'));
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