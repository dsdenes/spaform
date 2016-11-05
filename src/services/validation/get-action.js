module.exports = function getAction(name, value) {
  return {
    type: 'INPUT_CHANGED',
    name,
    value
  }
};