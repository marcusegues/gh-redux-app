import { RECEIVE_REPOS, REQUEST_REPOS } from '../../actions/repos';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return true;
    case RECEIVE_REPOS:
      return false;
    default:
      return state;
  }
};

export default isFetching;
