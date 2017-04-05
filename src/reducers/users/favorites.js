import { TOGGLE_USER_IN_FAVORITES } from '../../actions/users';

const favorites = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      const newState = new Set([...state]);
      const user = newState.has(action.user.id);
      if (user) {
        newState.delete(action.user.id);
        return [...newState];
      } else {
        return [...newState.add(action.user.id)];
      }
    default:
      return state;
  }
}

export default favorites;

export const isFavorite = (state, user) => {
  return (state.indexOf(user.id) !== -1)
}
