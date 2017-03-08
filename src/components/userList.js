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
    
    return (
      <Grid>
        <Row className="show-grid header-row flex-container">
          <Col xs={6}>
            {isFetching ? <Spinner message={"Fetching users..."} /> : null}
          </Col>
          <Col xs={6}>
            <Button
              className="pull-right"
              bsStyle={'primary'}
              onClick={this.handleRequestUsers}
            >
              {'Fetch More Users!'}
            </Button>
          </Col>
        </Row>
        {usersList}
      </Grid>
    )
  }
}

export default UserList;
