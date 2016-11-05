import reducer from './index';
import initialState from '../../../initial-state';

it('should set error if invalid', () => {
  let action;
  action = {
    type: 'INPUT_CHANGED',
    name: 'email',
    value: ''
  };
  expect(reducer(initialState.form.errors, action).email).toBeTruthy();

  action = {
    type: 'INPUT_CHANGED',
    name: 'email',
    value: 'sadsa'
  };
  expect(reducer(initialState.form.errors, action).email).toBeTruthy();
});

it('should unset error if valid', () => {
  const action = {
    type: 'INPUT_CHANGED',
    name: 'email',
    value: 'valid@email.addresss'
  };
  expect(reducer(initialState.form.errors, action).email).toBe('');
});


