import React, { Component } from 'react';
import "./title.css";

class Title extends React.Component {
  render() {

    return (
    <div className="lander" style={{position: 'relative'}}>
        <h1 style={{color: this.props.color}} >{this.props.title}</h1>
        <p style={{color: this.props.color}}>{this.props.subtitle}</p>
    </div >

    
    );
  }
}
export default Title;
