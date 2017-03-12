import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ALL, FAVORITES } from './../constants/routeConstants';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === ALL ? '/' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf([ALL, FAVORITES]).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
