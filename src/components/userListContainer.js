import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUsers } from './../actions/users';
import { getVisibleUsers } from './../reducers/root';
import UserList from './userList';
import { ALL } from './../constants/routeConstants';

const mapStateToProps = (state, { params }) => ({
  users: getVisibleUsers(state, params.filter || ALL),
  isFetching: state.users.isFetching,
  lastReceivedId: state.users.lastReceivedId,
  filter: params.filter || ALL,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (id) => dispatch(fetchUsers(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,  // could use mapDispatchToProps shorthand notation here: {fetchUsers}
)(UserList));
