import { RECEIVE_USERS } from '../../actions/users';

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      const newState = new Set([...state]);
      action.users.forEach(user => newState.add(user.id));
      return [...newState];
    default:
      return state;
  }
};

export default allIds;
