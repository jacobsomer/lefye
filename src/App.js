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
      position: window.pageYOffset,
      previous:themes.light,
      height:1000,
      width:1000
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme!==themes.light
            ?state.theme!==themes.light1
              ? state.theme!==themes.light2
                ?state.theme!==themes.dark
                  ?state.theme!==themes.dark1
                    ?themes.light2
                    :themes.light1
                  :themes.light
                :themes.dark2
              :themes.dark1
            :themes.dark
      }));
    };

    this.getPosition =() =>{
      this.setState(state=>({
        position:window.pageYOffset,
        
      }));
      this.setState(state=>({
        height:window.innerHeight,        
      }));
  }}


  // listenScrollEvent = e => {
  //   const darkModeSet=new Set([themes.dark,themes.dark1,themes.dark2]);
  //   this.setState({height: window.innerHeight});   
  //   if (darkModeSet.has(this.state.theme)){
  //     if (window.scrollY <= this.state.height) {
  //       this.setState({position: window.scrollY});
  //       this.setState(state => ({
  //         theme:
  //           themes.dark,
  //       }));
  //     } else if (window.scrollY > this.state.height && window.scrollY<=2*this.state.height){
  //       this.setState({position: window.scrollY})
  //       this.setState(state => ({
  //         theme:
  //             themes.dark1,
  //       }));
  //     }
  //     else {
  //       this.setState({position: window.scrollY})
  //       this.setState(state => ({
  //         theme:
  //             themes.dark2,
  //       }));
  //     }

  //   }
  //   else{
  //     if (window.scrollY <= this.state.height) {
  //       this.setState({position: window.scrollY});
  //       this.setState(state => ({
  //         theme:
  //           themes.light,
  //       }));
  //     } else if (window.scrollY >this.state.height && window.scrollY<2*this.state.height){
  //       this.setState({position: window.scrollY})
  //       this.setState(state => ({
  //         theme:
  //             themes.light1,
  //       }));
  //     }
  //     else {
  //       this.setState({position: window.scrollY})
  //       this.setState(state => ({
  //         theme:
  //             themes.light2,
  //       }));
  //     }
  //   }
    
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent)
  // }
  
  

  render() {
  return (
      <div className="Home" style={{backgroundImage:this.state.theme.gradient,height:"300vh"}}>
        <Navbar outline="light" style={{background: this.state.theme.body}} expand="lg" sticky="top" >
          <LinkContainer to="/" style={{color:this.state.theme.text}}>
            <Navbar.Brand href="#home">Navigation</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:this.state.theme.text}}/>
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
                {(this.state.theme.id==="d0" || this.state.theme.id==="d1" || this.state.theme.id==="d2") ? (
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
