const express = require('express');
const router = express.Router();

const wrapMiddleware = require('../lib/wrap-middleware');
const restResponse = require('../lib/rest-response');
const handleValidationError = require('../lib/handle-validation-error');
const container = require('../../services');
const formService = container.form;

function getOccupations() {
  return [
    'Audiologist',
    'Speech Pathologist',
    'General Practitioner',
    'Anaesthetist',
    'Specialist Physician',
    'Cardiologist',
    'Clinical Haematologist',
    'Medical Oncologist',
    'Endocrinologist',
    'Gastroenterologist',
    'Intensive Care Specialist',
    'Neurologist'
  ];
}

router.get('/occupations',
  wrapMiddleware(getOccupations),
  restResponse
);

router.post('/form',
  wrapMiddleware(formService.save),
  restResponse,
  handleValidationError
);

module.exports = router;
