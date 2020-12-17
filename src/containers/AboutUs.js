import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AboutUs.css";
import Dots from './sections/dots';
import Title from './sections/title';

class AboutUs extends React.Component {
    render() {
  
      return (
        <div className="AboutUs"  style={{background:this.props.theme.theme.gradient,
            width: "100%",
            height: "100vh",
            textAlign:"center"
            }}>
            <h1 style={{color: this.props.theme.theme.text,left:"center"}} >About Us</h1>
            <p style={{color: this.props.theme.theme.text}}>{this.props.subtitle}</p>
            <div id="particles" style={{position:"absolute"}}>
                <Dots color={this.props.theme}/>
            </div>
          </div>
  
      
      );
    }
  }
  export default AboutUs;