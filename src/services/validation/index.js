const fs = require('fs');
const loadReducer = require('./load-reducer');
const assertReducerResult = require('./assert-reducer-result');
const getInitialState = require('./get-initial-state');
const getAction = require('./get-action');

module.exports = function validationService() {
  return Object.freeze({
    validate,
  });

  function validate(key, value) {
    return get(key)(key, value);
  }

  function get(key) {
    return wrapReducer(loadReducer(key, require, fs.existsSync));
  }

  function wrapReducer(reducer) {
    return (key, value) => assertReducerResult(reducer(getInitialState(key), getAction(key, value)));
  }
};