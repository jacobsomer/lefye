import React from "react";
import "./Home.css";
import Cards from './sections/cards';
import ParticleAnimation from './sections/particles';
import Triangle from './sections/triangles';

export default function Home() {
  return (
    <div className="Home">
      <div style={{position: ''}}>
        <div className="lander" style={{position: 'relative'}}>
          <h1>Spotify Project</h1>
          <p>Song recommendations that make you feel something.</p>

        </div >
        <div id="particles">
          <ParticleAnimation />
        </div>
        <div id="card">
          <Cards />
          <div id="card1">
            <Cards />
          </div>
        </div>
        <div id="triangle" style={{position: 'absolute'}}>
        </div>
       </div>

    </div>


  );
}
