const initialState = require('../../../initial-state');

module.exports = (state, action) => {
  if (typeof state === 'undefined') {
    state = initialState.form.errors.occupation;
  }
  switch (action.type) {
    case 'INPUT_CHANGED':
      if (action.name === 'occupation') {
        return '';
      }
      return state;
    default:
      return state;
  }
};