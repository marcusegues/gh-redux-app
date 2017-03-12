import React from 'react';
import { Navbar } from 'react-bootstrap';
import FilterLink from './filterLink';
import { ALL, FAVORITES } from './../constants/routeConstants';

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
        <FilterLink filter={FAVORITES}>
          Favorites
        </FilterLink>
      </Navbar.Text>
      <Navbar.Text pullRight>
        <FilterLink filter={ALL}>
          All Users
        </FilterLink>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
