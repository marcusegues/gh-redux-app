export const fetchUsers = (id) => fetch(`https://api.github.com/users?since=${id}`)
