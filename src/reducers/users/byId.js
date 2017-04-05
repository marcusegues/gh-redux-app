import { RECEIVE_USERS } from '../../actions/users';
import { RECEIVE_REPOS } from '../../actions/repos';

const user = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        repos: state.repos ? [...state.repos] : [],
      };
    case RECEIVE_REPOS:
      return {
        ...state,
        repos: [...state.repos, ...action.repos.map(r => r.id)],
      };
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_USERS:
      action.users.forEach(u => {
        nextState[u.id] = user(u, action);
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
