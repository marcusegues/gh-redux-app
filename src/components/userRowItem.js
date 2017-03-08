import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './../App.css';

class UserRowItem extends React.Component {
  render() {
    const { avatarUrl, login } = this.props.user;
    return (
      <Row className="show-grid user-row flex-container">
        <Col xs={2} className='user-row__avatar'><img src={avatarUrl}/></Col>
        <Col xs={4} className='user-row__login'>{login}</Col>
        <Col xs={6}><i className="material-icons pull-right">star</i></Col>
      </Row>
    );
  }
}

export default UserRowItem;
