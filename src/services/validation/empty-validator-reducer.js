module.exports = function emptyValidatorReducer(initialState, action) {
  return {
    errors: {
      [action.name]: ''
    }
  }
};