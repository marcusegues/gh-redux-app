export const fetchUsers = lastReceivedId => {
  debugger
  return fetch(`https://api.github.com/users?since=${lastReceivedId}`)
}

export const fetchRepos = login =>
  fetch(`https://api.github.com/users/${login}/repos`)

export const fetchRepoContributors = (login, repo) =>
  fetch(`https://api.github.com/repos/${login}/${repo}/contributors`)
