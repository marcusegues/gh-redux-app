import * as api from '../api';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const TOGGLE_USER_IN_FAVORITES = 'TOGGLE_USER_IN_FAVORITES';

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addUserToFavorites = (user) => ({
  type: TOGGLE_USER_IN_FAVORITES,
  user
})

// Async action creators

// This one works with redux-thunk
export const fetchUsers = lastReceivedId => {
  return (dispatch) => {
    dispatch(requestUsers())  // update app state to inform that API call is starting
    return api.fetchUsers(lastReceivedId)  // promise
      .then(response => response.json())
      .then(users => {
        debugger
        dispatch(receiveUsers(users.map(user => ({  // update state with results of API call
          id: user.id,
          login: user.login,
          avatarUrl: user.avatar_url,
        }))))
      })  // we should probably also handle errors in the network
  }
}
