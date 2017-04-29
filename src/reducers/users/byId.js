import { RECEIVE_USERS } from '../../actions/users';
import { RECEIVE_REPOS } from '../../actions/repos';

const user = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...action.user,
        repos: state.repos ? [...state.repos] : [],
      };
    case RECEIVE_REPOS: {
      const repoIds = new Set([...state.repos]);
      action.repos.forEach(r => repoIds.add(r.id));
      return {
        ...state,
        repos: [...repoIds],
      };
    }
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_USERS:
      action.users.forEach(u => {
        nextState[u.id] = user(state[u.id], { ...action, user: u });
      });
      return nextState;
    case RECEIVE_REPOS:
      nextState[action.id] = user(state[action.id], action);
      return nextState;
    default:
      return state;
  }
};

export default byId;
