import actionNames from '../action_names'

export function apiRequestStart() {
  return {
    type: actionNames.API_REQUEST_START,
  };
}

export function apiRequestSuccessful() {
  return {
    type: actionNames.API_REQUEST_SUCCESSFUL,
  };
}

export function apiRequestFailed(error) {
  return {
    type: actionNames.API_REQUEST_FAILED,
    error
  };
}