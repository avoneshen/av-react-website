import React, { Component } from 'react';

// Utility & Nav dependency
// also required to push to history
import { Link, withRouter } from 'react-router-dom';

// Navbar
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// React Router
import Routes from './Routes';
import './App.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
// import FA Brand icons
import { fab } from '@fortawesome/free-brands-svg-icons';

// AWS settings
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile)

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              { /* brand hovers on the left */ }
              <Navbar.Brand>
                  <Link to="/">Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            { /* collapse enables mobile hamburger */ }
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/contact-me">
                  <NavItem>Contact</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <LinkContainer to="/projects">
                  <NavItem>Projects</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <LinkContainer to="/about-me">
                  <NavItem>About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          { /* Import the Routes component */ }
          <Routes />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
