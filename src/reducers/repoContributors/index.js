import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isFetching from './isFetching';

const repoContributors = combineReducers({
  byId,
  allIds,
  isFetching
});

export default repoContributors;
