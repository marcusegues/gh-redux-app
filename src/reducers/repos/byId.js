import { RECEIVE_REPOS } from '../../actions/repos';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPOS:
      const nextState = { ...state };
      action.repos.forEach(repo => {
        nextState[repo.id] = repo;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getRepo = (state, id) => state[id];
