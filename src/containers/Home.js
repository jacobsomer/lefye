import React from "react";
import "./Home.css";
import Presentation from './sections/presentation';
import ParticleAnimation from './sections/particles';
import Title from './sections/title';
import ArtistCard from "./sections/ArtistCard"
import ArtistCard1 from "./sections/ArtistCard1"
import { themes } from "../libs/contextLib";
import FadeIn from 'react-fade-in';
import Card from 'react-bootstrap/Card';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];

export default function Home(props) {
  let b=(props.theme.theme===themes.dark || props.theme.theme===themes.dark1 || props.theme.theme===themes.dark2);
  let cur=(props.theme.position>(props.theme.height/4));

  return (
    <div className="Home" style={{backgroundImage:props.theme.theme.gradient,height:"300vh"}}>
        <div id="hello" style={{position:"relative"}} >
          <Title color={props.theme.theme.text}  title="Spotify project" subtitle="An App that makes you feel something"/>  
        </div>
        <div id="particles" style={{position:"absolute"}}>
          <ParticleAnimation style={{width: "100%", height: "100%", backgroundSize: "cover"}} color={props.theme} />   
        </div>
        <div id="cards" style={{top:"24vh",position:"absolute"}}>
          <Presentation  theme={props.theme.theme}/>  
          
         
        </div>
        <div className="a" style={{top:"100vh",height:'50vh',position:'absolute',width:"100%",backgroundImage:'linear-gradient('+props.theme.theme.body+', '+props.theme.theme.body+')'}}> 
            <Title color={props.theme.theme.text}  title="" subtitle=""/>  
        </div>
        <div id="content" style={{top:"100vh",position:"absolute",backgroundColor:props.theme.theme.body}}>
          {!cur ? ( <div id="content">
            </div> ):( !b ? (
              <FadeIn delay="1000" transitionDuration="1000">
                <ArtistCard color={props.theme.theme.text}style={{position: 'absolute',backgroundColor:props.theme.theme.body}}/>
              </FadeIn>
            ):(
              <FadeIn delay="0" transitionDuration="1000">
              <ArtistCard1 color={props.theme.theme.text}style={{position: 'absolute',backgroundColor:props.theme.theme.body}}/>
            </FadeIn>  
            ))
          }
          </div>
        </div>
    
    
  );
}
