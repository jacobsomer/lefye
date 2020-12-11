import React, { useState } from "react";
import Routes from "./Routes";
import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import "./App.css";
import { LinkContainer } from "react-router-bootstrap";
import {ThemeContext, themes} from './libs/contextLib';


let isAuthenticated=false;
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  

  render() {
  return (
      <div className="Home" style={{backgroundImage:this.state.theme.gradient}}>
        <Navbar outline="light" style={{background: this.state.theme.body}} expand="lg" sticky="top" >
          <LinkContainer to="/" style={{color:this.state.theme.text}}>
            <Navbar.Brand href="#home">Navigation</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:themes.dark.text}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2">
              <Nav activeKey={window.location.pathname}>
                {isAuthenticated ? (
                  <Nav.Link style={{color:this.state.theme.text}}>Logout</Nav.Link>
                ) : (
                  <>
                    <LinkContainer to="/signup" style={{color:this.state.theme.text}}>
                      <Nav.Link >Signup</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login" style={{color:this.state.theme.text}}>
                      <Nav.Link  >Login</Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
                {(this.state.theme.borders==="#ffffff") ? (
                    <Button variant="outline-light" style={{color:this.state.theme.text,border:this.state.theme.text}}onClick={this.toggleTheme}>Light Mode</Button>
                  ) : (
                    <>
                     <Button variant="outline-dark" style={{color:this.state.theme.text,border:this.state.theme.text}}onClick={this.toggleTheme}>Dark Mode</Button>
                    </>
                  )}
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="app" style={{position:"relative"}} >
          <Routes theme={this.state}/>
      </div>
    </div>
  );}
}
export default App;
