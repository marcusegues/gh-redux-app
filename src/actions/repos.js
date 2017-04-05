import * as api from '../api';

export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export const requestRepos = () => ({
  type: REQUEST_REPOS
});

const receiveRepos = (repos, id) => {
  return {
    type: RECEIVE_REPOS,
    repos,
    id
  }
}

// Async action creators
export const fetchRepos = user => {
  return (dispatch) => {
    dispatch(requestRepos())  // update app state to inform that API call is starting
    return api.fetchRepos(user.login)  // promise
      .then(response => response.json())
      .then(repos => {
        dispatch(receiveRepos(repos.map(repo => ({  // update state with results of API call
          id: repo.id,
          ownerId: user.id,
          name: repo.name,
          htmlUrl: repo.html_url,
        })), user.id))
      })  // we should probably also handle errors in the network
  }
}
