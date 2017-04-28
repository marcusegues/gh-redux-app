import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserProfile from './userProfile';
import RepoList from './repoList';
import { getUserByLogin, getUserRepos } from './../reducers/root';
import { fetchUser } from './../actions/users';
import { fetchRepos } from './../actions/repos';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.checkUserPresent = this.checkUserPresent.bind(this);
    this.handleRequestRepos = this.handleRequestRepos.bind(this);
  }

  componentDidMount() {
    this.checkUserPresent().then(this.handleRequestRepos);
  }

  checkUserPresent() {
    const {user, login, fetchUser } = this.props;
    return new Promise((resolve, reject) => {
      if (!user) {
        fetchUser(login).then(resolve);
      } else {
        resolve();
      }
    })
  }

  handleRequestRepos() {
    const { fetchRepos, user } = this.props;
    fetchRepos(user);
  }

  render() {
    return (
      <div>
        <UserProfile {...this.props} />
        <RepoList repos={this.props.repos} />
      </div>
    );
  }
}

const mapStateToProps = (state, { params }) => {
  const user = getUserByLogin(state, params.login);
  return {
    user,
    login: params.login,
    repos: getUserRepos(state, user) || []
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (login) => dispatch(fetchUser(login)),
  fetchRepos: (user) => dispatch(fetchRepos(user)),
});

UserProfileContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer));

export default UserProfileContainer;
