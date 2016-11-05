const getInitialState = require('./get-initial-state');
it('should get back with a proper initial state', () => {
  expect(getInitialState('test')).toEqual({
    errors: {
      test: false
    }
  });
});
