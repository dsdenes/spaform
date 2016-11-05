module.exports = function wrapMiddleware(getter) {
  return (req, res, next) => {
    try {
      return Promise.resolve(getter(req.body))
        .then(getterResult => (res.locals = getterResult))
        .then(() => next())
        .catch(error => next(new Error(error)));
    } catch (error) {
      next(error);
      return Promise.resolve();
    }
  }
};
