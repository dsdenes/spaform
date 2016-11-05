const initialState = require('../../../initial-state');

module.exports = (state, action) => {
  state = state || initialState.form.occupations;
  switch (action.type) {
    case 'OCCUPATION_LIST_FETCHED':
      return action.occupations;
    default:
      return state;
  }
};