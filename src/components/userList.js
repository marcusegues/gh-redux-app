import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import UserRowItemContainer from './userRowItemContainer';
import './../static/sass/App.css';
import { Spinner } from './spinner';
import { ALL } from './../constants/routeConstants';

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

  render() {
    const { users, isFetching, filter } = this.props;
    const usersList = users.map((user, i) => (
      <UserRowItemContainer
        key={user.id}
        user={user}
      />
      )
    )

    return (
      <Grid>
        <Row className="show-grid header-row flex-container">
          <Col xs={6}>
            {isFetching && filter === ALL ? <Spinner message={"Fetching users..."} /> : null}
          </Col>
          <Col xs={6}>
            {filter === ALL ?
              <Button
                className="pull-right"
                bsStyle={'primary'}
                onClick={this.handleRequestUsers}
                disabled={this.props.isFetching ? true : false}
              >
                {'Fetch More Users!'}
              </Button> : null}
          </Col>
        </Row>
        {usersList}
      </Grid>
    )
  }
}

export default UserList;
