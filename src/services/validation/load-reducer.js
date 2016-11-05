const path = require('path');
const emptyValidatorReducer = require('./empty-validator-reducer');
const cache = {};

module.exports = (key, loader, isExist) => {
  const reducerPath = path.resolve('./src/reducers/form/errors', `${key}.js`);
  if (isExist(reducerPath)) {
    if (cache[reducerPath]) {
      return cache[reducerPath];
    }
    return (cache[reducerPath] = loader(reducerPath));
  } else {
    return emptyValidatorReducer;
  }
};