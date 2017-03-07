import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("fuck eyah")
  }

  render() {
    const { users } = this.props;
    const usersArray = users.map((user, i) => (
      <li key={i}>{user.name}</li>
      )
    )
    return (
      <div>
        <button onClick={this.handleClick}>{'Fuck yeah'}</button>
        <ul>
          {usersArray}
        </ul>
      </div>
    )
  }
}

export default UserList;
