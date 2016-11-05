module.exports = function(reducerResult) {
  if (reducerResult !== '') {
    const validationError = new Error(reducerResult);
    validationError.validation = true;
    throw validationError;
  }
  return reducerResult;
};

