import { createStore, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  // const persistedState = loadState();
  const persistedState = {
    users: {
      isFetching: false,
      items: [],
    }
  }
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(
      thunkMiddleware
    )
  );

  // throttle savingState to cap # of saves to localStorage
  store.subscribe(throttle(() => {
    saveState({
      users: store.getState().users,
    });
  }, 1000));

  return store;
};

export default configureStore;
