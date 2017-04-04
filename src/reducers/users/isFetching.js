import { RECEIVE_USERS, REQUEST_USERS } from '../../actions/users';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return true;
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};

export default isFetching;
