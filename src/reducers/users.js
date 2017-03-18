import { REQUEST_USERS, RECEIVE_USERS, TOGGLE_USER_IN_FAVORITES } from './../actions/users';
import { ALL, FAVORITES } from './../constants/routeConstants';
import omit from 'lodash/omit';

const favorites = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      const user = state[action.user.id];
      if (user) {
        return omit(state, [action.user.id]);
      } else {
        const newFavorite = {
          login: action.user.login,
          avatarUrl: action.user.avatarUrl,
        }
        return {...state, [action.user.id]: newFavorite}
      }
    default:
      return state;
  }
}

const users = (state = {
  isFetching: false,
  lastReceivedId: 0,
  items: [],
  favorites: {},
}, action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      return {
        ...state,
        favorites: favorites(state.favorites, action)
      }
    case REQUEST_USERS:
      return {...state, isFetching: true}
    case RECEIVE_USERS:
      return {
        ...state,
        items: [...state.items, ...action.users],
        isFetching: false,
        lastReceivedId: action.users[action.users.length - 1].id
      }
    default:
      return state;
  }
};

export default users;

// Selectors
export const getVisibleUsers = (state, filter) => {
  switch (filter) {
    case ALL:
      return state.items;
    case FAVORITES:
      return state.items.filter(u => state.favorites.hasOwnProperty(u.id)) // need to users.filter(u => u.favorite)
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

export const isFavorite = (state, user) => {
  return state.favorites.hasOwnProperty(user.id)
}
