const di = new (require('bottlejs'))();

const formService = require('./form');
const validationService = require('./validation');

di.service('form', formService, 'validation');
di.service('validation', validationService);

module.exports = di.container;
