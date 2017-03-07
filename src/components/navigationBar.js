import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FilterLink from './filterLink';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">gh-redux-app</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Navbar.Text pullRight>
      <FilterLink filter='favorites'>
        Favorites
      </FilterLink>
      </Navbar.Text>
      <Navbar.Text pullRight>
      <FilterLink filter='all'>
        All Users
      </FilterLink>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
