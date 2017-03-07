const users = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {...state, isFetching: true}
    case 'RECEIVE_USERS':
      return {...state, items: action.users, isFetching: false}
    default:
      return state;
  }
};

export default users;
