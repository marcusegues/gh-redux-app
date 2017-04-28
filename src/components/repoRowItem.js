import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class RepoRowItem extends React.Component {
  render() {
    const { repo } = this.props;

    return (
      <Row className="show-grid repo-row flex-container">
        <Col xs={6} sm={6}>
          <Link
            to={`repos/${repo.name}`}
          >
            {repo.name}
          </Link>
        </Col>
        <Col xs={6} sm={6}>
          <a href={repo.htmlUrl}>
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </Col>
      </Row>
    )
  }
}

export default RepoRowItem;
