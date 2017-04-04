import { RECEIVE_REPO_CONTRIBUTORS } from '../../actions/repoContributors';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPO_CONTRIBUTORS:
      const nextState = { ...state };
      action.contributors.forEach(c => {
        nextState[c.id] = c;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;
