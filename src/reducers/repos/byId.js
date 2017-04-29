import { RECEIVE_REPOS, RECEIVE_REPO_CONTRIBUTORS } from '../../actions/repos';

const byId = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_REPOS:
      action.repos.forEach(repo => {
        nextState[repo.id] = repo;
      });
      return nextState;
    case RECEIVE_REPO_CONTRIBUTORS:
      const repo = nextState[action.repoId];
      const newContributors = new Set(repo.contributors);
      action.contributorIds.forEach(id => newContributors.add(id));
      repo.contributors = [...newContributors];
      nextState[action.repoId] = repo;
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getRepo = (state, id) => state[id];
