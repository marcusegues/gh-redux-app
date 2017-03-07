export const requestUsers = () => ({
  type: 'REQUEST_USERS'
});

export const receiveUsers = (users) => ({
  type: 'RECEIVE_USERS',
  users,
});

export function fetchUsers() {
  return function (dispatch) {
    dispatch(requestUsers())
    return fetch('https://api.github.com/users?per_page=3')
      .then(response => response.json())
      .then(users => {
        console.log(users);
        dispatch(receiveUsers(users))
      })
  }
}
