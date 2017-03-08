import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUsers } from './../actions/users';
import { getVisibleUsers } from './../reducers/root';
import UserList from './userList';

const mapStateToProps = (state, { params }) => ({
  users: getVisibleUsers(state, params.filter || 'all'),
  isFetching: state.users.isFetching,
  lastReceivedId: state.users.lastReceivedId,
  filter: params.filter || 'all',
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (id) => dispatch(fetchUsers(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,  // could use mapDispatchToProps shorthand notation here: {fetchUsers}
)(UserList));
