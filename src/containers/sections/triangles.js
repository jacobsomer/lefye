import React, { Component } from 'react';
import Logo from "./../images/triangles.png";


class Triangle extends React.Component {
  render() {
    return (
      <div id="triangle">
        <img src={Logo}/>
      </div>

    );
  }
}
export default Triangle;
