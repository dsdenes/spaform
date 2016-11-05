const loadReducer = require('./load-reducer');
const emptyValidatorReducer = require('./empty-validator-reducer');

it('should load empty validator if not exists', () => {
  const isExist = jest.fn(() => false);
  const loader = jest.fn();
  expect(loadReducer('valami', loader, isExist)).toBe(emptyValidatorReducer);
  expect(isExist).toHaveBeenCalledTimes(1);
  expect(loader).toHaveBeenCalledTimes(0);
});

it('should load if exists', () => {
  const expectedReducer = () => {};
  const isExist = jest.fn(() => true);
  const loader = jest.fn(() => expectedReducer);
  expect(loadReducer('valami', loader, isExist)).toEqual(expectedReducer);
  expect(loadReducer('valami', loader, isExist)).toEqual(expectedReducer);
  expect(isExist).toHaveBeenCalledTimes(2);
  expect(loader).toHaveBeenCalledTimes(1);
});