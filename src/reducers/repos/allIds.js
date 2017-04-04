import { RECEIVE_REPOS } from '../../actions/repos';

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REPOS:
      return [...state, ...action.repos.map(repo => repo.id)];
    default:
      return state;
  }
};

export default allIds;
