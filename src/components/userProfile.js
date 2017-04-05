import React from 'react';
import './../static/sass/App.css';
import './../static/sass/fonts.css';
import UserRowItemContainer from './userRowItemContainer';

const UserProfile = ({ user }) => {
  const d = user ?
    <UserRowItemContainer
      key={user.id}
      user={user}
    /> : null;
  return (
    d
  );
}

export default UserProfile;
