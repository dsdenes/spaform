const combineReducers = require('redux').combineReducers;

const name = require('./name');
const email = require('./email');
const occupation = require('./occupation');
const birthday = require('./birthday');

module.exports = combineReducers({
  name,
  email,
  occupation,
  birthday
});