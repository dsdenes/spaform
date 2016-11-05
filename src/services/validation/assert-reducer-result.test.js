const asserReducerResult = require('./assert-reducer-result');

it('should throw when error set', () => {
  const expectedErrorMessage = 'there is some error';
  expect(asserReducerResult.bind(null, expectedErrorMessage)).toThrow(expectedErrorMessage);
});

it('should not throw when there is no error', () => {
  expect(asserReducerResult.bind(null, '')).not.toThrow();
});
