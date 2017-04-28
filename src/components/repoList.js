import React from 'react';
import RepoRowItem from './repoRowItem';
import { Grid } from 'react-bootstrap';

class RepoList extends React.Component {

  render() {
    let { repos } = this.props;
    repos = repos.map(repo =>
      <RepoRowItem
        repo={repo}
        key={repo.id}
      />);
    return (
      <Grid>
        {repos}
      </Grid>
    )
  }
}

export default RepoList;
