import actionNames from '../action_names';

export function showNotification(name, successful) {
  return {
    type: actionNames.TOGGLE_NOTIFICATION,
    name,
    successful,
    open: true
  };
}

export function hideNotification(name, successful) {
  return {
    type: actionNames.TOGGLE_NOTIFICATION,
    name,
    successful,
    open: false
  };
}
