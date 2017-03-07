import { connect } from 'react-redux';
import UserList from './userList';
import { fetchUsers } from './../actions/users';

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case 'all':
      return users;
    case 'favorites':
      return users // need to users.filter(u => u.favorite)
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  filter: ownProps.filter
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
