import React, { useState } from "react";
import Routes from "./Routes";
import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";

var Scroll = require('react-scroll');

var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scrollSpy = Scroll.scrollSpy;




export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  function handleLogout() {
  userHasAuthenticated(false);}
  return (
    <div className="App container py-3">
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Navigation</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav activeKey={window.location.pathname}>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}
