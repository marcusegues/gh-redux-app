// TECH TALK - REDUX ASYNC FLOW

// 1. todos app was fully synchronous
// 2. When calling an async API, two important moments:
//    a) start the call
//    b) receive an answer
// Each requires a change in app state, done with normal sync actions.
// Three types of actions involved:
//    a) An action informing the reducers that the request began.
//    b) An action informing the reducers that the request finished successfully.
//    c) An action informing the reducers that the request failed.


// 1. Look at the actions

// 2. What is the shape of the application's state?
// Go into the users reducer to see this.
//    isFetching for spinner
//    lastReceivedId for pagination

//    Other possibilities: We can maybe add a didInvalidate when the data becomes stale, or a lastUpdated

// 3. Write reducers for the initially defined actions.

// 4. How do we use the synchronous action creators we defined earlier together with network requests?
//    Without middleware, Redux store only supports synchronous data flow.
//    This is what you get by default with createStore().

//    Use Redux Thunk Middleware => an action creator can return a function, the action creator is a thunk
//    The function will get executed by the middleware.
//    The function:
//      does not need to be pure: can make async API calls
//      can dispatch actions
// Take a look at the thunk inside our actions/users

// 5. How do we include the Redux Thunk middleware in the dispatch mechanism?
//    use the applyMiddleware() store enhancer
// Take a look at configureStore()

// MIDDLEWARE IN DEPTH
// wraps dispatch to add functionality
// setting this up happens when creating the store

// 1. Example 1: wrap dispatch function to log state before and after actions (todos app)
// Add following code to index.js in todos:

// const addLoggingToDispatch = (store) => {
//   const rawDispatch = store.dispatch;
//   return (action) => {
//     console.group(action.type);
//     console.log('%c prev state', 'color: gray', store.getState());
//     console.log('%c action', 'color: blue', action);
//     const returnValue = rawDispatch(action);
//     console.log('%c next state', 'color: green', store.getState());
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// };
//
// store.dispatch = addLoggingToDispatch(store);

// 2. Example 2: Add custom middleware to gh-app to recognize promises (3 steps below):
//    2.1 Add following code to configureStore:

// const addPromiseSupportToDispatch = (store) => {
//   const rawDispatch = store.dispatch;
//   return (action) => {
//     if (typeof action.then === 'function') {
//       return action.then(rawDispatch);
//     }
//     return rawDispatch(action);
//   };
// };
//
// store.dispatch = addPromiseSupportToDispatch(store)

//    2.2 Comment out previous fetchUsers, and use this one:

// export const fetchUsers = id =>
//   api.fetchUsers(id)
//     .then(response => response.json())
//     .then(users =>
//       receiveUsers(users.map(user => ({  // update state with results of API call
//         id: user.id,
//         login: user.login,
//         avatarUrl: user.avatar_url,
//       })))
//     )

//    2.3 Remove usage of applyMiddleware from createStore

// Now we can dispatch both actions (objects) and promises that resolve to actions
// We could also add the logger middleware to this app, before the promise middleware (copy from todos)
// Note: the order is important: whoever is added last gets executed first (we need the promise to resolve
// before the action is logged)

// 3. Middleware Chain (custom behavior before action reaches reducers):
//    3.1 Rename rawDispatch to next
//    3.2 Not great to overwrite the public API of store and replace with custom functions
//        Create middlewares array and push the middlware functions to this array
//        store.dispatch = ... becomes middlwares.push(...)
//    3.3 We define an array called middlewares in configureStore
//    3.4 Push the two middlewares we have into the array.
//    3.5 Define a function to wrap dispatch for us from the middlewares array:

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares.forEach(middleware => {
//     store.dispatch = middleware(store)(store.dispatch);
//   })
// }

//    3.6 Make next an argument to a returned function in the middlewares
//    3.7 Refactor the middlewares to use arrow functions in one line
//    3.8 Currently the middlewares are written in the order in which the dispatch function is overridden.
//        More natural: add them in the order in which the action propagates through the middlewares.
//        Switch the order that they're pushed, and reverse the sliced array in the wrapDispatchWithMiddlewares

//    3.9 We don't need to roll our own function to successively wrap the dispatch function, like above.
//        This is where applyMiddleware comes in:

// const store = createStore(
//   rootReducer,
//   persistedState,
//   // applyMiddleware(
//   //   ...middlewares
//   // )
// );

//    3.10 Many middlewares are available as NPM packages
//         npm install --save redux-promise
  //         npm install --save redux-logger

//         import promise from 'redux-promise'
//         import createLogger from 'redux-logger'

//         middlewares = [promise]
//         middlewares.push(createLogger())
