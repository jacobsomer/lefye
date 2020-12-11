import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../libs/contextLib";

export default function userHasAuthenticatedLogin() {
  const mode=localStorage.getItem("mode");
 



  return (
    <div className="Login">
      <Form >
        <Form.Group size="lg" controlId="email">
          <Form.Label style={{color: mode ? 'red' : '#ff6055'}}>Email</Form.Label>
         
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label style={{color: mode ? 'red' : '#ff6055'}} >Password</Form.Label>
         
        </Form.Group>
        <Button variant="outline-light" block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
