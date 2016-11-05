import reducer from './index';
import initialState from '../../../initial-state';

it('should set error if invalid', () => {
  const action = {
    type: 'INPUT_CHANGED',
    name: 'name',
    value: ''
  };
  expect(reducer(initialState.form.errors, action).name).toBeTruthy();
});

it('should unset error if valid', () => {
  const action = {
    type: 'INPUT_CHANGED',
    name: 'name',
    value: 'Test Name'
  };
  expect(reducer(initialState.form.errors, action).name).toBe('');
});
