const di = new (require('bottlejs'))();

const validationService = require('./validation');
di.service('validation', validationService);

module.exports = di.container;
