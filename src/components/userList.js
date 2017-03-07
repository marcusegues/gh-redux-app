import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchUsers()
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
        <button onClick={this.handleClick}>{'Fuck yeah'}</button>
        <ul>
          {usersArray}
        </ul>
      </div>
    )
  }
}

export default UserList;
