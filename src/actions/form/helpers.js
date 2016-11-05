import { inputChanged } from './input';

export function checkAllFields() {
  return function(dispatch, getState) {
    const {form} = getState();
    fieldNames(form).map(fieldName => dispatch(inputChanged(fieldName, form.values[fieldName])));
  }
}

export function unchecked(form) {
  return fieldNames(form).some(key => form.errors[key] === false);
}

export function validCount(form) {
  return fieldNames(form).reduce((prev, key) => (prev + (+(form.errors[key] === ''))), 0);
}

export function allValid(form) {
  return validCount(form) === fieldNames(form).length;
}

export function fieldNames(form) {
  return Object.keys(form.values);
}