import * as api from '../api';
import { receiveUsers } from './users';

export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REQUEST_REPO_CONTRIBUTORS = 'REQUEST_REPO_CONTRIBUTORS';
export const RECEIVE_REPO_CONTRIBUTORS = 'RECEIVE_REPO_CONTRIBUTORS';

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
          contributorIds: [],
        })), user.id))
      })  // we should probably also handle errors in the network
  }
}

const requestRepoContributors = () => ({
  type: REQUEST_REPO_CONTRIBUTORS
});

const receiveRepoContributors = (contributorIds, repoId) => {
  return {
    type: RECEIVE_REPO_CONTRIBUTORS,
    contributorIds,
    repoId
  }
}

export const fetchRepoContributors = (login, repo) => {
  return (dispatch) => {
    dispatch(requestRepoContributors())  // update app state to inform that API call is starting
    return api.fetchRepoContributors(login, repo.name)  // promise
      .then(response => response.json())
      .then(contributors => {
        contributors = contributors.map(c => ({
          id: c.id,
          login: c.login,
          avatarUrl: c.avatar_url,
        }));
        dispatch(receiveUsers(contributors));
        dispatch(receiveRepoContributors(contributors.map(c => c.id), repo.id));
      })  // we should probably also handle errors in the network
  }
}

window.fetchRepoContributors = fetchRepoContributors;
