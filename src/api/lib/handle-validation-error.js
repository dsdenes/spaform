module.exports = function (error, req, res, next) {
  if (error.validation === true) {
    res.status(400).end(`Form validation failed: ${error.message}`);
  } else {
    next(error);
  }
};