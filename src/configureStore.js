import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );

  return store;
};

export default configureStore;
