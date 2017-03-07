import React from 'react';
import UserListContainer from './userListContainer';
import NavigationBar from './navigationBar';

const App = ({ params }) => (
  <div>
    <NavigationBar />
    <UserListContainer
      filter={params.filter || "all"}
    />
  </div>
);

export default App;
