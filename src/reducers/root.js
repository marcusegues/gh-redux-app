import { combineReducers } from 'redux';
import users, * as fromUsers from './users/index';
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

export const isFavorite = (state, user) =>
  fromUsers.isFavorite(state.users, user);
