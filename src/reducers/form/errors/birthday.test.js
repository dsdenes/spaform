import reducer from './index';
import initialState from '../../../initial-state';

it('should unset error if valid', () => {
  let action;
  action = {
    type: 'INPUT_CHANGED',
    name: 'birthday',
    value: ''
  };
  expect(reducer(initialState.form.errors, action).birthday).toBe('');

  action = {
    type: 'INPUT_CHANGED',
    name: 'birthday',
    value: 'An Occupation'
  };
  expect(reducer(initialState.form.errors, action).birthday).toBe('');
});
