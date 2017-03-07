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
    const { users } = this.props;
    const usersArray = users.items.map((user, i) => (
      <li key={i}>{user.login}</li>
      )
    )
    return (
      <div>
        <div>{users.isFetching ? 'Fetching...' : null}</div>
        <Button bsStyle={'primary'} onClick={this.handleClick}>{'Fetch'}</Button>
        <ul>
          {usersArray}
        </ul>
      </div>
    )
  }
}

export default UserList;
