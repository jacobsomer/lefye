import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleAnimation extends React.Component {
  render() {
    return (
      <Particles

         params={{
           particles: {
             number: {
               value: 200,
               density: {
                 enable: true,
                 value_area: 1000,
               }
             },
            "color": {
              "value": this.props.color.theme.text
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": {
                "value": this.props.color.theme.borders
              },
              "opacity": 0.4,
              "width": 1
            },
           },
         }}
       />

    );
  }
}
export default ParticleAnimation;
