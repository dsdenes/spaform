import reducer from './index';

it('should properly save form values', () => {
  const action = {
    type: 'INPUT_CHANGED',
    name: 'test',
    value: 2
  };

  const expectedState = {
    test: 2
  };

  expect(reducer({}, action)).toEqual(expectedState);
});
