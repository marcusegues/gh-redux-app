This project is a single-page web application implemented in react.js and redux. It fetches users from Github's public API and displays them. The user can then favorite users, and there is a separate route to display these favorited users. The routes are handled with React Router.

Features of this project
- Utilizes Redux to maintain application state
- Utilizes Redux Thunk middleware for async action creators (fetching Github users asynchronously)
- Utilizes React Router to manage routes, specifically by using Router params and withRouter to inject into connected components
- Utilizes react-bootstrap components for main portions of the UI, such as the navigation bar at the top (Navbar), and the rows of users (Grid)
- Utilizes custom css (through preprocessor SASS) for easy centering with flexbox, material design icon fonts, and other small styling details.
- Utilizes browser's localStorage API for persisting specifically the favorited users. The list of all users is not persisted, it is fetched on every refresh.
- Utilizes selector functions in reducer files to keep knowledge of the state shape where it should be, and not in the view layer

To view locally, clone the repo, run ```npm install``` and ```npm start```.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
