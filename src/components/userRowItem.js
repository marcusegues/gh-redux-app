import React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';
import './../static/sass/App.css';
import './../static/sass/fonts.css';

class UserRowItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddUserToFavorites = this.handleAddUserToFavorites.bind(this);
  }

  handleAddUserToFavorites() {
    this.props.addUserToFavorites(this.props.user);
  }

  render() {
    const { avatarUrl, login } = this.props.user;
    const iconClasses = classNames(
      'star-icon',
      'material-icons',
      'pull-right',
      {
        'star-icon--favorited': this.props.favorited,
      },
    )

    return (
      <Row className="show-grid user-row flex-container">
        <Col xs={3} sm={3} className='user-row__avatar'>
          <img
            alt='avatar'
            src={avatarUrl}
          />
        </Col>
        <Col xs={6} sm={5} className='user-row__login'>{login}</Col>
        <Col xs={4} sm={4}>
          <i
            className={iconClasses}
            onClick={this.handleAddUserToFavorites}
          >
            star
          </i>
        </Col>
      </Row>
    );
  }
}

export default UserRowItem;
