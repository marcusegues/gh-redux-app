import { RECEIVE_REPO_CONTRIBUTORS } from '../../actions/repos';

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REPO_CONTRIBUTORS:
      return [...state, ...action.contributors.map(c => c.id)];
    default:
      return state;
  }
};

export default allIds;
