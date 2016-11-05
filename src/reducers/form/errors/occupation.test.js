import reducer from './index';
import initialState from '../../../initial-state';

it('should unset error if valid', () => {
  let action;
  action = {
    type: 'INPUT_CHANGED',
    name: 'occupation',
    value: ''
  };
  expect(reducer(initialState.form.errors, action).occupation).toBe('');

  action = {
    type: 'INPUT_CHANGED',
    name: 'occupation',
    value: 'An Occupation'
  };
  expect(reducer(initialState.form.errors, action).occupation).toBe('');
});
