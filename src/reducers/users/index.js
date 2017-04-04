import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isFetching from './isFetching';
import lastReceivedId from './lastReceivedId';
import favorites from './favorites';
import { ALL, FAVORITES } from '../../constants/routeConstants';

const users = combineReducers({
  byId,
  allIds,
  isFetching,
  lastReceivedId,
  favorites
});

export default users;

// Selectors
const getAllUsers = (state) => {
  return [...state.allIds].map(id => state.byId[id]);
}

export const getVisibleUsers = (state, filter) => {
  const allUsers = getAllUsers(state);
  switch (filter) {
    case ALL:
      return allUsers;
    case FAVORITES:
      return allUsers.filter(u => state.favorites.hasOwnProperty(u.id))
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

export const isFavorite = (state, user) => {
  return state.favorites.hasOwnProperty(user.id)
}
