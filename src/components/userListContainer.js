import { connect } from 'react-redux';
import UserList from './userList';
import { fetchUsers } from './../actions/users';

// // Actions
// import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
// import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
