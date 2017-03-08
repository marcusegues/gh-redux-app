import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import UserRowItem from './userRowItem';
import './../App.css';
import { Spinner } from './spinner';

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

  // handleAddFavorite(e) {
  //   console.log(e.target.id)
  //   // this.props.addFavorite()
  // }

  render() {
    const { users, isFetching } = this.props;
    const usersList = users.map((user, i) => (
      <UserRowItem
        key={user.id}
        user={user}
      />
      )
    )
    const spinnerMessage = users.length === 0 ? "Fetching users..." : "Fetching more users...";
    return (
      <Grid>
        <Row className="show-grid flex-container">
          <Col xs={6}>
            {isFetching ? <Spinner message={spinnerMessage} /> : null}
          </Col>
          <Col xs={6}>
            <Button
              bsStyle={'primary'}
              onClick={this.handleRequestUsers}
            >
              {'Fetch'}
            </Button>
          </Col>
        </Row>
        {usersList}
      </Grid>
    )
  }
}

export default UserList;
