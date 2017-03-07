import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import advanonApp from './reducers/root';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  // const persistedState = loadState();
  const persistedState = {
    users: [{
      name: "Marcus"
    }, {
      name: "Ramona"
    }]
  }
  const store = createStore(advanonApp, persistedState);

  // throttle savingState to cap # of saves to localStorage
  store.subscribe(throttle(() => {
    saveState({
      users: store.getState().users,
    });
  }, 1000));

  return store;
};

export default configureStore;
