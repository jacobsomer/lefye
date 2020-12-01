import React from "react";
import "./Home.css";
import logo from "./headphones1.gif";
import Image from 'react-bootstrap/Image'
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className="Home">
    <div style={{position: ''}}>
    <div className="lander" style={{position: ''}}>
      <h1>Spotify Project</h1>
      <p>Song recommendations that make you feel something.</p>
    </div>
    <Particles
       params={{
         particles: {
           number: {
             value: 500,
             density: {
               enable: true,
               value_area: 2000,
             }
           },
         },
       }}
     />

    </div>


    </div>

  );
}
