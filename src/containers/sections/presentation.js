import React from 'react';
import {Image} from 'react-bootstrap';
import "./presentation.css";

import Listen from "./../images/Logos/Listen.svg?text=Noc";
import Listen1 from "./../images/Logos/Listen1.svg?text=Noc";
import Listen2 from "./../images/Logos/Listen2.svg?text=Noc";
import Listen3 from "./../images/Logos/Listen3.svg?text=Noc";

import Logo from "./../images/Logos/spotifyLogo.svg?text=Noc";
import Logo1 from "./../images/Logos/spotifyLogo1.svg?text=Noc";
import Logo2 from "./../images/Logos/spotifyLogo2.svg?text=Noc";
import Logo3 from "./../images/Logos/spotifyLogo3.svg?text=Noc";

import Arrow from "./../images/Logos/Arrow.svg?text=Noc";
import Arrow1 from "./../images/Logos/Arrow1.svg?text=Noc";
import Arrow2 from "./../images/Logos/Arrow2.svg?text=Noc";
import Arrow3 from "./../images/Logos/Arrow3.svg?text=Noc";

import Analytics from "./../images/Logos/analytics.svg?text=Noc";
import Analytics1 from "./../images/Logos/analytics1.svg?text=Noc";
import Analytics2 from "./../images/Logos/analytics2.svg?text=Noc";
import Analytics3 from "./../images/Logos/analytics3.svg?text=Noc";
import FadeIn from 'react-fade-in';

import {ThemeContext, themes} from './../../libs/contextLib';

function Col(props){
  const cur=props.theme;
  if (cur===themes.dark){
    return (<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Image src={Logo} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Image src={Analytics} style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Image src={Listen} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
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
         <Image src={Logo1} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Image src={Analytics1} style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Image src={Listen1} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
            </FadeIn >
          </div>
       </FadeIn>
       </div>
           </div>)
  }
  else if (cur===themes.light){
    return  (<div>
      <div style={{position:"relative", left:"41vw"}}>  
       <FadeIn delay="1000" transitionDuration="1000">
         <Image src={Logo2} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Image src={Analytics2} style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Image src={Listen2} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
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
         <Image src={Logo2} style={{height:'22vh',width:'18vw'}}fluid /> 
         <FadeIn delay="1000" transitionDuration="1000">
           <Image src={Analytics2} style={{height:'22vh',width:"18vw"}} fluid /> 
         </FadeIn> 
         <div style={{ position:"relative",height:'22vh'}}>
            <FadeIn delay="1000" transitionDuration="1000">
              <Image src={Listen2} style={{position:'relative',top:"5vh",height:'22vh',width:"18vw"}} fluid /> 
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
