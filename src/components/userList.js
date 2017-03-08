import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.handleRequestUsers = this.handleRequestUsers.bind(this);
  }

  componentDidMount() {
    this.handleRequestUsers();
  }

  handleRequestUsers() {
    this.props.fetchUsers(this.props.lastReceivedId);
  }

  handleAddFavorite(e) {
    console.log(e.target.id)
    // this.props.addFavorite()
  }

  render() {
    const { users, isFetching } = this.props;
    const usersList = users.map((user, i) => (
      <li
        key={user.id}
        onClick={this.handleAddFavorite}
      >
        {user.login}
      </li>
      )
    )
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6}><div>{isFetching ? 'Fetching...' : null}</div></Col>
          <Col xs={6}><Button bsStyle={'primary'} onClick={this.handleRequestUsers}>{'Fetch'}</Button></Col>
        </Row>
        <ul>
          {usersList}
        </ul>
      </Grid>
    )
  }
}

export default UserList;
