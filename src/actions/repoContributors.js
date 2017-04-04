import * as api from '../api';
import { v4 } from 'node-uuid';
// import { receiveUsers } from './users';

export const REQUEST_REPO_CONTRIBUTORS = 'REQUEST_REPO_CONTRIBUTORS';
export const RECEIVE_REPO_CONTRIBUTORS = 'RECEIVE_REPO_CONTRIBUTORS';

export const requestRepoContributors = () => ({
  type: REQUEST_REPO_CONTRIBUTORS
});

const receiveRepoContributors = (contributors) => {
  return {
    type: RECEIVE_REPO_CONTRIBUTORS,
    contributors,
  }
}

const receiveUsers = (users) => ({
  type: 'RECEIVE_USERS',
  users,
});

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
        const repoContributors = contributors.map(c => ({
          id: v4(),
          repoId: repo.id,
          userId: c.id,
        }));
        debugger;
        dispatch(receiveUsers(contributors));
        dispatch(receiveRepoContributors(repoContributors));
      })  // we should probably also handle errors in the network
  }
}

window.fetchRepoContributors = fetchRepoContributors;
