import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUsers } from './../actions/users';
import { getVisibleUsers } from './../reducers/root';
import UserList from './userList';

const mapStateToProps = (state, { params }) => ({
  users: getVisibleUsers(state, params.filter || 'all'),
  isFetching: state.isFetching,
  filter: params.filter || 'all',
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,  // could use mapDispatchToProps shorthand notation here: {fetchUsers}
)(UserList));
