export const requestUsers = () => ({
  type: 'REQUEST_USERS'
});

export const receiveUsers = (users) => ({
  type: 'RECEIVE_USERS',
  users,
});

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
