import initialState from '../../initial-state';
import actionNames from '../../actions/action_names';

export default (state = initialState.notification, action) => {
  switch (action.type) {
    case actionNames.TOGGLE_NOTIFICATION:
      return Object.assign({}, state, {
        [action.name]: {
          successful: action.successful,
          open: action.open
        }
      });
    default:
      return state;
  }
}
