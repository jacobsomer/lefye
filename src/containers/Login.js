import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import ParticleAnimation from './sections/particles';

export default function userHasAuthenticatedLogin(props) {
  var previous=true;

  function LogIn (props){
    const isLoggedIn=(props.theme.borders==="#ffffff");
  if (isLoggedIn){
    return (<Button  variant="outline-light" style={{color:props.theme.text,outlineColor:"#fff"}} type="submit" block>
    Submit
  </Button>)}
  return  (<Button  variant="outline-dark" style={{color:props.theme.text,outlineColor:"#000"}} type="submit" block>
            Submit
          </Button>)
  }


  return (
    <div className="Login"  style={{background:props.theme.theme.gradient,
    width: "100%",
    height: "100vh",
    left: "0",
    top: "0",
    position:"relative"}}>
      <div id="particles" position="absolute">
          <ParticleAnimation color={props.theme}/>
      </div>
      <Form style={{ position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label  style={{color:props.theme.theme.text}} >Email address</Form.Label>
          <Form.Control  type="email" placeholder="Enter email" />
          <Form.Text  style={{color:props.theme.theme.text}} className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:props.theme.theme.text}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div style={{position:"absolute"}}>
          <LogIn theme={props.theme.theme} />
      </div>
        
      </Form>
      
    </div>
  );
}