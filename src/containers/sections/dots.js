import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Dots extends React.Component {
  render() {
    return (
      <Particles
         params={{
           particles: {
             number: {
               value: 100,
               density: {
                 enable: true,
                 value_area: 200,
               },
               width:400,
               opacity:1
             },
             "size": {
                "value": 10, 
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 5,
                  "sync": false
                }
              },
            "color": {
              "value": [this.props.color.theme.borders,this.props.color.theme.body]
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": {
                "value": this.props.color.theme.borders
              },
              "opacity": 0.4,
              "width": 4
            },
           },
         }}
       />

    );
  }
}
export default Dots;