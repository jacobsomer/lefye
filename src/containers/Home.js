import React from "react";
import "./Home.css";
import Cards from './sections/cards';
import ParticleAnimation from './sections/particles';
import Title from './sections/title';


export default function Home(props) {
  return (
    <div className="Home" >
      <div style={{background:props.theme.theme.gradient,
        width: "100%",
        height: "100vh",
        left: "0",
        top: "0",
        position:"relative"}}>
        <div id="title">
          <Title color="#ff6055" title="Spotify project" subtitle="An App that makes you feel something"/>
        </div>
        <div id="particles" position="relative">
          <ParticleAnimation color={props.theme}/>
        </div>
        <div style={{ backgroundSize: "auto",backgroundImage:"linear-gradient(to bottom,white, #25294b 50%)"}}>
        <Title color="black" title="The Grind" subtitle="24"/>
          <Cards/>
          <Cards/>
      </div>
      </div>
      
    </div>
    
    
  );
}
