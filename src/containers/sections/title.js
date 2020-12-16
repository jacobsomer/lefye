import React, { Component } from 'react';

class Title extends React.Component {
  render() {

    return (
    <div className="lander" >
        <h1 style={{color: this.props.color}} >{this.props.title}</h1>
        <p style={{color: this.props.color}}>{this.props.subtitle}</p>
    </div >

    
    );
  }
}
export default Title;
