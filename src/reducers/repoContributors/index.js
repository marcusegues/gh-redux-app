import { combineReducers } from 'redux';
import isFetching from './isFetching';

const repoContributors = combineReducers({
  isFetching
});

export default repoContributors;
