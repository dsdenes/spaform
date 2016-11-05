module.exports = function (req, res, next) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(res.locals).end();
      break;
    case 'POST':
      res.status(201).end();
      break;
    default:
      res.status(200).end();
  }
  next();
};