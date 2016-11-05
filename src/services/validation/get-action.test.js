const getAction = require('./get-action');
it('should get back with a proper action', () => {
  expect(getAction('testname', 'testvalue')).toEqual({
    type: 'INPUT_CHANGED',
    name: 'testname',
    value: 'testvalue'
  });
});
