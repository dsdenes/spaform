const express = require('express');
const router = express.Router();

const wrapMiddleware = require('../lib/wrap-middleware');
const restResponse = require('../lib/rest-response');
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
module.exports = router;
