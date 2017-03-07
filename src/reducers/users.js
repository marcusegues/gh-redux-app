const users = (state = {
  isFetching: false,
  lastReceivedId: 0,
  items: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {...state, isFetching: true}
    case 'RECEIVE_USERS':
      return {
        ...state,
        items: [...state.items, ...action.users],
        isFetching: false,
        lastReceivedId: action.users[action.users.length - 1].id
      }
    default:
      return state;
  }
};

export default users;

// Selectors
export const getVisibleUsers = (state, filter) => {
  switch (filter) {
    case 'all':
      return state.items;
    case 'favorites':
      return state // need to users.filter(u => u.favorite)
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}
