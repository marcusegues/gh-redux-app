import { RECEIVE_REPO_CONTRIBUTORS, REQUEST_REPO_CONTRIBUTORS } from '../../actions/repoContributors';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_REPO_CONTRIBUTORS:
      return true;
    case RECEIVE_REPO_CONTRIBUTORS:
      return false;
    default:
      return state;
  }
};

export default isFetching;
