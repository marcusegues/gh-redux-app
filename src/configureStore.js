import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    )
  );

  return store;
};

export default configureStore;
