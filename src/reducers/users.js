import { REQUEST_USERS, RECEIVE_USERS, TOGGLE_USER_IN_FAVORITES } from './../actions/users';
import { combineReducers } from 'redux';
import { ALL, FAVORITES } from './../constants/routeConstants';


const favorites = (state = new Set([]), action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      const user = state.has[action.user.id];
      const newState = new Set([...state]);
      if (user) {
        return newState.delete(action.user.id);
      } else {
        return newState.add(action.user.id);
      }
    default:
      return state;
  }
}

// ----------
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      const nextState = { ...state };
      action.users.forEach(user => {
        nextState[user.id] = user;
      });
      return nextState;
    default:
      return state;
  }
};


const getUser = (state, id) => state[id];
// ----------


const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return [...state, ...action.users.map(user => user.id)];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return true;
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};

const lastReceivedId = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        lastReceivedId: action.users[action.users.length - 1].id
      }
    default:
      return state;
  }
};

const users = combineReducers({
  byId,
  allIds,
  isFetching,
  lastReceivedId,
  favorites
});

export default users;

const users1 = (state = {
  isFetching: false,
  lastReceivedId: 0,
  items: [],
  favorites: {},
}, action) => {
  switch (action.type) {
    case TOGGLE_USER_IN_FAVORITES:
      return {
        ...state,
        favorites: favorites(state.favorites, action)
      }
    case REQUEST_USERS:
      return {...state, isFetching: true}
    case RECEIVE_USERS:
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



const getAllUsers = (state) => {
  return state.allIds.map(id => state.byId[id]);
}

// Selectors
export const getVisibleUsers = (state, filter) => {
  const allUsers = getAllUsers(state);
  debugger;
  switch (filter) {
    case ALL:
      return allUsers;
    case FAVORITES:
      return allUsers.filter(u => state.favorites.hasOwnProperty(u.id))
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

export const isFavorite = (state, user) => {
  return state.favorites.hasOwnProperty(user.id)
}
