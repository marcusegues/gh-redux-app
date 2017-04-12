import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isFetching from './isFetching';

const repos = combineReducers({
  byId,
  allIds,
  isFetching
});

export default repos;

// Selectors
export const getUserRepos = (state, repoIds) =>
  repoIds.map(id => state.byId[id]);
