import React from 'react';
import { Grid } from 'react-bootstrap';
import UserRowItemContainer from './userRowItemContainer';

const UserProfile = ({ user, repos }) => {
  // repos = repos.map(r => <RepoRowItem)
  const userRow = user ?
    <Grid>
      <UserRowItemContainer
        key={user.id}
        user={user}
      />
    </Grid> : null

  return (
    userRow
  );
}

export default UserProfile;
