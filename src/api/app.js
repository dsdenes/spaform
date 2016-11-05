const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const routes = require('./routes');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(favicon(path.resolve(__dirname, '../../build/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../../build')));
app.use('/api', routes);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end(err.message);
});

module.exports = app;