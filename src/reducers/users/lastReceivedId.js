import { RECEIVE_USERS } from '../../actions/users';

const lastReceivedId = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users[action.users.length - 1].id
    default:
      return state;
  }
};

export default lastReceivedId;
