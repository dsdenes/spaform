import initialState from '../../../initial-state';
import actionNames from '../../../actions/action_names';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionNames.INPUT_CHANGED:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    default:
      return state;
  }
}