import { combineReducers } from 'redux';
import users, * as fromUsers from './users/index';
import * as fromFavorites from './users/favorites';
import * as fromRepos from './repos/index';
import repos from './repos/index';
import repoContributors from './repoContributors/index';

const rootReducer = combineReducers({
  users,
  repos,
  repoContributors
});

export default rootReducer;

// Selectors
export const getVisibleUsers = (state, filter) =>
  fromUsers.getVisibleUsers(state.users, filter);

export const getUserById = (state, id) =>
  fromUsers.getUserById(state.users, id);

export const getUserByLogin = (state, login) =>
  fromUsers.getUserByLogin(state.users, login);

export const isFavorite = (state, user) =>
  fromFavorites.isFavorite(state.users.favorites, user);

export const getUserRepos = (state, user) =>
  user ? fromRepos.getUserRepos(state.repos, user.repos) : undefined;
