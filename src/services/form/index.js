const initialState = require('../../initial-state');
const _ = require('lodash');

module.exports = function formService(validationService) {
  return Object.freeze({
    save,
  });

  function save(payload) {
    payload = _.defaults(payload, initialState.form.values);
    return Promise.all(Object.keys(payload).map(key => validationService.validate(key, payload[key])));
  }
};