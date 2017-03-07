import React from 'react';
import { Button } from 'react-bootstrap';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleClick() {
    this.props.fetchUsers();
  }

  render() {
    const { users, isFetching } = this.props;
    const usersList = users.map((user, i) => (
      <li key={i}>{user.login}</li>
      )
    )
    return (
      <div>
        <div>{isFetching ? 'Fetching...' : null}</div>
        <Button bsStyle={'primary'} onClick={this.handleClick}>{'Fetch'}</Button>
        <ul>
          {usersList}
        </ul>
      </div>
    )
  }
}

export default UserList;
