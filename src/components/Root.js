import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import UserProfileContainer from './userProfileContainer';
import UserListContainer from './userListContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} >
        <Route path="/(:filter)" component={UserListContainer} />
        <Route path="/users/(:login)" component={UserProfileContainer} />
        <Route path="/repos/(:repo)" component={UserProfileContainer} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
