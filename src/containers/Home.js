import React from "react";
import "./Home.css";
import Presentation from './sections/presentation';
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
            <Title color={props.theme.theme.text} title="Spotify project" subtitle="An App that makes you feel something"/>
          </div>
          <div id="particles" position="relative">
            <ParticleAnimation color={props.theme}/>
          </div>
      </div>
      <div style={{ backgroundSize: "auto",
            width: "100%",
            height: "100vh",
            left: "0",
            top: "0",
            backgroundImage:props.theme.theme.gradient}}>
          <div id="cards" >
            <Presentation style={{verticalAlign:"middle"}} color={props.theme.theme}/>
          </div>
      </div>
      
      <div style={{ backgroundSize: "auto",
            width: "100%",
            height: "100vh",
            left: "0",
            top: "0",
            backgroundImage:props.theme.theme.gradient}}>
      </div>
    </div>
    
    
  );
}
