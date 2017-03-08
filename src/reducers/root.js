import { combineReducers } from 'redux';
import users, * as fromUsers from './users';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;

// Selectors
export const getVisibleUsers = (state, filter) =>
  fromUsers.getVisibleUsers(state.users, filter);
