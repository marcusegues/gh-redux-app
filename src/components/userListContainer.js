import { connect } from 'react-redux';
import UserList from './userList';

// // Actions
// import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
// import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = dispatch => ({
//   receiveTodos: () => dispatch(receiveTodos()),
//   receiveTodo: todo => dispatch(receiveTodo(todo))
// });

export default connect(
  mapStateToProps
)(UserList);
