import { TOGGLE_USER_IN_FAVORITES } from '../../actions/users';

const favorites = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      const user = state.has[action.user.id];
      const newState = new Set([...state]);
      if (user) {
        return [...newState.delete(action.user.id)];
      } else {
        return [...newState.add(action.user.id)];
      }
    default:
      return state;
  }
}

export default favorites;
