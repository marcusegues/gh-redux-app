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
export function fetchUsers(id) {
  return function (dispatch) {
    dispatch(requestUsers())
    return fetch(`https://api.github.com/users?since=${id}`)
      .then(response => response.json())
      .then(users => {
        dispatch(receiveUsers(users.map(user => ({
          id: user.id,
          login: user.login,
          avatarUrl: user.avatar_url,
        }))))
      })
  }
}
