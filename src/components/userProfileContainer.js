import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserProfile from './userProfile';
import { getUserByLogin } from './../reducers/root';
import { fetchUser } from './../actions/users';

class UserProfileContainer extends React.Component {
  componentDidMount() {
    const { user, login, fetchUser } = this.props;

    if (!user) {
      fetchUser(login);
    }
  }

  componentDidUpdate() {
    const { user, login } = this.props;

    if (!user) {
      fetchUser(login);
    }
  }

  render() {
    return (
      <div>
        <UserProfile {...this.props} />;
      </div>
    );
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    login: params.login,
    user: getUserByLogin(state, params.login)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (login) => dispatch(fetchUser(login))
});

UserProfileContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer));

export default UserProfileContainer;
