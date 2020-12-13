import React from "react";
import "./Home.css";
import Presentation from './sections/presentation';
import ParticleAnimation from './sections/particles';
import Title from './sections/title';


export default function Home(props) {

  
  return (
    <div className="Home" >
      <div style={{background:"",
        width: "100%",
        left: "0",
        top: "0",
        position:"relative"}}>
          <div id="title">
            <Title color={props.theme.theme.text} title="Spotify project" subtitle="An App that makes you feel something"/>
          </div>
          <div id="particles" position="relative">
            <ParticleAnimation color={props.theme}/>
            
          </div>
          <div id="cards" style={{top:"24vh",position:"absolute"}}>
            <Presentation  theme={props.theme.theme}/>
          </div>
      </div>
    </div>
    
    
  );
}
