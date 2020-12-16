import React from 'react';
import {Image} from 'react-bootstrap';
import "./presentation.css";


import {ReactComponent as Listen} from "./../images/Logos/Listen.svg";
import {ReactComponent as Logo} from "./../images/Logos/spotifyLogo.svg";

import {ReactComponent as Analytics} from "./../images/Logos/analytics.svg";

import FadeIn from 'react-fade-in';

import {ThemeContext, themes} from './../../libs/contextLib';

import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

function Col(props){
  const cur=props.theme;
  if (cur===themes.dark){
    return (<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Logo fill={themes.dark.text} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Analytics fill={themes.dark.body} stroke={themes.dark.text}style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Listen fill={themes.dark.text} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
            </FadeIn >
          </div>
       </FadeIn>
       </div>
           </div>)
  }
  else if (cur===themes.dark1){
    return(<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Logo fill={themes.dark1.text} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Analytics fill="transparent" stroke={themes.dark1.text}style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Listen fill={themes.dark1.text} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
            </FadeIn >
          </div>
       </FadeIn>
       </div>
           </div>)
  }
 
  else if (cur===themes.light  || cur===themes.dark2|| cur===themes.light2){
    return  (<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Logo fill={themes.light.text} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Analytics fill="transparent" stroke={themes.light.text}style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Listen fill={themes.light.text} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
            </FadeIn >
          </div>
       </FadeIn>
       </div>
           </div>)
  }
  else{
    return (<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Logo fill={themes.light1.text} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Analytics fill="transparent" stroke={themes.light1.text}style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Listen fill={themes.light1.text} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
            </FadeIn >
          </div>
       </FadeIn>
       </div>
           </div>)
  }
}
class Presentation extends React.Component {
  render() {
    return (
      <div id="card1">
        <Col theme={this.props.theme} /> 
      </div>
    );
  }
}
export default Presentation;
