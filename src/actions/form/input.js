import actionNames from '../action_names'

export function inputChanged(name, value) {
  return {
    type: actionNames.INPUT_CHANGED,
    name,
    value
  };
}

export function occupationListFetched(occupations) {
  return {
    type: actionNames.OCCUPATION_LIST_FETCHED,
    occupations
  };
}